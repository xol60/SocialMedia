import React, { useState } from 'react'
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../store/actions';
const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>

                <UilPen
                    onClick={() => setModalOpened(true)}
                />
                <ProfileModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                />
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>{user.relationship}</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>{user.livesIn}</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>{user.worksAt}</span>
            </div>

            <button className="button logout-button" onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default InfoCard