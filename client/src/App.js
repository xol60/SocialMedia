import "./App.css"
import Homepage from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
function App() {
  const isLogin = useSelector((state) => state.auth.isLogin)
  // const isLogin = false;
  return (
    <div className="App">
      <div className="blur first-blur"></div>
      <div className="blur second-blur"></div>
      {/* <Homepage /> */}
      <Routes>
        {
          isLogin ?
            (
              <Route>
                < Route path='/home' element={<Homepage />} />
                < Route path='/profile' element={<Profile />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Route>
            ) :
            (
              <Route>
                <Route path='/login' element={<Auth />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Route>
            )
        }
      </Routes>
    </div>
  );
}

export default App;
