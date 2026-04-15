import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContex';

const Timeline = () => {
    const {handleCall, call} = useContext(FriendContext)
         console.log(handleCall, call, 'friend data')
    return (
        <div>   
            <h2>Timeline</h2>
        </div>
    );
};

export default Timeline;