// const file= require("fs");
// file.unlink("file2.txt",
//     function(err){
//         if(err){
//             console.log(err.message);
//         }
//         else{
//             console.log("done");
//         }
//     }
// )

// const express = require("express")
// const app=express()

// app.use(function(req,res,next){
//     console.log("running");
//     next();
// })

// app.get('/', function(req,res){
//     res.send('singh nitin')
// })
// app.get('/profile', function(req,res,next){

// return next(new Error("sevr side error"));
// })
// app.use((err,req,res,next)=>{
//     console.error(err.stack)
//     res.status(500).send("something went wrong!")
// })
// app.listen(1000)



// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// //used to use css ,images and js 
// //setting of public static file(images,videos,js etc)
// app.use(express.static(path.join(__dirname,'public')
// ));
// app.set('view engine','ejs');

// app.get("/about",(req,res)=>{
//     res.render("index");
// });

// app.listen(5000,()=>{
//     console.log("running")
// });


// const express=require("express")
// const app=express();

// app.get("/user/:name",(req,res)=>{
//     let name =req.params.name;
//     res.send(`the name of the user is ${name}`);
// });

// const express = require("express")
// const app = express();

// app.get("/user/:id?",(req,res)=>{
    
//     if(req.params.id){

//         res.send(`user id is:${req.params.id}`)
//     }
//     else{
//         res.send(`welcome to user page`)
//     }
// });

// const express=require("express");
// const app=express();

// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.url}`);
//     next();
// });
// app.get("/user",(req,res)=>{
//     res.send("user page");
// });
// app.get("/admin",(req,res)=>{
//     res.send("admin page")
// })

// const express=require("express")
// const app=express();

// app.get(
//     (req,res,next)=>{
//     res.send("this is error page")
//     next(new Error("something went wrong"));

    
// });

// app.use((err,req,res,next)=>{
//     res.send("dddd")
//     res.status(500).send(`error:${err.message}`)
// });

// const express = require("express")
// const app = express();

// app.get("/error",(req,res,next)=>{
//     next(new Error("NOT FOUND"));
// });
// app.use((err,req,res,next)=>{
//     if(err.message === "server error"){
//         return res.status(404).send("page not found");
//     }else{
//      res.status(500).send("something went wrong");
//     }
// });

// const express = require("express");
// const app = express();

// app.get("/error",(req,res,next)=>{
//     next(new Error("SERVER ERROR"));
// });
// app.use((err,req,res,next)=>{
//     if(err.message === "server error"){
//         res.status(404).send("page not found");
//     }else{
//         res.status(500).send("internal server error")
//     }
// })
// app.listen(3000,()=>{
//     console.log("running")
// });


// const express = require("express")
// const app = express();
// const userModel=require("./userModel")
//     app.get("/create",async (req,res)=>{
//       let createdUser=  await userModel.create({
//             name:"nitin",
//             userName:"singhnitin",
//             email:"singhshsh@123gmail.com"

//         })
//         res.send(createdUser)
//     })

//     app.get("/update",async (req,res)=>{
//        let updatedUser= await userModel.findOneAndUpdate({userName:"singhnitin"},
//         {name:"shashi"},{new:true})
//        res.send(updatedUser);
//     })

//     app.get("/read",async (req,res)=>{
//     let users= await userModel.find();
//     res.send(users)
//     })
//     //delete is same as create
    
// app.listen(5000,()=>{
//     console.log("running")
// });


// const express = require("express");
// const connectDb = require("./database");
// const user = require("./userModel");
// const app = express();
// app.use(express.json());

// connectDb();

// app.get("/create",async (req,res)=>{
//     try{
//         const createdUser = await user.create({

//             name:"nitin",
//             userName:"singhnitin",
//             email:"singhnitin@123gmail.com"
//         },
//     {
//         name:"singh",
//         userName:"singh123",
//         email:"singh@123"
//     });
        
        
//         res.status(201).json(createdUser);

        
//     }catch(error){
//         res.status(500).json({error:error.message});
//     }
// });

// app.get("/update", async (req,res)=>{
//     try{
//         let updatedUser  =await user.
//         findOneAndUpdate({name:"nitin"},
//             {userName:"singhshashi"},
//             {new:true}
//         );
//         if(!updatedUser){
//             return res.status(404).json({message:"user not found"})
//         }
//         res.status(201).json(updatedUser);
//     }catch(error){
//         res.status(500).json({error:error.message})
//     }
// })

// app.get("/users", async (req,res)=>{
//     try{
//         let users= await user.find();
//         res.status(200).json(users);
//     }catch(error){
//         res.status(500).json({error:"error.message"})
//     }
// });
// app.get("/delete",async (req,res)=>{
//     try{
//         let deletedUsers= await user.findOneAndDelete
//         ({name:"nitin"});
//         res.status(200).json(deletedUsers);
//     }catch(error){
//         res.status(404),json({error:error.message})
//     }
// })
// app.listen(5000,()=>{
//     console.log("server running ")
// })

// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app= express();
// app.use(cookieParser())

