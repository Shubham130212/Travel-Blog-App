import User from "../models/User";
import { hashSync } from "bcryptjs";

//getAllUser
export const getAllUsers=async(req,res)=>{
    let users;
    try{
        users=await users.find();
    }
    catch(err){
       return  console.log(err);
    }
    if(!users){
        return res.status(500).json({message:"Unaxcepted error occured"});
    }
    return res.status(200).json({users});
};

export const getUserById=async(req,res)=>{
    const id=req.params.id;

    let user;
    try{
        user=await User.findById(id).populate("posts");
    }
    catch(err){
        return console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    return res.status(200).json((user));
}

//Signup
export const signup=async(req,res,next)=>{
    const{name,email,password}=req.body;
    if(!name && name.trim()===" " && !email && email.trim()===" " && !password && password.length<6){
        return res.status(422).json({message:"Invalid data"});
    }

    //bcrypt
    const hashedPassword=hashSync(password);

    let user;
    try{
      user=new User({email,name,password:hashedPassword});
      await user.save();
    }
    catch(err){
        return  console.log(err);
    }
    if(!user){
        return res.status(500).json({message:"Unexpected error occured"});
    }
    return res.status(201).json({user});
};

//Login
export const login=async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email && email.trim()===" " && !password && password.length<6){
        return res.status(422).json({json:"Invalid data"});
    }
    let existingUser;
    try{
     existingUser=await User.findOne({email});
    }
    catch(err){
      return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"user not found"});
    }
    const isPasswordCorrect=compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid password"});
    }
    return res.status(200).json({id:existingUser._id,message:"Login successfully"});
};
