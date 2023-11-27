import React from 'react'

import './ChatBox.css'

const ChatBox = ({ data, userId, setChat, onlineUsers }) => {

    const leftUser = data.userData.find(user => user._id != userId)
    const isOnline = onlineUsers.some((user) => leftUser._id === user.userId)
    return (

        <div className="Chat">
            <img src={leftUser.profilePicture}></img>
            <div className="info-chat">
                <span >{leftUser.firstname + leftUser.lastname}</span>
                <span >{isOnline ? 'Online' : 'Offline'}</span>
            </div>
            <button className='button' onClick={() => setChat(data)}> Chat</button>
        </div>
    )
}
export default ChatBox