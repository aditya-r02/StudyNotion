import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: (localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null),
    loading : false,
}

export const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUser: (state, action) =>{

            state.userDetails = action.payload;
            //console.log(state.userDetails)
            //console.log(typeof(state.userDetails))
        }
    }
})

export const {updateUser} = UserSlice.actions;
export default UserSlice.reducer;