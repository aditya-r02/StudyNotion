import axios from "axios";

export const instance = axios.create({});

export const categoryUrl = "http://localhost:4000/api/v1/getallcategory";

export const forgotPassUrl = "http://localhost:4000/api/v1/forgotpassword"

export const resetPassUrl = "http://localhost:4000/api/v1/resetpassword"

export const otpUrl = "http://localhost:4000/api/v1/sendotp"

export const signupUrl = "http://localhost:4000/api/v1/signup"

export const loginUrl = "http://localhost:4000/api/v1/login"

export const removePhotoUrl = "http://localhost:4000/api/v1/removeDisplayPicture"

export const updatePhotoUrl = "http://localhost:4000/api/v1/updateDisplayPicture"

export const changePassUrl = "http://localhost:4000/api/v1/changepassword"

export const deleteAccountUrl = "http://localhost:4000/api/v1/deleteprofile"

export const updateAdditionalUrl = "http://localhost:4000/api/v1/updateprofile"
