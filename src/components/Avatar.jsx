import React from 'react';
import '../css/Avatar.css'

const Avatar = ({image, ...props}) => {
    return (
        <div className={'avatarblock'} {...props}>
            <img className={'avatarimg'} src={image?image:'./img/usericon.png'} alt={'user icon'}/>
        </div>
    );
};

export default Avatar;