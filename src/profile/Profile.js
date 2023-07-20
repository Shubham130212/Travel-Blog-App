import {Box,Typography,Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../apihelpers/helpers';
import DiaryItem from '../diaries/DiaryItem';
import { useDispatch } from 'react-redux';
import {authAction} from '../store';
import { useNavigate } from 'react-router-dom';


const Profile=()=> {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[user,setUser]=useState();
  useEffect(()=>{
    getUserDetails().then((data)=>setUser(data.user)).catch((err)=>console.log(err));
  },[]);

  const handleClick=()=>{
    dispatch(authAction.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };
  return <Box display="flex" flexDirection="colomn">
    {user &&(
    <>
    <Typography textAlign="center" variant="h3" fontFamily="quicksand" padding="2">User Profile</Typography>
    <Typography textAlign={"left"} fontFamily={"quicksand"} padding="1">Name:{user.name}</Typography>
    <Typography textAlign={"left"} fontFamily={"quicksand"} padding="1">Email:{user.email}</Typography>
    <Button onClick={handleClick} sx={{ml:"auto", width:"13%", color:"standard", variant:"contained"}}>
      Logout
    </Button>
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        {user.posts.map((post,index)=>(
          <DiaryItem key={index} title={post.title} description={post.description} id={post.id} image={post.image} location={post.location} user={post.user} date={post.date}/>
        )
        
        )}
    </Box>
    </>
    )}

  </Box>
};

export default Profile;
