#!/usr/bin/env bash
# Idempotent bootstrap for the MERN social-media app (client + server + socket + MongoDB).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# 1. Install MongoDB (system dependency) if it is not already present.
if ! command -v mongod >/dev/null 2>&1; then
  echo "==> Installing MongoDB 8.0"
  . /etc/os-release
  curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc \
    | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor --yes
  echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu ${VERSION_CODENAME}/mongodb-org/8.0 multiverse" \
    | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
  sudo apt-get update -qq
  sudo apt-get install -y mongodb-org
fi

# Local MongoDB data / log directories.
sudo mkdir -p /data/db /var/log/mongodb
sudo chown -R "$(id -u):$(id -g)" /data/db /var/log/mongodb

# 2. Install Node dependencies for each service.
echo "==> Installing server dependencies"
( cd server && npm ci )

echo "==> Installing socket dependencies"
( cd socket && npm ci )

# The client pins React 17 alongside some newer peers, so legacy peer resolution
# is required. `npm ci` cannot resolve the committed lockfile here, so use
# `npm install --legacy-peer-deps`, which yields a clean CRA build.
echo "==> Installing client dependencies"
( cd client && npm install --legacy-peer-deps )

# 3. Create the server environment file if it does not exist.
#    Firebase values are placeholders so the server boots; real image uploads
#    require a real Firebase project + auth user (see README/PR notes).
if [ ! -f server/.env ]; then
  echo "==> Writing server/.env"
  cat > server/.env <<'EOF'
PORT=3003
MONGO_DB=mongodb://127.0.0.1:27017/socialmedia
JWTKEY=dev_local_jwt_secret_change_me
apiKey=AIzaSyDUMMY-placeholder-key-000000000000000
authDomain=example.firebaseapp.com
projectId=example
storageBucket=example.appspot.com
messagingSenderId=000000000000
appId=1:000000000000:web:0000000000000000000000
FIREBASE_USER=
FIREBASE_AUTH=
EOF
fi

echo "==> install.sh complete"
