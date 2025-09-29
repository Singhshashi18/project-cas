            
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
