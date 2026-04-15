import React, { useContext } from 'react';
import textImg from '../../assets/text.png'
import { FriendContext } from '../../context/FriendContex';


const TextList = () => {
     const {  text, video } = useContext(FriendContext);
      console.log( text, video, "friend data");
    return (
         <div className=" my-5 space-y-2">
               {text.map((friend) => (
                 <div key={friend.id} className="flex border border-gray-300 gap-3 items-center p-3 rounded-2xl shadow-2xl">
                     <img src={textImg} alt="call" />
                     <div>
                         <h2 className="font-bold text-xl">Text with {friend.name}</h2>
                         <p>{friend.next_due_date}</p>
                     </div>
                 </div>
               ))}
             </div>
      
    )
};

export default TextList;