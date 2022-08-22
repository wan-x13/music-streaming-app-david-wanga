import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchTerm : "",
    items : [],
  
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
       
    }
})

export const {getSearchTerm ,setTracks} = searchSlice.actions

export default searchSlice.reducer