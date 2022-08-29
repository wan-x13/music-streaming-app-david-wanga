import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useMemo } from "react"



const initialState ={
    nameOfPlaylist : "",
    error : "",
    isPlaylist1 : true,
    isPlaylist2 : true,
    isPlaylist3 : true,
    isPlaylist4 : true,
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
        console.log(error.message)
        
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
        
     
      
       
        
    }
  })

  






const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers : {
          getNameOfPlaylist : (state, action)=>{
            state.nameOfPlaylist = action.payload
          },
        //   setIsloading : (state)=>{
        //     state.isLoading = (state.isPlaylist1 || state.isPlaylist2) || (state.isPlaylist3 || state.isPlaylist4)
            
        //   }

    },
    extraReducers : {
        [getPlaylist1.pending] :(state)=>{
              state.isPlaylist1 = true
              
        },
        [getPlaylist1.fulfilled] : (state,action)=>{  
                state.playlist1 = action.payload
                state.isPlaylist1 = false
                state.error = ""
                console.log(action)
            
        
        },
        [getPlaylist1.rejected] : (state,action)=>{
            state.isPlaylist1 = true
            state.error = action.error.message
        },
        [getPlaylist2.pending] :(state)=>{
            state.isPlaylist2 = true
            
      },
        [getPlaylist2.fulfilled] : (state, action)=>{
            return{
                ...state,
                playlist2 : action.payload,
                isPlaylist2 : false,
                error : ""
            }
        },
        [getPlaylist2.rejected] : (state, action)=>{
            state.isPlaylist2 = true
          
            state.error = action.error.message
        },

        [getPlaylist3.pending] :(state)=>{
            state.isPlaylist3 = true
            
        },
        
        [getPlaylist3.fulfilled] : (state,action)=>{

            
            return{
                ...state,
                playlist3 : action.payload,
                isPlaylist3 : false,
                error : ""
                
            }
        },
        [getPlaylist3.rejected] : (state,action)=>{
            state.isPlaylist3 = true
            state.error = action.error.message
        },
        [getPlaylist4.pending] :(state)=>{
            state.isPlaylist4 = true
           
         },
        
      
        [getPlaylist4.fulfilled]: (state, action)=>{
            console.log(action)
            return{
                ...state,
                
                playlist4 : action.payload,
                isPlaylist4 : false,
                error : "",
                
            }
        },
        [getPlaylist4.rejected] : (state,action)=>{
            state.isPlaylist4 = true
            state.error = action.error.message
            
        },
        
       

    }
})
export const {getNameOfPlaylist} = playlistSlice.actions
export default playlistSlice.reducer