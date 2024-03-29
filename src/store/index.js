import {createSlice,configureStore} from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{isLoggedIn:false},
    reducer:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        },
    },
});


export const authAction=authSlice.actions;

export const store=configureStore({reducer:authSlice.reducer});