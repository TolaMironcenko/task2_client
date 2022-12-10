import React from 'react';
import '../css/Messageblock.css'

const Messageblock = ({position, message, ...props}) => {
    return (
        <div className={position ? 'messageboxright' : 'messagebox'} {...props}>
            {message}
            some message
        </div>
    );
};

export default Messageblock;