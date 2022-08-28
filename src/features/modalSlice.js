import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isOn : false,
    
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers : {
        openModal : (state)=>{

            state.isOn = true
        },
        closeModal : (state)=>{
            state.isOn = false
        }
    }
})

export default modalSlice.reducer
export const {openModal, closeModal} = modalSlice.actions