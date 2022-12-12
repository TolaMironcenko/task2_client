import React from 'react';
import '../css/Messageblock.css'

const Messageblock = ({position, message, time, ...props}) => {
    return (
        <div className={position ? 'messageboxright' : 'messagebox'} {...props}>
            {message}
            <p className={position?'timeright':'time'}>{time}</p>
        </div>
    );
};

export default Messageblock;