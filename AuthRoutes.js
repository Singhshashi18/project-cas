

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
