import { createSlice } from "@reduxjs/toolkit";



export const initialState = {
    userToken : null, 
}

const authSlice = createSlice({
    name : "user",
    initialState ,
    reducers : {
       getToken : (state, action)=>{
          state.userToken = action.payload
       },
       removeToken : (state)=>{
        state.userToken = null;
       }
    },
  
})

export const {getToken ,removeToken} = authSlice.actions

export default authSlice.reducer
