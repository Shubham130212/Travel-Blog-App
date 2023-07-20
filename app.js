import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app=express();
dotenv.config();
mongoose.set('strictQuery',true);

//middleware
app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/post",postRouter);

//connection
const DB=`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.gbthd5w.mongodb.net/mernstack?retryWrites=true&w=majority`
mongoose.connect(DB).then(()=>{app.listen(5002,()=> console.log("connection get successfully on localhost port 5002"))})
.catch((err)=>console.log(err));

const middleware=(req,res,next)=>{
    console.log("hello my middleware");
    next();
}
//i0BgAuciw6o77C9k


