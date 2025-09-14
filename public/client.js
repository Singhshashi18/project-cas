
//     const sendMessage = () => {
//         const message = messageInput.value.trim();
//         if (message) {
//             socket.emit("message", message);
//             messageInput.value = "";
//         }
//     };         
//     socket.on("message", (data) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = data;
//         messageList.appendChild(listItem); // Ensure `messageList` is found before this line executes
//     });
//     sendButton.addEventListener("click", sendMessage);
//     messageInput.addEventListener("keypress", (e) => {
//         if (e.key === "Enter") sendMessage();
//     });
// });



// import React from 'react'
// import { useState,useEffect } from 'react'
// import {io} from 'socket.io'

// const socket=io('http://localhost:5000/');

// const client = () => {
//     const [message,setMesaage]=useState("");
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
//             setMesaage("");
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
//       onChange={(e)=>setMesaage(e.target.value)}/>
//       <button onClick={sendMessage}>send</button>
//     </div>
//   )
// }

// export default client
