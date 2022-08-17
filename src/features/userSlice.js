import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";


let token2 = localStorage.getItem("root")? localStorage.getItem("root") : null
console.log(token2)


export const initialState = {
    userToken : localStorage.getItem("userToken")? localStorage.getItem("userToken"): null, 
    identity : [],
    AllTracks: [],
    isLoading : true,
}
export const token = "BQABgmGGj2Hk1RufGSFhRy3N-QTPI3NELCW4BUYF_GX-J1rCmjV-An0-1WbyG-sgbbFELccha80n8OASuxcjWTm6KdYkkDZMS9v7rYsDe7S7_4Bll1087mNhe7PthFWaMMuxj82rRzXusZzyx_j1FBrONrKlwWRipaX1gOI87O-XQuZbTUHKY5Qw2eYDKUMkEmqmgElNEZwqEAYtuxl7MpfjF7XklUEAzw4R95lankB2r06uFV3N0yZRBuMag5iVgSy2g6fwWnRqvxU"
export const getIdentity = createAsyncThunk('user/userIdentity', 
    async  ()=>{
        
     const response = await axios.get('https://api.spotify.com/v1/me',
        {  
            headers : {
                Authorization : "Bearer " + token,
                "Content-Type": "application/json"
            }
        })

      
      
       return response.data
      
       
      
      })

    

export const getAllTracks = createAsyncThunk('user/getAlltracks', async(_, thunkAPI)=>{
    const resp = await axios.get(` https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO3vuU6c/tracks`, {

        headers : {
            Authorization : "Bearer " + token,
            "Content-Type": "application/json"
        }

    })

   const {items}= resp.data
  
     const tracks = items.map(item=>item.track)

     let result = [] ;
     for(let track of tracks){
    
        const { id, album ,  name,  duration_ms} = track
        let img = []
        if(album){
            const {images} = album
              
          
             img = [...images[0]]
            
             
            // return  img
        }
        result.push({"id" : id, "image" : img , "name": name, "duration_ms" : duration_ms})
     }
     return result
   

})
export const getArtistAlbum = createAsyncThunk('user/getArtistAlbums', 
async ()=>{
    const resp = await axios.get(` https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN/albums `,{

        headers : {
            Authorization : "Bearer " + token,
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
       }
    },
    extraReducers:{
       
        [getIdentity.fulfilled] : (state, action)=>{
           
           
            state.identity = action.payload
            state.isLoading = false
        },
        [getAllTracks.fulfilled]: (state, action)=>{

            state.AllTracks = action.payload
            state.Artists = ""
            state.All = []
            console.log(action)
            state.isLoading = false
        },
        [getArtistAlbum.fulfilled] : (state, action)=>{
          
            state.isLoading = false;
        }
       
    }
  
})

export const {getToken ,removeToken} = authSlice.actions

export default authSlice.reducer
