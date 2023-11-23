import React from 'react'

import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './ProfileCard.css'
const ProfileCard = () => {
    const user = useSelector((state) => state.auth.user)
    console.log(user)
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={user.coverPicture} />
                <img src={user.profilePicture} />
            </div>
            <div className="ProfileName">
                <span>{user.firstname + ' ' + user.lastname}</span>
                <span>{user.about}</span>
            </div>
            <div className="followStatus">
                <hr />
                <div className='follower'>
                    <div className="follow">
                        <span>{user.following.length}</span>
                        <span>Followings</span>
                    </div>

                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                <Link to='/profile' style={{ textDecoration: "none", color: "inherit" }}>
                    My Profile
                </Link>
            </span>
        </div >
    )
}
export default ProfileCard