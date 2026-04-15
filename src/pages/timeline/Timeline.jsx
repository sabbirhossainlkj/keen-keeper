import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContex';

const Timeline = () => {
    const { call,text,video} = useContext(FriendContext)
         console.log( call, text, video, 'friend data')
    return (
        <div>   
            <h2>Timeline</h2>
        </div>
    );
};

export default Timeline;