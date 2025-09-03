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


// const fs=require("fs")
// fs.appendFile("shashi.txt","\n i m nitin singh singh singh",function(err){
//     if(err){
//         console.log("error in file")
//     }else{
//         console.log("created")
//     }
// })

// const fs=require("fs")

// fs.rmdir("my folder",function(err){
//     if(err){
//         console.log(err)
//    }
//    else{
//     console.log("done!")
//    }
// })
// if(fs.existsSync("nitin.txt")){
//     console.log("file found")
// }else{
//     console.log("not found")
// }

// fs.rename("shashi.txt","nitin.txt",function(err){
//     if(err){
//         console.log("error!")
//     }
//     else{
//         console.log("done")
//     }
// })

//useful for constructing file path dynamically
// const path = require("path")
// const filepath = path.join("folder","subfolder","file.txt")
// console.log(filepath);

//gives current directory+provided segments or provide absolutepath
// const path= require("path")
// const absolutepath=path.resolve("folder","subfolder","file.txt");
// console.log(absolutepath);


//when we need to know only file name
// const path=require("path");
// const fullpath="/home/user/documents/pdf.txt";
// console.log(path.basename(fullpath));

//to know only directory
// const path=require("path")
// const fullpath= "/home/user/documents/pdf.txt"
// console.log(path.dirname(fullpath))


//used to know the type of file or extensions
// const path=require("path")
// const file1="report.pdf"
// const file2="image.jpeg"
// const file3 = "doc.txt"
// console.log(path.extname(file1));
// console.log(path.extname(file2));
// console.log(path.extname(file3));


//give detailed info about the complete path in the form pof object
// const path=require("path")
// const fullpath="/home/user/documents/image.jpeg"
// console.log(path.parse(fullpath))


//normalize the path means it removes
//the unwanted '/' from the file path
// const path=require("path")
// const messypath="/home//users/documents//pdf.txt"
// console.log(path.normalize(messypath));
             

//   const http= require("http")

//   const server= http.createServer((req,res)=>{
//     // res.writeHead(200,
//     //     {"content-type": "text/plain"}
//     // );
//     res.end("nitin shashi");
//   });

//   server.listen(5000,()=>{
//     console.log("server is running")
//   });

// const http=require("http")

// const server = http.createServer((req,res)=>{
    
// if(req.url === "/"){
//     res.writeHead(200,{
//         "content-type":"text/plain"
//     });
//     res.end("welcome to home page");
// }else if(req.url === "/about"){
//     res.writeHead(200,{
//         "content-type":"text/plain"
//     });
//     res.end("welcome to about page")
// }else{
//     res.writeHead(400,{
//         "content-type":"text/plain"
//     });
//     res.end("404 not found")
// }
// })
// server.listen(9000,()=>{
//     console.log("server is running ")
// });

// const http=require("http")

// const server=http.createServer((req,res)=>{
//     // res.writeHead(200,{
//     //     "content-type":"text/html"
//     // });
//     res.end("<h1>this is html page 2</h1>");
    
// });
// server.listen(9000,()=>{
//     console.log("server is running")
// })

// const https = require("https")
// const url = "https://www.boredapi.com/api/activity"

// https.get(url,(res)=>{
//     let data="";
//     res.on('data',(chunk)=>{
//      data+=chunk;
//     });
//     res.on('end',()=>{
//         console.log("raw response:",data);
//     });
// }).on('error',(err)=>{
//     console.log("error",err.message)
// });

// const https = require("https");
// const url = "https://www.boredapi.com/api/activity";

// https.get(url, (res) => {
//     let data = "";

//     res.on("data", (chunk) => {
//         data += chunk;
//     });

//     res.on("end", () => {
//         try {
//             const parsedData = JSON.parse(data);
//             console.log(parsedData);
//         } catch (error) {
//             console.log("Error parsing JSON:", error.message);
//         }
//     });
// }).on("error", (err) => {
//     console.log("Request error:", err.message);
// });

//importing the express framework
// const express = require("express")
// //creating express application which provides
// //varities of metohds
// const app = express();
// //use to convert or parse the date coming from user
// app.use(express.json());
// //creating route for post method
// app.get("/user",(req,res)=>{
//     //req.body conatains the data which will 
//     // send by the user to post
//     const newUser=req.body;
// //used to send request to the http  server
//     res.send(`user ${newUser.name} added successfully`);
// });
// //start the server on the provided port number
// app.listen(5000,()=>{
//     console.log("server is running")
// });

// const express = require("express");
// const app=express();

// app.use(express.json());
// app.put("/user/:id",(req,res)=>{
//     //extract the value of id from the url
//     const userId= req.params.id;
//     //the data will be send through this
//     //which is to be updated
//     const updateData= req.body;

//     res.send(`user ${userId} updated with name: ${updateData.name}`);
// });
// app.listen(5000,()=>{
//     console.log("server is running on port 5000")
// });

// const express = require("express")
// const app=express();

// app.delete("/user/:id",(req,res)=>{
//     const deleteId=req.params.id;
//     res.send(`user with id ${deleteId} is deleted `)
// });
// app.listen(5000,()=>{
//     console.log("")
// })


