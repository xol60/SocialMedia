import React from "react";
import iconX from '../../img/x.png'
import './ChatCard.css'
const ChatCard = ({ data }) => {
    return (
        <div className="ChatCard">
            <div className="title">
                <img src={data.image}></img>
                <span>
                    {data.name}
                </span>
                <img src={iconX} />
            </div>
            <div className="detail">

            </div>
            <div className="input">

            </div>
        </div>
    )
}
export default ChatCard