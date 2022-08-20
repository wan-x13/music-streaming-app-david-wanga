import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";


let token2 = localStorage.getItem("token")




export const initialState = {
    userToken : localStorage.getItem("userToken")? localStorage.getItem("userToken"): null, 
    identity : [],
    AllTracks: [],
    recentPlayer : [],
    TitleApp : "WaMuzika",
    isLoading : true,
}

export const getIdentity = createAsyncThunk('user/userIdentity', 
    async  ()=>{
      try {

        const response = await axios.get('https://api.spotify.com/v1/me',
        {  
            headers : {
                Authorization : "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        return response.data
        
      } catch (error) {
        console.log(error)
        
      }  
    
     
      
       
      
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
export const getRecentlyPlayed = createAsyncThunk('user/getRecentlyPlayed', 
async ()=>{
    const resp = await axios.get(`https://api.spotify.com/v1/me/player/recently-played  `,{

        headers : {
            Authorization : "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    })
 
    const {items} = resp.data
    // console.log(items)
   const track = items.map(item=>item.track).map(({id, name , album, duration_ms, uri })=> {
       let image= []
      if(album){
      const {images} = album
      image =[...images]
    }
    return {id, name, image , duration_ms, uri}
   })
//    console.log(track)

   return track
    
})




export const getCategories = createAsyncThunk('user/getCategories', 
async ()=>{
    const resp = await axios.get(`https://api.spotify.com/v1/users/31t2md6klgjx653ats7j53gpthkq/playlists `,{

        headers : {
            Authorization : "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    })
    console.log(resp)
})


      
const playlisUser = " https://api.spotify.com/v1/me/playlists "




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
        [getRecentlyPlayed.fulfilled] : (state, action)=>{
            
            state.isLoading = false;
            state.recentPlayer = action.payload
            console.log(action)
        },
        [getCategories.fulfilled] : (state, action)=>{
            state.isLoading = false;
            console.log(action)
        }
       
    }
  
})

export const {getToken ,removeToken } = authSlice.actions

export default authSlice.reducer
