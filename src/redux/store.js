import { configureStore } from '@reduxjs/toolkit'
// import { CartSlice } from './slices/CartSlice'
import LoaderSlice from './slices/LoaderSlice'
import SignupSlice from './slices/SignupSlice'
import UserSlice from './slices/UserSlice'
import TokenSlice from './slices/TokenSlice'
import CourseBuilder from './slices/CourseBuilder'

export const Store = configureStore({
  reducer: {
    loader: LoaderSlice,
    signupdata: SignupSlice,
    user: UserSlice,
    token: TokenSlice,
    courseBuilder: CourseBuilder,
  },
})