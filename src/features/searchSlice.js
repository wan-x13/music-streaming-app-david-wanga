import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchTerm : "",
    items : [],
    isEmpty : "",
    isLoading : false
  
}


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers : {
        getSearchTerm : (state, action)=>{
            state.searchTerm = action.payload
        },
        setTracks : (state, action)=>{
            state.items = action.payload
        },
        getIsEmpty : (state, action)=>{
            state.isEmpty = action.payload
        },
        getIsloading : (state,action)=>{
            state.isLoading = action.payload
        }
       
    }
})

export const {getSearchTerm ,setTracks , getIsEmpty, getIsloading} = searchSlice.actions

export default searchSlice.reducer