import React from 'react';
import Avatar from "./Avatar";
import '../css/Chat.css'
import Messageblock from "./Messageblock";

const Chat = ({chats, activeChat}) => {

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
                            />
                        )
                    })
                }
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
                {/*<Messageblock/>*/}
            </div>
            <div className={'chatfoot'}>
                <input type={"text"} className={'chatinput'} placeholder={'Write message to send'}/>
                <button className={'sendbutton'}>
                    <img className={'sendbuttonimg'} src={'./img/uparrow.svg'} alt={'send'}/>
                </button>
            </div></>
            :<p style={{textAlign: 'center'}}>Выберите чат</p>
            }
            {/* // <div className={'chathead'}>
            //     <Avatar image={activeChat !== undefined?chats.filter(chat => {return chat.id === activeChat})[0].avatar:''}/>
            //     <h3 className={'username'}>{activeChat !== undefined?chats.filter(chat => {return chat.id === activeChat})[0].name:''}</h3>
            // </div>
            // <div className={'chatbody'}>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            //     <Messageblock/>
            // </div>
            // <div className={'chatfoot'}>
            //     <input type={"text"} className={'chatinput'} placeholder={'Write message to send'}/>
            //     <button className={'sendbutton'}>
            //         <img className={'sendbuttonimg'} src={'./img/uparrow.svg'} alt={'send'}/>
            //     </button>
            // </div> */}
        </div>
)
    ;
};

export default Chat;