// const express = require("express");
// const bcrypt = require("bcrypt");
// const User= require("./userModel");
// const App= express();

// App.post("/register", async (req,res)=>{
//    const {userName,password}=req.body;
//    if(await User.findOne({userName}))
//     return res.status(400).json({message:"user already exist"});

//    const hashedPassword= await bcrypt.hash(password,10);
//    await new User({userName,password:hashedPassword}).save();
//    res.json({message:"user registered successfully"});
// });

// App.post("/login",async(req,res)=>{
//     const {userName,password}=req.body;
//     const user = await User.findOne({userName});

//     if(!user || !(await bcrypt.compare(password,user.password)))
//         return res.status(401).json({message:"invalid user credentials"});

//     res.json({message:"login successfully"})
// });
// module.exports=App;

// const jwt =require("jsonwebtoken")
// //middleware to extract the token value from authorization header
// const verifyToken=(req,res,next)=>{
//           const token=req.headers["authorization"];
//           if(!token){
//             return res.status(403).json({message:"token required"})
//           }
//           const verifiedToken=jwt.verify(token,"secret1234")
//           req.user=verifiedToken;
//           next();
// };
// module.exports=verifyToken;

const jwt=require("jsonwebtoken")

//use custom middleware to verify the token
const verifyToken=(req,res,next)=>{
  const token=req.headers["authorization"];
  if(!token){
    res.status(400).json({message:"token required"})
  }
 const verifiedToken= jwt.verify(token,"secret12345")
 req.user=verifiedToken;
 next();
}
module.exports=verifyToken;