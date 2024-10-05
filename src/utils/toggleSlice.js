import { createSlice } from '@reduxjs/toolkit'

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        toggleState:true,
    },
    reducers:{
        addToggleState:(state,action)=>{
            state.toggleState=!state.toggleState
        }
    }
})

export const {addToggleState} = toggleSlice.actions;
export default toggleSlice.reducer;