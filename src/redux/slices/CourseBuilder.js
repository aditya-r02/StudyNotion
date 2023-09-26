import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    step1: null,
    step2: null,
    step3: null,
}

export const CourseBuilder = createSlice({
    name:"courseBuilder",
    initialState,
    reducers:{
        updateStep1: (state, action) =>{
            state.step1 = action.payload
        },
        updateStep2: (state, action) =>{
            state.step2 = action.payload
        },
        updateStep3: (state, action) =>{
            state.step3 = action.payload
        },
    }
})

export const {updateStep1, updateStep2, updateStep3} = CourseBuilder.actions;
export default CourseBuilder.reducer;