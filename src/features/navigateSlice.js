import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isHome: false,
    isSearch : false,
    isLibrary: false,
    isLiked : false,
    isCreate : false,
    isPlaylist : false,
    
}

export const navigateSlice = createSlice({
    name : "navigate",
    initialState,
    reducers: {
        toggleHome : (state)=>{
         return{
            ...state,
            isHome : true,
            isCreate : false,
            isLiked :false,
            isSearch : false,
            isLibrary: false,
            isPlaylist : false,
         }
        },
        toggleSearch: (state)=>{
            return{
                ...state,
                
                isSearch : true,
              
             }
        },
        toggleLibrary: (state)=>{
            return{
                ...state,
                isHome : false,
                isCreate : false,
                isLiked :false,
                isSearch : false,
                isLibrary: true,
                isPlaylist: false,
             }
        },
        toggleLiked: (state)=>{
            return{
                ...state,
                isHome : false,
                isCreate : false,
                isLiked :true,
                isSearch : false,
                isLibrary: false,
                isPlaylist: false,

             }
        },
        toggleCreate : (state)=>{
            return{
                ...state,
                isHome : false,
                isCreate : true,
                isLiked :false,
                isSearch : false,
                isLibrary: false,
                isPlaylist : false,
             }
        },
        togglePlaylist : (state)=>{
            return{
                ...state,
                isHome : false,
                isCreate : false,
                isLiked :false,
                isSearch : false,
                isLibrary: false,
                isPlaylist : true,
             }
        },
        reinit : (state)=>{
            return{
                ...state, 
                initialState,
            }

        }
    }

    
    
})
export const {toggleCreate, toggleHome, toggleLibrary, toggleSearch, toggleLiked, togglePlaylist,reinit} = navigateSlice.actions

export default navigateSlice.reducer