// import React from 'react'
// import { useState,useEffect } from 'react'
// import { io } from 'socket.io-client';

// const socket=io('http://localhost:8080/');

// const Chat = () => {
//     const [message,setMessage]=useState("");
//     const [messages,setMessages]=useState([]);
// //write all the client logic in the useEffect only
//     useEffect(()=>{
//       socket.on("chatMessage",(msg)=>{
//         setMessages((prevMsg)=>
//         [...prevMsg,msg]);
//       });
//       return ()=>socket.off("chatMessage");

//     },[]);

//     const sendMessage=()=>{
//         if(message.trim()){
//             socket.emit("chatMessage",message);
//             setMessage("");
//         }
//     };
//   return (
//     <div>
//       <h2>chat app</h2>
//       <ul>
//       {messages.map((msg,index)=>(
//         <li key={index}>{msg}</li>
//       ))}
//       </ul>
//       <input type='text' value={message} placeholder='enter the message...' 
//       onChange={(e)=>setMessage(e.target.value)}/>
//       <button onClick={sendMessage}>send</button>
//     </div>
//   )
// }

// export default Chat


import React, { useEffect } from 'react'
import { useState } from 'react'
import { io } from 'socket.io-client'

const socket=io('http://localhost:3000/')

const Chat = () => {
  const [message,setMessage]=useState("")
const [allmsg,setAllmsg]=useState([])

useEffect(()=>{
socket.on("chatMessage",(msg)=>{
  setAllmsg((prevMsg)=>
     [...prevMsg,msg]
  )
});
return ()=>socket.off("chatMessage")


},[]);

const sendMessage=()=>{
  if(message.trim()){
    socket.emit("chatMessage",message)
    setMessage('')
  }
};
  return (
    <div>
      <h2>chat app</h2>
      <ul>
        {allmsg.map((msg,index)=>(
          <li key={index}>
          {msg}
          </li>
        ))}
      </ul>
      <input type='text' value={message} placeholder='enter message here..'
      onChange={(e)=>setMessage(e.target.value)}/>
      <button onClick={sendMessage}>send</button>
    </div>
  )
}

export default Chat
