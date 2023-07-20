import {model,Schema,mongoose} from "mongoose";

const userSchema=new Schema({
 name:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
    unique:true,
 },
 password:{
    type:String,
    required:true,
    minLength:6,
 },
 posts:[{type:mongoose.Types.objectId,ref:"post"}],

});

export default model("User",userSchema);