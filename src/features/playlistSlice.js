import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState ={
    isLoading : true,
    playlist1 : [],
    playlist2 : [],
    playlist3 : [],
    playlist4 : [],
}

export const getPlaylist1 = createAsyncThunk('playlist/getPlaylist1', 
  async()=>{
    try {
        const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO3by276',{

            headers :{
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
       

       const {description , id, uri ,tracks, name, images} = response.data
        
       return {id, name, uri ,tracks, description, images}
       
        
    } catch (error) {
        console.log(error)
        
    }
  })

  export const getPlaylist2 = createAsyncThunk('playlist/getPlaylist2', 
  async()=>{
    try {
        const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DX2oU49YwtXI2',{

            headers :{
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        
        console.log(response.data)

       const {description , id, uri ,tracks, name, images} = response.data
        
       return {id, name, uri ,tracks, description, images}
       
        
    } catch (error) {
        console.log(error)
        
    }
  })


  export const getPlaylist3 = createAsyncThunk('playlist/getPlaylist3', 
  async()=>{
    try {
        const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO44Az3q',{

            headers :{
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        
        console.log(response.data)

       const {description , id, uri ,tracks, name, images} = response.data
        
       return {id, name, uri ,tracks, description, images}
       
        
    } catch (error) {
        console.log(error)
        
    }
  })

  export const getPlaylist4 = createAsyncThunk('playlist/getPlaylist4', 
  async()=>{
    try {
        const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1KAa52',{

            headers :{
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        
        console.log(response.data)

       const {description , id, uri ,tracks, name, images} = response.data
        
       return {id, name, uri ,tracks, description, images}
       
        
    } catch (error) {
        console.log(error)
        
    }
  })

  

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers : {},
    extraReducers : {
        [getPlaylist1.fulfilled] : (state,action)=>{
           
            state.isLoading = false
            state.playlist1 = action.payload
        },
        [getPlaylist2.fulfilled] : (state, action)=>{

            state.isLoading = false
            state.playlist2 = action.payload
        },
        [getPlaylist3.fulfilled] : (state,action)=>{
            state.isLoading = false;
            state.playlist3 = action.payload
        },
        [getPlaylist4.fulfilled]: (state, action)=>{
            state.isLoading = false;
            state.playlist4 = action.payload
        }

    }
})

export default playlistSlice.reducer