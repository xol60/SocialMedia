import "./App.css"
import Homepage from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import Auth from "./pages/auth/Auth";
function App() {
  return (
    <div className="App">
      <div className="blur first-blur"></div>
      <div className="blur second-blur"></div>
      {/* <Homepage /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
