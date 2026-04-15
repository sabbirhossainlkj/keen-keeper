import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';
import { GridLoader } from 'react-spinners';

const allFriendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
    const friends =use(allFriendsPromise);
    console.log(friends, 'all friends');

    const getStatusColor = (status) => {
    if (status === "overdue") return "bg-[#EF4444] text-white";
    if (status === "almost due") return "bg-[#EFAD44] text-white";
    if (status === "on-track") return "bg-[#244D3F] text-white";
    return "bg-blue-200 text-blue-800";
  };

  if (!friends) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader />
      </div>
    );
  }
    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='text-2xl font-bold'>Your Friends</h2>
            <div className="grid grid-cols-4 gap-3">
            {
                friends.map(friend => {
                    return <FriendCard key={friend.id} friend={friend} getStatusColor={getStatusColor}></FriendCard>
                })
            }
            </div>
        </div>
    );
};

export default AllFriends;