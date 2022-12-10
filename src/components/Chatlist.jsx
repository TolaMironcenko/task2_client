import React from 'react';
import '../css/Chatlist.css'
import Chatblock from "./Chatblock";

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
                chats.length === 0
                ?<p style={{textAlign: 'center'}}>Еще нет чатов</p>
                :
                chats.map(chat => {
                    return(
                        <Chatblock
                            onClick={() => {setActiveChat(chat.id);console.log(chats.filter(chat => {return chat.id === activeChat})[0].avatar)}}
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