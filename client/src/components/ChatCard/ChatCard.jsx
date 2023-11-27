import React, { useState, useEffect } from "react";
import iconX from '../../img/x.png'
import './ChatCard.css'
import { format } from "timeago.js";
import { getMessages, createMessage, getChat } from "../../services";
import { useSelector } from "react-redux";
import InputEmoji from 'react-input-emoji'
import { useRef } from "react";
const ChatCard = ({ chat, userId, setChat, setSendMessage, receivedMessage }) => {
    const leftUser = chat?.userData.find(user => user._id != userId)
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('')
    const token = useSelector(state => state.auth.token)
    const scroll = useRef();

    useEffect(async () => {
        const getMessagesServer = async (id) => {
            const { data } = await getMessages(id)

            setMessages(data)
        }
        if (chat != null) getMessagesServer(chat._id)
    }, [chat])

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }
    const handleSend = async (e) => {
        e.preventDefault()
        const newM = {
            text: newMessage,
            chatId: chat._id,
        }

        try {
            const res = await createMessage({ data: newM, token });
            const dataMessage = {
                ...res.data.newMessage,
                userData: [{
                    ...res.data.userData
                }]
            }
            setMessages([...messages, dataMessage]);
            setSendMessage({ ...dataMessage, receiverId: leftUser._id })
            setNewMessage("");
        }
        catch
        {
            console.log("error")
        }
    }
    useEffect(() => {
        const getChatService = async (id) => {

            const res = await getChat(id)
            console.log(res)
            setChat(res.data[0])

        }
        if (receivedMessage !== null && chat !== null && receivedMessage.chatId === chat._id) {
            setMessages([...messages, receivedMessage]);
        }
        if (receivedMessage !== null && chat === null) {
            if (receivedMessage.receiverId === userId) {
                getChatService(receivedMessage.chatId)
            }
        }

    }, [receivedMessage])
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <React.Fragment>
            {chat && <div className="ChatCard">
                <div className="title">
                    <img src={leftUser.profilePicture}></img>
                    <span>
                        {leftUser.firstname + ' ' + leftUser.lastname}
                    </span>
                    <img src={iconX} onClick={() => setChat(null)} />
                </div>
                <div className="detail">
                    {messages.map((message) => {

                        return (
                            <>
                                <div ref={scroll}
                                    className={
                                        message.senderId === userId
                                            ? "message own"
                                            : "message"
                                    }
                                >
                                    <span>{message.text}</span>{" "}
                                    <span>{format(message.createdAt)}</span>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="input">
                    <InputEmoji
                        value={newMessage}
                        onChange={handleChange}
                    />
                    <button className="send-button button" onClick={handleSend}>Send</button>
                </div>
            </div>
            }
        </React.Fragment>
    )
}
export default ChatCard