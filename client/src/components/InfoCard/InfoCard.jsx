import React, { useState } from 'react'
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';
const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
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
                <span>in Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Zainkeepscode inst</span>
            </div>

            <button className="button logout-button">Logout</button>
        </div>
    )
}
export default InfoCard