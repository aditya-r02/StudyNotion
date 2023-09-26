import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: (localStorage.getItem("token")?(localStorage.getItem("token")): null),
}

export const TokenSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
        updateToken: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {updateToken} = TokenSlice.actions;
export default TokenSlice.reducer;