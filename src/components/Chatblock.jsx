import React from 'react';
import '../css/Chatblock.css'
import Avatar from "./Avatar";

const Chatblock = ({active, username, userPhoto, last_text, ...props}) => {
    return (
        <div className={active ? 'chatblock active' : 'chatblock'} {...props}>
            <Avatar image={userPhoto?userPhoto:''}/>
            <div className={'userdata'}>
                <h3 className={'username'}>{username}</h3>
                <p className={'lasttext'}>{last_text}</p>
            </div>
        </div>
    );
};

export default Chatblock;