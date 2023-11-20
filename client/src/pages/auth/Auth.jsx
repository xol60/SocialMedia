import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import Login from "../../components/Login/Login";
import Register from "../../components/Rigister/Register";
const Auth = () => {
    return (
        <div className="Auth">
            <div className="auth-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>XOL Media</h1>
                    <h4>Explore the ideas throughout the world</h4>
                </div>
            </div>
            <div className="auth-right">
                {/* <Login /> */}
                <Register />
            </div>

        </div>
    );
};

export default Auth;