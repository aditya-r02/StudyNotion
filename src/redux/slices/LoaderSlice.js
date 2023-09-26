import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: false,
  }

export const LoaderSlice = createSlice({
    name: 'loader',
    initialState, 
    reducers:{
        change: (state, action) =>{
            state.value = action.payload
        }
    }
})

export const {change} = LoaderSlice.actions;
export default LoaderSlice.reducer;