//  const express = require("express")
//  const app= express()
//  app.use(function(req,res,next){
//    console.log("middleware is running");
//    next();
//  });
//  app.get("/",(req,res)=>{
//     res.send("server is running")
//  });
//  app.listen(6000
//  );

// const express = require("express");
// const app=express();
// const path=require("path")
// //app.use will execute first
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











// const express=require("express")
// const mongoose = require("mongoose")
// const User=require("./userModel")
// const connectDb=require("./database")
// const app=express()
// app.use(express.json())
// connectDb();
// //create
// app.post("/create",async(req,res)=>{
//     const user=new User(req.body);
//     await user.save();
//     res.status(200).json({message:"user created!",user})
    
// });
// //read all
// app.get("/read",async(req,res)=>{
//     const users=User.find();
//     res.json(users);
// });
// //read one
// app.get("/readone/:id",async(req,res)=>{
//     const user= await User.findById(req.params.id);
//     user ? res.json({message:"usr  found",user}):
//     res.status(404).json({message:"user not found"})
// });
// //update
// app.put("/update/:id",async(req,res)=>{
//     const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     user ? res.json(user):res.status(404).json({message:"not found"})

// })
// app.listen(3000,()=>{
//     console.log("running")
// });



// const express=require("express")
// const multer=require("multer")
// const path=require("path")
// const app=express();
// app.use(express.json())
// //setting up  storage
// const storage=multer.diskStorage({
//     destination:"./uploads",
//     filename:(req,file,cb)=>{
//         cb(null,Date.now() + "_" +file.originalname);
//     }
// });
// const upload = multer({storage});

// app.post("/upload",
//     upload.single("profilePic"),
//     (req,res)=>{
//         if(!req.file){
//             return res.status(404).json({message:"file not found"});
//         }
//         res.json({message:"file uploaded successfully",file:req.file})
//     }
// );
// app.listen(3000,()=>{
//     console.log("server started")
// })

// const express=require("express")
// const multer = require("multer")
// const app=express()
// app.use(express.json())

// //setting up local storage
// const storage= multer.diskStorage({
//     destination:"./uploads",
//     filename:(req,file,cb)=>{
//         cb(null,Date.now+ "_" + file.originalname);
//     }
// });
// //initialize the multer
// const upload=multer({storage});
// app.post("/upload",
//     upload.single("otherpic"),
//     (req,res)=>{
//         if(!req.file){
//             return res.status(404).json({message:"not found"})
//         }
//         res.json({message:"file uploaded successfully",file:req.file})
//     }
// );
// app.listen(3000,()=>{
//     console.log("running")
// })


//ex-2;upload only images

// const express=require("express")
// const multer=require("multer")
// const path=require("path")
// const app=express()
// app.use(express.json())

// //setting up local storage 
// const storage=multer.diskStorage({
//     destination:"./uploads",
//     filename:(req,file,cb)=>{
//         cb(null,Date.now+ "_" +file.originalname)
//     }
// });

// //using file filter to allow only images;
//here fileFilter is acts as a middleware in which cb act as next();
// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype.startsWith("image/"))
//     {
//         //accept image file only
//         cb(null,true)
//     }else{
//         //reject non-image file
//         cb(new Error("only images allowed"),false)
//     }
// };
// //initialize the multer or
// //configure multer with the specified storage
// const upload = multer({storage,fileFilter});

// //creating api endpoints
// app.post("/uploadimage",
//     upload.single("image"),
//     (req,res)=>{
//         if(!req.file){
//             res.status(404).json({message:"not found"})
//         }
//         res.json({message:"file uploaded succ",file:req.file})
//     }
// );
// app.listen(3000,()=>{
//     console.log("running")
// })

//ex-3,to upload multiple files

// const express=require("express")
// const multer=require("multer")
// const path=require("path")
// const app=express()
// app.use(express.json())
// const storage=multer.diskStorage({
//     destination:"./uploads",
//     filename:(req,file,cb)=>{
//         cb(null,Date.now+ "_" + file.originalname)
//     }
// });
// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype.toLowerCase().startsWith("/image")){
//         cb(null,true)
//     }
//     else{
//         cb(new Error("only image type"),false)
//     }
// }
// const upload = multer({storage,
//     //limit the size of file
//     limits:{fileSize:1*1024*1024},
//     fileFilter

// });
// app.post("/uploadfiles",
//     upload.array("files",5),
//     (req,res)=>{ 
//         if(!req.files || req.files.length === 0)
//             return res.status(404).json({message:"no file uploaded"});
    
//     res.json({message:"files uploaded successfully",files:req.files})
// }
// );
// app.listen(3000,()=>{
//     console.log("runnign")
// })


//storing files in memory instead of disk storage;
//this is done when we have to process
//the file befoore saving it;

// const express=require("express")
// const multer=require("multer")
// const app=express()
// app.use(express.json())

// const storage = multer.memoryStorage();

// const upload=multer({storage})

