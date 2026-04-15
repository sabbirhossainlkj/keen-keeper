import React, { useContext } from 'react';
import textImg from '../../assets/text.png'
import { FriendContext } from '../../context/FriendContex';


const TextList = () => {
     const {  text, video } = useContext(FriendContext);
      console.log( text, video, "friend data");

      
    if(text.length === 0){
    return <div className='flex justify-center items-center text-center bg-gray-200 h-[50vh]'>
        <h2 className='font-bold text-2xl text-red-500'>no found text data available</h2>
    </div>
  }
    return (
         <div className=" my-5 space-y-2">
               {text.map((friend) => (
                 <div key={friend.id} className="  bg-emerald-200 flex border border-gray-300 gap-3 items-center p-3 rounded-2xl shadow-2xl">
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