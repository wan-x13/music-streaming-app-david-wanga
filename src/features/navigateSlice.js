import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isHome: false,
    isSearch : false,
    isLibrary: false,
    isLiked : false,
    isCreate : false,
    isRecentPlayedTracks : false,
    isPlaylistDetail : false,
    onSearchTerm : false,
    
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
            isRecentPlayedTracks : false,
            isPlaylistDetail : false,
            onSearchTerm  : false
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
                isRecentPlayedTracks: false,
                isPlaylistDetail : false,
                onSearchTerm  : false
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
                isRecentPlayedTracks: false,
                isPlaylistDetail : false,
                onSearchTerm  : false

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
                isRecentPlayedTracks : false,
                isPlaylistDetail : false,
                onSearchTerm  : false
             }
        },
        viewAllRecentTracks : (state)=>{
            return{
                ...state,
                isHome : false,
                isCreate : false,
                isLiked :false,
                isSearch : false,
                isLibrary: false,
                isRecentPlayedTracks : true,
                isPlaylistDetail : false,
                onSearchTerm  : false
             }
        },
        viewPlaylistDetail : (state)=>{

            return{
                ...state,
                isHome : false,
                isCreate : false,
                isLiked :false,
                isSearch : false,
                isLibrary: false,
                isRecentPlayedTracks : false,
                isPlaylistDetail : true,
                onSearchTerm  : false
             }
           
        },
        openWindow : (state)=>{
            state.onSearchTerm = true
        },
        closeWindow : (state)=>{
            state.onSearchTerm = false
        },
        reinit : (state)=>{
            return{
                ...state, 
                initialState,
            }

        }
    }

    
    
})
export const {toggleCreate, toggleHome, 
    toggleLibrary, toggleSearch, 
    toggleLiked, viewAllRecentTracks,
    reinit, viewPlaylistDetail, closeWindow, openWindow}    = navigateSlice.actions



export default navigateSlice.reducer