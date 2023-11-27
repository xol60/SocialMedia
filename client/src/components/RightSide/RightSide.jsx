import React, { useState, useEffect } from 'react'
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import ChatBox from "../ChatBox/ChatBox";
import { getChats } from '../../services';
import { useSelector, useDispatch } from 'react-redux';

const RightSide = () => {
    const token = useSelector(state => state.auth.token)
    const [chats, setChats] = useState([])
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
    console.log(chats)
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <ChatBox />

        </div>
    )
}
export default RightSide