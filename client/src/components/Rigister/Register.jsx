import React from 'react'
import './Register.css'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/actions'
const Register = ({ setRegister }) => {
    const initialState = {
        username: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    const [data, setData] = React.useState(initialState)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    }
    const handleRegister = async () => {
        await dispatch(registerUser(data))
    }
    return (
        <div className='RegisterForm'>
            <div className="title">
                Signup
            </div>
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    className="infoInput"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="infoInput"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInput"
                    name="username"
                    placeholder="Usernames"
                    value={data.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInput"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="infoInput"
                    name="confirmpass"
                    placeholder="Confirm Password"

                />
            </div>

            <div className="sub-title">
                <span onClick={setRegister} >Already have an account. Login!</span>

                <button className="button" onClick={handleRegister} type="submit">Signup</button>
            </div>

        </div>
    )
}
export default Register