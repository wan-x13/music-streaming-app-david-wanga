import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isHome: false,
    isSearch : false,
    isLibrary: false,
    isLiked : false,
    isCreate : false,
    
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
         }
        },
        toggleSearch: (state)=>{
            return{
                ...state,
                isHome : false,
                isCreate : false,
                isLiked :false,
                isSearch : true,
                isLibrary: false,
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
export const {toggleCreate, toggleHome, toggleLibrary, toggleSearch, toggleLiked, reinit} = navigateSlice.actions

export default navigateSlice.reducer