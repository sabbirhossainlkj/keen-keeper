import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContex";

import callImg from '../../assets/call.png'

const CallList = () => {
  const { call, text, video } = useContext(FriendContext);
  console.log(call, text, video, "friend data");

    if(call.length === 0){
    return <div className='flex justify-center items-center text-center bg-gray-200 h-[50vh]'>
        <h2 className='font-bold text-2xl text-red-500'>No found Call data available</h2>
    </div>
  }

  return (
    <div className=" my-5 space-y-2">
      {call.map((friend) => (
        <div key={friend.id} className="flex  bg-emerald-200 border border-gray-300 gap-3 items-center p-3 rounded-2xl shadow-2xl">
            <img src={callImg} alt="call" />
            <div>
                <h2 className="font-bold text-xl">Call with {friend.name}</h2>
                <p>{friend.next_due_date}</p>
            </div>
        </div>
      ))}
    </div>
  );
};
export default CallList;
