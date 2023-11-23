
import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
const PostShare = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="PostShare">
            <img className='ProfileImage' src={user.profilePicture} />
            <div className='functions'>
                <input type="text" placeholder="What's happening" />

                <div className="options">
                    <div className="option" style={{ color: "var(--photo)" }}
                    // onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>{" "}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>{" "}
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                        // ref={imageRef}
                        // onChange={onImageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostShare