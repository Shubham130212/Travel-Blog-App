import axios from "axios";

export const getAllPosts = async () => {
  const res = await axios.get("/posts");
  if (res.status !== 200) {
    return console.log("some error occured");
  }
  const data = res.data;
  return data;
};

//anthenticate at login & signup
export const sendAuthRequest = async (signup, data) => {
  const res = await axios.post(`/${signup ? "signup" : "login"}/`, {
    name: data.name,
    email: data.email,
    password: data.password
  })
    .catch((err) => console.log(err));

  if (res.status !== 200 || res.status !== 201) {
    console.log("user is not authenticated");
  }
  const resData = await res.data;
  return resData;
};

//fetch post frpm db
export const addPost = async (data) => {
  const res = await axios.post("/posts/", {
    title: data.title,
    description: data.description,
    location: data.location,
    image: data.imageUrl,
    date: data.date,
    user: localStorage.getItem("userId"),
  })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Error occured")
  }

  const resData = await res.data;
  return resData;
};

//get details by id to update blog
export const getPostDetails = async (id) => {
  const res = await axios.get(`/post/${id}`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unable to fetch diary");
  }

  const resData = await res.data;
  return resData;
};

//request to update in backend
export const postUpdate = async (data, id) => {
  const res = await axios.put(`/posts/${id}`, {
    title: data.title,
    description: data.description,
    image: data.imageUrl,
    location: data.location,

  }).catch(err => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to udpate");
  }

  const resData = await res.data;
  return resData;
};

//delete post
export const deletePost = async (id) => {
  const res = await axios.delete(`/posts/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("unable to delete post");
  }
  const resData = await res.Data;
  return resData;
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/user/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("user not found");
  }
  const resData = await res.Data;
  return resData;
};