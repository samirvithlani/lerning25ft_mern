import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[] //array
    },
    reducers:{
        //action
        //state --> initailState -->object
        //state == initialState
        //action -> type,payload
        //type -->cart/addToCart
        //payload --> object
        addToCart:(state,action)=>{
            console.log("state",state.cart)
            console.log("action...",action)
            state.cart.push(action.payload)
        },
    }
})

export const {addToCart}= cartSlice.actions
export default cartSlice.reducer