import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContex";

import videoImg from "../../assets/video.png";

const VideoList = () => {
  const { text, video } = useContext(FriendContext);
  console.log(text, video, "friend data");

  if (video.length === 0) {
    return (
      <div className="flex justify-center items-center text-center bg-gray-200 h-[50vh]">
        <h2 className="font-bold text-2xl text-red-500">
          No found video data available
        </h2>
      </div>
    );
  }
  return (
    <div className=" my-5 space-y-2">
      {video.map((friend) => (
        <div
          key={friend.id}
          className="flex border bg-emerald-200 border-gray-300 gap-3 items-center p-3 rounded-2xl shadow-2xl"
        >
          <img src={videoImg} alt="call" />
          <div>
            <h2 className="font-bold text-xl">video with {friend.name}</h2>
            <p>{friend.next_due_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
