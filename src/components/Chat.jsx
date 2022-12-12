import React, { useState } from 'react';
import Avatar from "./Avatar";
import '../css/Chat.css'
import Messageblock from "./Messageblock";
import routes from '../routes';

const Chat = ({chats, activeChat, setChats}) => {

    const [newmessage, setNewmessage] = useState('')

    const to_normal_time = (time) => {
        return time.slice(0, 5)
    }

    const sendmessage = () => {
        if (newmessage.length !== 0) {
            console.log(newmessage)
            const chatid = chats.filter(chat => chat.id === activeChat)[0].telegram_chat_id
            const result = "{\"chat_id\":\"" + chatid + "\", \"message\":\"" + newmessage + "\"}"
            console.log(result)
            fetch(routes.send_message(), {
                method: 'POST',
                body: result
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setNewmessage('')
            })

            fetch(routes.chats(), {
            })
                .then(res => res.json())
                .then(result => {
                    setChats(result)
                    console.log(chats)
                })
        }
    }

    const pressreturn = (e) => {
        if (e.keyCode === 13) {
            sendmessage()
        }
    }

    return (
        <div className={'chat'}>
            {
                activeChat !== undefined
                ?<><div className={'chathead'}>
                <Avatar image={activeChat?chats.filter(chat => {return chat.id === activeChat})[0].avatar:''}/>
                <h3 className={'username'}>{activeChat?chats.filter(chat => {return chat.id === activeChat})[0].name:''}</h3>
            </div>
            <div className={'chatbody'}>
                {
                    chats.filter(chat => {return chat.id === activeChat})[0].messages.map(message => {
                        return(
                            <Messageblock
                                position={message.from_user === 'admin'}
                                key={message.id}
                                message={message.text}
                                time={to_normal_time(message.time)}
                            />
                        )
                    })
                }
            </div>
            <div className={'chatfoot'}>
                <input 
                    type={"text"} 
                    className={'chatinput'} 
                    placeholder={'Write message to send'}
                    value={newmessage}
                    onChange={(e) => {setNewmessage(e.target.value)}}
                    onKeyDown={pressreturn}
                />
                <button 
                    className={'sendbutton'}
                    onClick={sendmessage}
                >
                    <img className={'sendbuttonimg'} src={'./img/uparrow.svg'} alt={'send'}/>
                </button>
            </div></>
            :<p style={{textAlign: 'center'}}>Выберите чат</p>
            }
        </div>
)
    ;
};

export default Chat;