import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [],
  }

export const CartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers:{
        add: (state, action)=>{
            state.value.push(action.payload);
        },

        remove: (state, action)=>{
            state.value = state.value.filter((card)=>card.id!==action.payload);
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;