// app.post("/upload",
//       upload.single("image"),
//       (req,res)=>{
//         if(!req.file){
//             return res.status(404).json({message:"not uploaded"})
//         }
//         console.log("file buffer:",req.file.buffer)
//         res.json({message:"uploaded",
//             fileName:req.file.originalname,
//             fileSize:req.file.size,
//             fileType:req.file.mimetype
            
//         });
//       }
// );
// app.listen(3000,()=>{
//     console.log("running")
// })

//ex-4 to upload files to a specific folder based on type

// const express=require("express")
// const multer=require("multer")
// const app=express()
// app.use(express.json())

// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         let folder="uploads/others";//default folder

//         if(file.mimetype.startsWith("image/"))
//             folder="uploads/images";
//         else if(file.mimetype.startsWith("application/pdf") || 
//         file.mimetype.startsWith("application/msword"))
//     folder="uploads/documents";
//     cb(null,folder)
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+ "_"+file.originalname)

//     }


// });
// const upload=multer({storage})
// app.post("/upload",
//     upload.single("file"),
//     (req,res)=>{
//         if(!req.file)
//             return res.status(404).json({message:"not uploaded"});
//         res.json({message:"uploaded",file:req.file})
//     }
// )
// app.listen(3000,()=>{
// console.log("running")
// })

//ex-5 saving files to databse(mongodb)

// const express =require("express")
// const mongoose=require("mongoose")
// const multer=require("multer")
// const app=express();
// app.use(express.json())
// //setting up database connection
// const connectDb=async()=>{
//        try{
//         await mongoose.connect(`mongodb://127.0.0.1:27017/fileDB`)
//         console.log("connected successfully")
//        }catch(err){
//         console.log("connection errorr:",err)
//        }
// }
// connectDb();//starting the mongodb server
// //defining file Schema
// const fileSchema=new mongoose.Schema({
//     name:String,
//     data:Buffer,
//     contentType:String
// })
// const File=mongoose.model("File",fileSchema)

// //configure multer to store files in memory
// const upload=multer({storage:multer.memoryStorage()});
// //route to upload a file to mongodb
// app.post("/upload",
//     upload.single("file"),
//     async (req,res)=>{
//         if(!req.file)
//             return res.status(400).json({message:"file not uploaded"});

//         try{
//             const newFile=new File({
//             name:req.file.originalname,
//             data:req.file.buffer,
//             contentType:req.file.mimetype
//             });
//             await newFile.save();
//             res.json({message:"file saved in db",fileId:newFile._id});
//         }catch(err){
//             res.status(500).json({message:"not saved",err})
//         }

//     }
// );
// // route to retrieve file from mongodb
// // app.get("/file/:id",async(req,res)=>{
// //     try{
// //         const file=await File.findById(req.params.id);
// //         if(!file)
// //             return res.status(400).json({message:"file not found"});
// //         res.set("Content-Type",file.contentType);
// //         res.send(file.data)
// //     }catch(error){
// //         res.status(500).json({message:"error retriveing file",error})
// //     }
// // });



// app.get("/file/:id", async (req, res) => {
//     const fileId = req.params.id.trim();
    
//     console.log("Received ID:", fileId);
//     console.log("Valid ObjectId?", mongoose.Types.ObjectId.isValid(fileId));

//     if (!mongoose.Types.ObjectId.isValid(fileId)) {
//         return res.status(400).json({ message: "Invalid file ID format" });
//     }

//     try {
//         const file = await File.findById(fileId);
//         if (!file) {
//             return res.status(404).json({ message: "File not found" });
//         }

//         res.set("Content-Type", file.contentType);
//         res.send(file.data);
//     } catch (error) {
//         console.error("Error fetching file:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// });


// app.listen(3000,()=>{
// console.log("running!")
// })



//web sockets;
// const express=require("express")
// const http=require("http")
// const {Server}=require("socket.io") 
// const app=express()
// app.use(express.static("public"))
// const server=http.createServer(app)
// const io=new Server(server)
// io.on("connection",(socket)=>{
//     console.log("a user connected:",socket.id);
//     socket.on("message",(data)=>{
//         console.log("message received:",data);
//         io.emit("message",data)
//     });
//     socket.on("disconnect",()=>{
//         console.log("user disconnected",socket.id)
//     });
// });
// server.listen(5000,()=>{
//     console.log("srever is running on port 5000")
// })


// const express = require("express")
// const http=require("http")
// const {Server}=require("socket.io")
// const app=express()
// app.use(express.static("public"))
// //creates a http server
// const server=http.createServer(app)
// //creates a new web socket server
// const io= new Server(server)

// io.on("connection",(socket)=>{
//       console.log("user id:",socket.id);
      

//       socket.on("message",(message)=>{
//         //console.log("message:",message)
//         //broadcast message except the sender
//         socket.broadcast.emit("message",message)
//         // io.emit("message",message)
//       });
//       socket.on("disconnect",()=>{
//         console.log("user disconnected:",socket.id)
//       })
// });
// server.listen(3000,()=>{
//     console.log("server is running")
// })


web socket using react+express

const express=require("express")
const http=require("http")
const {Server}=require("socket.io")
const cors=require("cors")
const app=express()
app.use(cors({
  origin:"http://localhost:5175",
  methods:["GET","POST"],
  credentials:true
}));
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







