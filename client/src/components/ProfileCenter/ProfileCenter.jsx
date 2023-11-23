import React from "react";
import { useSelector } from "react-redux";
import "./ProfileCenter.css";
import PostShare from "../PostShare/PostShare";
const ProfileCenter = () => {
    const ProfilePage = true;
    const user = useSelector(state => state.auth.user)
    return (
        <div className="ProfileContent">
            <div className="ProfileCenter">
                <div className="ProfileImages">
                    <img src={user.coverPicture} alt="" />
                    <img src={user.profilePicture} alt="" />
                </div>

                <div className="ProfileName">
                    <span>{user.firstname + ' ' + user.lastname}</span>
                    <span>{user.about}</span>
                </div>

                <div className="followStatus">
                    <hr />
                    <div className="follower">
                        <div className="follow">
                            <span>{user.following.length}</span>
                            <span>Followings</span>
                        </div>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>{user.followers.length}</span>
                            <span>Followers</span>
                        </div>



                        <div className="vl"></div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                    </div>
                    <hr />
                </div>

            </div>
            <PostShare />
        </div>
    )
};

export default ProfileCenter;