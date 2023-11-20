import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="LoginForm">
            <div className='title'>
                Login
            </div>
            <input
                type="text"
                placeholder="Username"
                className="infoInput"
                name="username"
            />
            <input
                type="password"
                className="infoInput"
                placeholder="Password"
                name="password"
            />
            <div className='sub-title'>
                <span>Don't have an account Sign up</span>
                <button>Login</button>
            </div>
        </div>
    )
}
export default Login