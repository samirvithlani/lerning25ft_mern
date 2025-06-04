import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:0
    },
    reducers:{
        //actions
        //state --> initialSTate
        //action --> type,payload
        depositAction:(state,action)=>{
            state.balance = state.balance + action.payload;
        },
        
    }
})

//action
//reducer

//depositAction --> bankComponent
export const {depositAction} = bankSlice.actions
//store...
export default bankSlice.reducer