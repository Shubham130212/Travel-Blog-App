import { Box, FormLabel, TextField, Typography } from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { addPost } from '../apihelpers/helpers';
import { useNavigate } from 'react-router-dom';

const Add=()=> {
  const navigate=useNavigate();
  const [inputs,setInputs]=useState({title:"",description:"",imageUrl:"",location:"",date:""});

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,[e.target.name]:e.target.value
    }));
  };

  const OnResReceived=(data)=>{
    console.log(data);
    navigate("/diaries");
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    console.log(inputs);
    addPost(inputs)
    .then(OnResReceived)
    .catch((err)=>console.log(err));
    
  }; 
  
  return (
    <div>
      <Box display="flex" flexDirection={column} width="80%" height="100%">
        <Box display="flex" margin="auto" padding="2">
            <ModeOfTravelIcon sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }}/>
            <Typography variant="h4" fontWeight={"bold"} fontFamily={"dancing script"}>
                Add your travel blog
            </Typography>
            
        </Box>
        <Box display="flex"  magin="auto" padding="2">
            <form onSubmit={handleSubmit}>
              <Box display={"flex"} flexDirection={"column"} margin="auto" padding={"2"}>

                  <FormLabel>Title</FormLabel>
                  <TextField onchange={handleChange} name="title" value={inputs.title} sx={{fontFamily:"quicksand"}} margin="normal" variant="standard"/>

                  <FormLabel>Description</FormLabel>
                  <TextField onchange={handleChange} name="description" value={inputs.description} sx={{fontFamily:"quicksand"}} margin="normal" variant="standard"/>

                  <FormLabel>Image url</FormLabel>
                  <TextField onchange={handleChange} name="imageUrl" value={inputs.imageUrl} sx={{fontFamily:"quicksand"}} margin="normal" variant="standard"/>

                  <FormLabel>Location</FormLabel>
                  <TextField onchange={handleChange} name="location" value={inputs.location} sx={{fontFamily:"quicksand"}} margin="normal" variant="standard"/>

                  <FormLabel>Date</FormLabel>
                  <TextField onchange={handleChange} name="date" value={inputs.date} sx={{fontFamily:"quicksand"}} margin="normal" variant="standard"/>

                  <Button type="submit" color='standard' sx={{borderRadius:"7",marginRight:"auto",mt:'2'}} variant='contained'>Post</Button>
              </Box>
            </form>

        </Box>

      </Box>
    </div>
  )
}

export default add
