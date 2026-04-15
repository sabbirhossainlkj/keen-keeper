import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendContex";

const FriendsDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const friend = useLoaderData();
  // console.log(friend, "friend");
  const expectedFriend = friend.find((book) => book.id == id);
  // console.log(expectedFriend);
  const { picture, name, status, tags, bio, email } = expectedFriend;

  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-[#EF4444] text-white";
    if (status === "almost due") return "bg-[#EFAD44] text-white";
    if (status === "on-track") return "bg-[#244D3F] text-white";
    return "bg-blue-200 text-blue-800";
  };

     const {handleCall, handleText,handleVideo} = useContext(FriendContext)
    //  console.log(handleCall, call, 'friend data')

 

  return (
    <div className=" border-gray-400 my-7 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="space-y-3">
        <div className=" text-center p-7 rounded-2xl shadow-2xl bg-gray-100 space-y-2">
          <img className=" rounded-full mx-auto" src={picture} alt={name} />
          <h3 className="text-xl font-bold">{name}</h3>
          <p
            className={`px-3 py-1 mt-3 rounded-full inline-block ${getStatusColor(status)}`}
          >
            {status}
          </p>
          <p className="bg-emerald-200 rounded-full">{tags}</p>
          <p className="text-gray-400">{bio}</p>
          <p className="text-gray-400">{email}</p>
        </div>
        <div className="flex flex-col space-y-2 ">
          <button className="btn shadow-2xl">⏰ Snooze 2 Weeks</button>
          <button className="btn shadow-2xl">📦 Archive</button>
          <button className="btn shadow-2xl text-red-500">🗑️ Delete</button>
        </div>
      </div>
      <div className=" space-y-6">
        <div className=" grid grid-cols-3 gap-4 text-center">
          <div className="shadow-2xl p-5 bg-gray-100 rounded-2xl">
            <h2 className="font-bold text-xl">62</h2>
            <p>Days Since Contact</p>
          </div>
          <div className="shadow-2xl p-5 bg-gray-100 rounded-2xl">
            <h2 className="font-bold text-xl">30</h2>
            <p>Goal (Days)</p>
          </div>
          <div className="shadow-2xl p-5 bg-gray-100 rounded-2xl">
            <h2 className="font-bold text-xl text-[#244D3F]">Feb 27, 2026</h2>
            <p>Next Due</p>
          </div>
        </div>
        <div className="flex justify-between items-center  shadow-2xl rounded-2xl p-5">
          <div>
            <p className="text-emerald-600">Relationship Goal</p>
            <p>
              Connect every{" "}
              <span className="font-bold text-emerald-900">30 days</span>{" "}
            </p>
          </div>
          <button className="btn shadow-2xl">Edit</button>
        </div>
        <p className="text-emerald-600">Quick Check-In</p>
        <div className=" flex justify-between items-center rounded-2xl shadow-2xl ">
          <button onClick={() => handleCall(expectedFriend)} className="btn">
            📞 Call
          </button>

          <button onClick={() => handleText(expectedFriend)} className="btn">💬 Text</button>

          <button onClick={() => handleVideo(expectedFriend)} className="btn">🎥 Video</button>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
