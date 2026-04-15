import React, { createContext, useState } from 'react';

export const FriendContext = createContext()

const FriendProvider = ({children}) => {

     const [call, setCall] = useState([]);

  const handleCall = (currentFriend) => {
    const isExistCall = call.find((friend) => friend.id === currentFriend.id);
     
    if (isExistCall) {
      alert("already calling");
    } else {
      setCall([...call, currentFriend]);
    }
    
    console.log(currentFriend, call, 'friend')
  };
    const data={
        call,
        setCall,
        handleCall
    }
    return (
        <div>
           <FriendContext.Provider value={data}>
               {children}
           </FriendContext.Provider>
        </div>
    );
};

export default FriendProvider;