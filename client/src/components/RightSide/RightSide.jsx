import React, { useState, useEffect, useRef } from 'react'
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import ChatBox from "../ChatBox/ChatBox";
import { getChats } from '../../services';
import { useSelector, useDispatch } from 'react-redux';
import ChatCard from '../ChatCard/ChatCard'
import { io } from "socket.io-client";

const RightSide = () => {
    const { token, user } = useSelector(state => state.auth)
    const [chats, setChats] = useState([])
    const [chat, setChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    useEffect(() => {
        const getChatsServer = async () => {
            try {
                const { data } = await getChats(token);
                setChats(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChatsServer();
    }, [])
    useEffect(() => {
        socket.current = io("http://localhost:8080");
        socket.current.emit("new-user-add", user._id);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });
    }, [user]);
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage]);
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log(data)
            setReceivedMessage(data);
        }

        );
    }, []);
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <div className='Chat-Info'>
                <div className="ChatBox">
                    {chats.map(chat => {
                        return (
                            <ChatBox onlineUsers={onlineUsers} data={chat} userId={user._id} setChat={setChat} />
                        )
                    })}
                </div>
            </div>
            <ChatCard chat={chat} userId={user._id} setChat={setChat} setSendMessage={setSendMessage}
                receivedMessage={receivedMessage} />
        </div>
    )
}
export default RightSide