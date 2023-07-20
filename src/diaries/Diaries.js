import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import DiaryItem from './DiaryItem';
import { getAllPosts } from '../apihelpers/helpers';

const Diaries=()=> {
  const[posts,setPosts]=useState();
  useEffect(()=>{
    getAllPosts()
       .then((data)=>setPosts(data?.posts))
       .catch((err)=>console.log(err));

  },[]);
  return (
    <Box  display="flex"
    flexDirection={"column"}
    padding={3}
    justifyContent="center"
    alignItems={"center"}>
      {" "}
      {posts && posts.map((item,index)=>(<DiaryItem date={new Date(`${item.date}`).toLocaleDateString()}
      title={item.title}
      description={item.description}
      image={item.image}
      id={item._id}
      location={item.location}
       key={index}
       user={item.user._id}
       name={item.user.name}
       />)
      )}
    <DiaryItem/>
    </Box>
  );
};

export default Diaries;
