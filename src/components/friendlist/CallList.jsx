import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContex";

import callImg from '../../assets/call.png'

const CallList = () => {
  const { call, text, video } = useContext(FriendContext);
  console.log(call, text, video, "friend data");
  return (
    <div className=" my-5 space-y-2">
      {call.map((friend) => (
        <div key={friend.id} className="flex border border-gray-300 gap-3 items-center p-3 rounded-2xl shadow-2xl">
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
