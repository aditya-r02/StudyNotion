import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    first_name : "",
    last_name : "",
    email : "",
    password : "",
    account_type : "",
}

export const SignupSlice = createSlice(
    {
        name: "signupData",
        initialState,
        reducers:{
            updateSignupData: (state, action) =>{
                state.first_name = action.payload.firstName;
                state.last_name = action.payload.lastName;
                state.email = action.payload.email;
                state.password = action.payload.password
                state.account_type = action.payload.type;
                // console.log("here in slice")
                // console.log(action.payload.firstName);
                // console.log(state.first_name)
            }
        }
    } 
)

export const {updateSignupData} = SignupSlice.actions;
export default SignupSlice.reducer;