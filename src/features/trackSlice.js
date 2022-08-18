import {  createSlice } from "@reduxjs/toolkit";



export const initialState = {
    tracks : [],
}
const trackSlice = createSlice({
    name : "track",
    initialState,
    reducers:{
        getTracks : (state, action)=>{
            state.tracks = action.payload
            state.action = []
            
        }
    }


})

export const {getTracks} = trackSlice.actions
export default trackSlice.reducer