// app.get("/",(req,res)=>{
//     res.cookie("name","nitinsingh");
//     res.send("jjjj");
// });
// app.get("/read",(req,res)=>{
//     console.log(req.cookies)
   
//     res.send("kkkk");
// });
// app.listen(3000,()=>{
//     console.log("running")
// })



// const express = require("express");
// const app= express();
// const bcrypt= require("bcrypt");


// app.get("/",(req,res)=>{
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash("nitinnnn",salt,(err,hash)=>{
//             console.log(hash)
//         })
//     })
    
//     res.send("jjjj");
// });


// app.listen(3000,()=>{
//     console.log("running")
// })

// const express = require("express");
// const app= express();
// const bcrypt= require("bcrypt");


// app.get("/",(req,res)=>{
//     bcrypt.compare("nitinnnn","$2b$10$7./JX7HZp2dnyw703qb/ce3inuTUAZp9cuQvvKO6aMto96L3xVOl.",(err,result)=>{
//         console.log(result)
//     })
//     res.send("ss")
   
//     })
    
   

// app.listen(3000,()=>{
//     console.log("running")
// })

// const express = require("express");
// const app= express();
// const bcrypt= require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// app.use(cookieParser())


// app.get("/",(req,res)=>{
//     let token=jwt.sign({email:"singh@123gmail.com"},"secretCode");
//     res.cookie("token",token)
//     console.log(token);
//     res.send("done")
//     });
//     app.get("/read",(req,res)=>{
//         let data=jwt.verify(req.cookies.token,"secretCode");
//         console.log(data)
//     })
    
   

// app.listen(1000,()=>{
    
//     console.log("running")

//$2b$10$7./JX7HZp2dnyw703qb/ce3inuTUAZp9cuQvvKO6aMto96L3xVOl.
//nitinnnn

//  cookieParser = require("cookie-parser");
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// app.use(cookieParser())

// app.get("/token",(req,res)=>{
//     let genToken=jwt.sign({userName:"nitinsingh"},"abcd123");
//     // console.log(genToken);
//     res.cookie("token",genToken)
//     res.send("jwt-authentication");
// });
// app.get("/verify",(req,res)=>{
//     let verify = jwt.verify(req.cookies.token,"abcd123");
//     console.log(verify);
// });
// app.listen(1000,()=>{
//     console.log("running");
// });
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5pdGluc2luZ2giLCJpYXQiOjE3NDIwNTQxMjF9.NFv6g6wcVYPPcqlwlkNaFwKhESmPyneWgjyio8tb0-Iconst


// const express= require("express");
// const app =express();
// const bcrypt = require("bcrypt");

// app.get("/bcrypt",(req,res)=>{
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash("nitinsingh",salt,(err,hash)=>{
//             console.log(hash)
//         })
//     })
//     res.send("lllll")
// });
// app.get("/verify",(req,res)=>{
//     bcrypt.compare("nitinsingh","$2b$10$Voy26NOmBprfxNsrFt7LDOKMS5NQzH.sX27JabIcfdfu8b4pDQcwe",
//         (err,results)=>{
//             // console.log(results)
//         }
//     )
// })
// app.listen(3000,()=>{
//     console.log("running")
// }); 
// //$2b$10$Voy26NOmBprfxNsrFt7LDOKMS5NQzH.sX27JabIcfdfu8b4pDQcwe


// const express  =require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// app.use(express.json());
// let users=[];
// app.post("/register",async(req,res)=>{
//     const{userName,password}=req.body;
//     const hashedPassword=await bcrypt.hash(password,10);
//     users.push({userName,password:hashedPassword});
//     res.json({message:"user registered successfully"});
//     res.send("running");
// });
// app.post("/login",async(req,res)=>{
//     const{userName,password}=req.body;
//     const user=users.find(u=>u.userName===userName);
//     if(!user) return 
//     res.status(400).json({message:"user not found"});
//     const isMatched=await bcrypt.compare(password,user.password);
//     if(isMatched){
//         res.json({message:"login successfull"});
//     }else{
//         res.status(401).json({message:"invalid user credentials"});
//     }
// });
// app.listen(8080,()=>{
//     console.log("running!!")
// })

// const express = require("express");
// const connectDb = require("./database");
// const authRoutes=require("./AuthRoutes")
// const app = express();
// app.use(express.json());
// app.use("/api/auth",authRoutes);
// connectDb();

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require("express");
// const bcrypt = require("bcrypt");
// const app=express();

// app.get("/",async(req,res)=>{
//     await bcrypt.genSalt(10,(err,salt)=>{
//         console.log("salt", salt)
//    bcrypt.hash("password",10,(err,hash)=>{
//     console.log("password", hash)
//    })
//     })
//     res.send("salt generated")
// });
// app.get("/verify",async(req,res)=>{
// await bcrypt.compare("password","$2b$10$8JWOOHf0pzEWwn3h1dFefezB4s2sTOwghuTFvABDWOw8fa9UfblUO",
//     (err,result)=>{
//         console.log(result)
//     })
// })

// const express = require("express")
// const jwt =require("jsonwebtoken")
// const app=express();
// const bodyparser=require("body-parser")
// app.use(bodyparser.json())

// app.post("/login",(req,res)=>{
//     const {userName} = req.body;

//     if(!userName){
//         return res.status(400).json({message:"username required"})
//     }
//     const token = jwt.sign({userName},"secret123");
//     res.json({message:"login successfull",token});
// });
// const verifyToken=(req,res,next)=>{
//     const token = req.headers["authorization"];
//     if(!token){
//         return res.status(401).json({message:"token required"})
//     }
//     try{
//         const verfiedToken=jwt.verify(token,"secret123");
//         req.user=verfiedToken;
//         next();
//     }catch(err){
//         res.status(401).json({message:"invalid token"})
//     };
    
// };

// app.get("/dashboard",verifyToken,(req,res)=>{
//     res.json({message:`welcome ${req.user.userName} to the dashboard`});
// });
// app.listen(3000,()=>{
//     console.log("running")
// });

// const express=require("express")
// const bcrypt=require("bcrypt")
// const jwt=require("jsonwebtoken")
// const connectDb=require("./database")
// const User = require("./userModel")
// const verifyToken=require("./AuthRoutes")
// const app=express()
// app.use(express.json());
// connectDb();
// //user registration
// app.post("/register",async(req,res)=>{
//     const {userName,password}= req.body;
//     if(await User.findOne({userName})){
//         return res.status(400).json({message:"user already exist"})
//     }
//   const hashedPassword=await bcrypt.hash(password,10);
//   await new User({userName,password:hashedPassword}).save();
//   res.status(201).json({message:"user registered"});
// });

// //user login

// app.post("/login",async(req,res)=>{
//     const {userName,password}=req.body;
//    const user=await User.findOne({userName});
//    if(!user ||!(await bcrypt.compare(password,user.password)))
//     return res.status(401).json({message:"invalid user credentials"});

//    const token=jwt.sign({userName},"secret1234");
// res.json({message:"login successfull",token});
// });
// //to access protected rote
// app.get("/dashboard",verifyToken,(req,res)=>{
//     res.json({message:`welcome ${req.user.userName}`})
// });
// app.listen(5000,()=>{
//     console.log("running") 
// });
// //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNpbmdobml0aW4iLCJpYXQiOjE3NDIyODA1MzV9.UWkqDnj-Ua8KsXSsE4TbsTaQD4qxYmUWm2rT5otzfXY"


// const express = require("express")
// const jwt = require("jsonwebtoken")
// const bcrypt=require("bcrypt")
// const connectDb =require("./database")
// const User=require("./userModel")
// const verifyToken=require("./AuthRoutes")
// const app=express()
// app.use(express.json());
// connectDb();
// //user registration or signup
// app.post("/signup",async (req,res)=>{
//     const {userName,password} = req.body;
//      if( await User.findOne({userName})){
//         return res.status(400).json({message:"user already exist!"})
//      }
//     const hashedPassword=await bcrypt.hash(password,10);
//     new User({userName,password:hashedPassword}).save();
//     res.status(201).json({message:"user registered"});
// });

// //user login;
// app.post("/login",async (req,res)=>{
//     const {userName,password}=req.body;
//    const user= User.findOne({userName});
//    if(!user || bcrypt.compare(password,user.password))
//     return res.status(404).json({message:"invalid credentials"});

//        const token= jwt.sign({userName},"secret12345")
//        res.json({message:"login successfull",token});

// });

// //to access protected routes

// app.get("/admin",verifyToken,(req,res)=>{
//     res.json(`{welcome ${req.user.userName}}`)
// });
// app.listen(3000,(req,res)=>{
//     console.log("running")
// })











//creating a http server
const server=http.createServer(app);
//creating a new web socket server which connects to the http server
const io=new Server(server,{
  cors:{origin:"http://localhost:5175"},
  methods:["GET","POST"],
  credentials:true
});
//setting up connection
io.on("connection",(socket)=>{
console.log(`user connected wit id ${socket.id}`);

socket.on("chatMessage",(message)=>{
        console.log(`user message is ${message}`);
        //broadcast to the all clients
        io.emit("chatMessage",message);
});
socket.on("disconnect",()=>{
  console.log(`user disconnected with id ${socket.id}`);
});
});
server.listen(8080,()=>{
  console.log("server is running on port 8080")
});



const express=require("express")
const http=require("http")
const {Server} = require("socket.io")
const cors=require("cors")
const app=express();
app.use(cors({
  origin:"http://localhost:5175",
  methods:["Get","Post"],
  credentials:true
}));
const server=http.createServer(app);

const io= new Server(server,
  {
    cors:{origin:"http://localhost:5175"},
    methods:["Get","Post"],
    credentials:true
  }
);
io.on("connection",(socket)=>{
    console.log(`user connected with id ${socket.id}`);
    socket.on("chatMessage",(message)=>{
      console.log(`user's mesage is ${message}`)
      io.emit("chatMessage",message)
    });
    io.on("disconnect",()=>{
      console.log(`user disconnected with id ${socket.id}`)
    })
});
server.listen(3000,()=>{
  console.log("server running on port 3000")
})







