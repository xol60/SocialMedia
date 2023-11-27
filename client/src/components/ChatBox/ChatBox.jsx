import React from 'react'
import { TrendData } from '../../Data/TrendData'
import './ChatBox.css'
import ChatCard from '../ChatCard/ChatCard'
const ChatBox = () => {
    const user = TrendData[0]
    return (
        <div className='Chat-Info'>
            <div className="ChatBox">
                {TrendData.map((trend) => {
                    return (
                        <div className="Chat">
                            <img src={trend.image}></img>
                            <div className="info-chat">
                                <span >{trend.name}</span>
                                <span >{trend.status}</span>
                            </div>
                            <button className='button' > Chat</button>
                        </div>
                    )
                })}
            </div>
            <ChatCard data={user} />
        </div>
    )
}
export default ChatBox