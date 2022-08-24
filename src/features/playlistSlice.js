import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useMemo } from "react"



const initialState ={
    isLoading : true,
    nameOfPlaylist : "",
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
        const playlist  = []

    
        const {description , id, uri ,tracks, name, images} = response.data
         
        playlist.push({description , id, uri ,tracks, name, images})
       
         
        return playlist
       
        
    } catch (error) {
        console.log(error)
        
    }
  })

  export const getPlaylist2 =  createAsyncThunk('playlist/getPlaylist2', 
  async()=>{
    try {
        const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DX2oU49YwtXI2',{

            headers :{
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        
        const playlist  = []

       const {description , id, uri ,tracks, name, images} = response.data
        
       playlist.push({description , id, uri ,tracks, name, images})
      
        
       return playlist
       
        
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
        
      
        const playlist  = []

       const {description , id, uri ,tracks, name, images} = response.data
        
       playlist.push({description , id, uri ,tracks, name, images})
      
        
       return playlist
       
        
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
        

        const playlist  = []

       const {description , id, uri ,tracks, name, images} = response.data
       playlist.push({description , id, uri ,tracks, name, images})
      
        
       return playlist
       
        
    } catch (error) {
        console.log(error)
        
    }
  })

  

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers : {
          getNameOfPlaylist : (state, action)=>{
            state.nameOfPlaylist = action.payload
          }

    },
    extraReducers : {
        [getPlaylist1.fulfilled] : (state,action)=>{
           
            return{
                ...state,
                isLoading : false,
                playlist1 : action.payload
            }
        
        },
        [getPlaylist1.rejected] : (state)=>{
            state.isLoading = true
        },
        [getPlaylist2.fulfilled] : (state, action)=>{
            return{
                ...state,
                isLoading : false,
                playlist2 : action.payload
            }
        },
        [getPlaylist2.rejected] : (state)=>{
            state.isLoading = true
        },
        [getPlaylist3.fulfilled] : (state,action)=>{
            return{
                ...state,
                isLoading : false,
                playlist3 : action.payload
            }
        },
        [getPlaylist3.rejected] : (state)=>{
            state.isLoading = true
        },
        [getPlaylist4.fulfilled]: (state, action)=>{
            return{
                ...state,
                isLoading : false,
                playlist4 : action.payload
            }
        },
        [getPlaylist4.rejected] : (state)=>{
            state.isLoading = true
        },

    }
})
export const {getNameOfPlaylist } = playlistSlice.actions
export default playlistSlice.reducer