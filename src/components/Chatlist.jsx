import React from 'react';
import '../css/Chatlist.css'
import Chatblock from "./Chatblock";

const Chatlist = ({chats, activeChat, setActiveChat}) => {

    return (
        <div className={'chatlist'}>
            {
                chats.length === 0
                ?<p style={{textAlign: 'center'}}>Еще нет чатов</p>
                :
                chats.map(chat => {
                    return(
                        <Chatblock
                            onClick={() => {setActiveChat(chat.id);console.log(chats)}}
                            active={activeChat === chat.id}
                            key={chat.id}
                            username={chat.name}
                            userPhoto={chat.avatar}
                            last_text={chat.username}
                        />
                    )
                })
            }
        </div>
    );
};

export default Chatlist;