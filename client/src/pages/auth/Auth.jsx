import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import Login from "../../components/Login/Login";
import Register from "../../components/Rigister/Register";
const Auth = () => {
    const [login, setLogin] = React.useState(true)
    const changeState = () => {
        setLogin(!login)
    }
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
                {
                    login ? <Login setLogin={changeState} /> : <Register setRegister={changeState} />
                }
            </div>

        </div>
    );
};

export default Auth;