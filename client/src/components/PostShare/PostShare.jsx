
import React, { useState, useRef } from "react";

import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { createNewPost } from "../../store/actions";
const PostShare = () => {
    const user = useSelector(state => state.auth.user)
    const [data, setData] = useState({
        image: '',
        desc: ''
    })
    const dispatch = useDispatch()
    const [preview, setPreview] = useState('')
    const handleChangeDesc = (e) => {
        setData({
            ...data,
            desc: e.target.value
        })
    }
    const handleImageChange = (e) => {
        setPreview(
            URL.createObjectURL(e.target.files[0]))
        setData({
            ...data,
            image: e.target.files[0]
        })
    }
    const handleSubmit = async () => {
        const form = new FormData()
        form.append('image', data.image)
        form.append('userId', user._id)
        form.append('desc', data.desc)
        await dispatch(createNewPost(form))
    }
    return (
        <div className="PostShare">
            <img className='ProfileImage' src={user.profilePicture} />
            <div className='functions'>
                <input type="text" value={data.desc} onChange={handleChangeDesc} placeholder="What's happening" />
                <input type="file" id='inputFile' onChange={handleImageChange} style={{ display: 'none' }} />

                <div className="options">
                    <div className="option" htmlFor='inputFile' style={{ color: "var(--photo)" }} >

                        <UilScenery />
                        <label htmlFor="inputFile">Photo</label>

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
                    <button className="button ps-button" onClick={handleSubmit}>Share</button>

                </div>
                <img src={preview}></img>
            </div>
        </div>
    )
}
export default PostShare