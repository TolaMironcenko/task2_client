import React, {useEffect, useState} from 'react';
import '../css/Chatlist.css'
import Chatblock from "./Chatblock";
import routes from "../routes";

const Chatlist = ({chats, activeChat, setActiveChat}) => {

    // const [chats, setChats] = useState([])

    // useEffect(() => {
    //     fetch(routes.chats(), {
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             setChats(result)
    //             console.log(chats)
    //         })
    // }, [])


    return (
        <div className={'chatlist'}>
            {
                chats.map(chat => {
                    return(
                        <Chatblock
                            onClick={() => setActiveChat(chat.id)}
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