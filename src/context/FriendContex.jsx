import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext()

const FriendProvider = ({children}) => {

     const [call, setCall] = useState([]);
     const [text, setText] = useState([]);
     const [video, setVideo] = useState([]);

  const handleCall = (currentFriend) => {
    const isExistCall = call.find((friend) => friend.id === currentFriend.id);
     
    if (isExistCall) {
      toast.error(`already calling ${currentFriend.name}`);
    } else {
      setCall([...call, currentFriend]);
      toast.success(`call with ${currentFriend.name} `)
    }
    
    console.log(currentFriend, call, 'friend')
  };
  const handleText = (currentFriend) => {
    const isExistCall = text.find((friend) => friend.id === currentFriend.id);
     
    if (isExistCall) {
      toast.error(`already Text ${currentFriend.name}`);
    } else {
      setText([...text, currentFriend]);
      toast.success(`Text with ${currentFriend.name} `)
    }
    
    console.log(currentFriend, call, 'friend')
  };
  const handleVideo = (currentFriend) => {
    const isExistCall = video.find((friend) => friend.id === currentFriend.id);
     
    if (isExistCall) {
      toast.error(`already video ${currentFriend.name}`);
    } else {
      setVideo([...video, currentFriend]);
      toast.success(`video with ${currentFriend.name} `)
    }
    
    console.log(currentFriend, call, 'friend')
  };


    const data={
        call,
        setCall,
        handleCall,
        text,
        setText,
        handleText,
        video,
        setVideo,
        handleVideo,
        
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