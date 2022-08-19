import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    uri : "",
}


const playSlice = createSlice({
    name : "play",
    initialState,
    reducers : {
        getUri : (state, action)=>{
            state.uri = action.payload
        }
    }

})

export const {getUri} = playSlice.actions
export default playSlice.reducer