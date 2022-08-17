import {  createSlice } from "@reduxjs/toolkit";



export const initialState = {
    id: "",
    images : [],
    nameAlbum : "",
    nameTrack : "",
    duration,
}
export const trackSlice = createSlice({
    name : "tracks",
    initialState,
    reducers:{
        getTracks : (state, action)=>{
            
        }
    }


})