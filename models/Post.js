import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    image:{
        type:string,
        required:true
    },
    location:{
        type:string,
        required:true
    },
    date:{
        type:string,
        required:true
    },
    user:{
        type:mongoose.Types.objectId,
        ref:"User",
        required:true
    },
   
});

export default mongoose.model("Post",postSchema);