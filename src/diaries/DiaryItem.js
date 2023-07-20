import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions,Snackbar,Alert } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { deletePost } from "../apihelpers/helpers";

const DiaryItem = ({ title, description, image, location, date, id, user,name }) => {
  const[open,setOpen]=useState(false);
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const handleDelete = () => {
    deletePost(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };

  return (
    <Card sx={{
      width: "50%", height: "60vh",
      margin: 1,
      padding: 1,
      display: "flex",
      flexDirection: "column",
      boxShadow: "5px 5px 10px #ccc",
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <PlaceIcon />
          </IconButton>
        }
        title={location}
        subheader={date}
      />
      <img

        height="194"
        src={image}
        alt={location}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Box>
          <Typography fontWeight="bold" varient="caption">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingTop="2">
            {description}
          </Typography>
        </Box>
      </CardContent>

      {isLoggedInUser() && (
        <CardActions sx={{ marginRight: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color="blue"><EditIcon /></IconButton>
          <IconButton onClick={handleDelete} color="red"><DeleteIcon /></IconButton>
        </CardActions>
      )}

      <Snackbar open={open} autoHideDuration={5000} onClose={()=>setOpen(false)}>
        <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>


  )
}

export default DiaryItem;
