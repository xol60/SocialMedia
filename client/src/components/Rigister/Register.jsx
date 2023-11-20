import React from 'react'
import './Register.css'
const Register = () => {
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
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="infoInput"
                    name="lastname"
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInput"
                    name="username"
                    placeholder="Usernames"
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInput"
                    name="password"
                    placeholder="Password"
                />
                <input
                    type="text"
                    className="infoInput"
                    name="confirmpass"
                    placeholder="Confirm Password"
                />
            </div>

            <div className="sub-title">
                <span >Already have an account. Login!</span>

                <button className="button" type="submit">Signup</button>
            </div>

        </div>
    )
}
export default Register