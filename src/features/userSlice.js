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
       }
    },
  
})

export const {getToken} = authSlice.actions

export default authSlice.reducer
