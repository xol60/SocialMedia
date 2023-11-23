import React, { useState } from 'react'
import './Login.css'
import { loginUser } from '../../store/actions'
import { useDispatch, useSelector } from "react-redux";
const Login = ({ setLogin }) => {
    const initialState = {
        username: '',
        password: ''
    }
    const [data, setData] = useState(initialState)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    };
    const handleSubmit = async () => {
        const res = await dispatch(loginUser(data))
    }
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
                value={data.username}
                onChange={handleChange}
            />
            <input
                type="password"
                className="infoInput"
                placeholder="Password"
                name="password"
                data={data.password}
                onChange={handleChange}
            />
            <div className='sub-title'>
                <span onClick={setLogin}>Don't have an account Sign up</span>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
export default Login