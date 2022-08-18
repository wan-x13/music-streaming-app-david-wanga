import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";


let token2 = localStorage.getItem("token")




export const initialState = {
    userToken : localStorage.getItem("userToken")? localStorage.getItem("userToken"): null, 
    identity : [],
    AllTracks: [],
    TitleApp : "WaMuzika",
    isLoading : true,
}

export const getIdentity = createAsyncThunk('user/userIdentity', 
    async  ()=>{
        
     const response = await axios.get('https://api.spotify.com/v1/me',
        {  
            headers : {
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })

      
      
       return response.data
      
       
      
      })

    

export const getAllTracks = createAsyncThunk('user/getAlltracks', async(_, thunkAPI)=>{
    const resp = await axios.get(` https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO3vuU6c/tracks`, {

        headers : {
            Authorization : "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }

    })

   const {items}= resp.data
  
    const tracks = items.map(item=>item.track)

    return tracks
    
   

})
export const getArtistAlbum = createAsyncThunk('user/getArtistAlbums', 
async ()=>{
    const resp = await axios.get(` https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN/albums `,{

        headers : {
            Authorization : "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    })
    console.log(resp)
})

      





const authSlice = createSlice({
    name : "user",
    initialState ,
    reducers : {
       getToken : (state, action)=>{
          state.userToken = action.payload
       },
       removeToken : (state)=>{
        state.userToken = null;
       },
    },
    extraReducers:{
       
        [getIdentity.fulfilled] : (state, action)=>{
           
           
            state.identity = action.payload
            state.isLoading = false
        },
        [getAllTracks.fulfilled]: (state, action)=>{

            state.AllTracks = action.payload
            console.log(action)
            state.isLoading = false
        },
        [getArtistAlbum.fulfilled] : (state, action)=>{
          
            state.isLoading = false;
        }
       
    }
  
})

export const {getToken ,removeToken } = authSlice.actions

export default authSlice.reducer
