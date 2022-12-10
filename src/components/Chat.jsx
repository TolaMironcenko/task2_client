import React from 'react';
import Avatar from "./Avatar";
import '../css/Chat.css'
import Messageblock from "./Messageblock";

const Chat = ({chats, activeChat}) => {

    // console.log(chats.filter(chat => {return chat.id === activeChat}))

    return (
        <div className={'chat'}>
            <div className={'chathead'}>
                <Avatar image={activeChat?chats.filter(chat => {return chat.id === activeChat}).avatar:''}/>
                <h3 className={'username'}>username</h3>
            </div>
            <div className={'chatbody'}>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
                <Messageblock/>
            </div>
            <div className={'chatfoot'}>
                <input type={"text"} className={'chatinput'} placeholder={'Write message to send'}/>
                <button className={'sendbutton'}>
                    <img className={'sendbuttonimg'} src={'./img/uparrow.svg'} alt={'send'}/>
                </button>
            </div>
        </div>
)
    ;
};

export default Chat;