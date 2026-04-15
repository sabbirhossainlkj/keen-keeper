import React from 'react';

const FriendCard = ({ friend, getStatusColor }) => {
    return (
        <div
            className="border border-gray-300 p-5 text-center rounded-2xl shadow-2xl"
          >
            <img
              className="mx-auto rounded-full"
              src={friend.picture}
              alt={friend.name}
              
            />

            <h3 className="text-xl font-bold">{friend.name}</h3>
            <p className="text-gray-400">{friend.days_since_contact}d ago</p>
            <p className="bg-emerald-200 rounded-3xl">{friend.tags}</p>
            <p
              className={`px-3 py-1 mt-3 rounded-full inline-block ${getStatusColor(friend.status)}`}
            >
              {friend.status}
            </p>
          </div>
    );
};

export default FriendCard;