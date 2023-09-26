import { toast } from "react-hot-toast";
import { instance, forgotPassUrl, resetPassUrl, otpUrl, signupUrl, loginUrl, changePassUrl,
deleteAccountUrl } from "../axios/Instance";
import { updateSignupData } from "../redux/slices/SignupSlice";
import { updateUser } from "../redux/slices/UserSlice";
import { updateToken } from "../redux/slices/TokenSlice";
import {change} from '../redux/slices/LoaderSlice'


export default async function forgotPassword({email, navigate, dispatch, change}){

    if (!email){
        console.log(email)
        toast.error("Enter valid email")
        return;
    } 

    try{
        dispatch(change(true));
        let result = await instance.put(forgotPassUrl, {email});
        dispatch(change(false));
        toast.success(result.data.message);
        navigate("/checkemail", {
            state:{email}
        })

    }catch(error){
        dispatch(change(false));
        //console.log(error.response.data.message);
        toast.error(error.response.data.message)
    }

}

export  async function resetPassword({password, confirmPassword, token, dispatch, change, navigate}){
    try{
        dispatch(change(true));
        const result = await instance.put(resetPassUrl, {password, confirmPassword, token})
        dispatch(change(false));
        toast.success(result.data.message)
        navigate("/login")
    }
    catch(error){
        dispatch(change(false))
        toast.error(error.response.data.message)
    }
}

export async function sendOtp({data, navigate, dispatch, change}){
    //console.log(data);
    try{
        dispatch(change(true));
        //console.log("hello1")
        const result = await instance.post(otpUrl, 
            {first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            account_type: data.type,
            confirm_password: data.confirmPassword})
        //console.log(result)
        console.log("hello2")
        dispatch(change(false));
        dispatch(updateSignupData(data));
        toast.success(result.data.message)
        navigate("/verifyemail", {
            state: {data:data}
        })    
    }
    catch(error){
        dispatch(change(false))
        toast.error(error.response.data.message)
    }
}

export async function signupLink({data, navigate, dispatch, change, otp}){
    try{
        dispatch(change(true));
        // console.log("in final funtion")
        // console.log(data);
        // console.log(otp)
        
        const result = await instance.post(signupUrl, 
            {first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            account_type: data.type,
            confirm_password: data.confirmPassword,
            otp:otp})
        //console.log(result)
        dispatch(change(false));
        toast.success(result.data.message)
        navigate("/login")    
    }
    catch(error){
        dispatch(change(false))
        toast.error(error.response.data.message)
    }
}

export async function loginLink({data, dispatch, change, navigate}){
    try{
        //console.log("hello", data)
        
        dispatch(change(true))
        const result = await instance.post(loginUrl, {
            email:data.email, password:data.password, account_type: data.type
        })
        //console.log(result)
        const token = result.data.token
        const userDetails = (result.data.userDetails)
        //console.log(token)

        dispatch(updateToken(token));
        dispatch(updateUser(userDetails));
        localStorage.setItem("token", token);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        //console.log(typeof(userDetails))
        //console.log(userDetails)
        dispatch(change(false));
        toast.success(result.data.message)
        navigate("/")   
    }
    catch(error){
        console.log(error)
        dispatch(change(false));
        toast.error(error.response.data.message)
    }
}

export async function logoutLink({navigate, dispatch}){
    localStorage.clear();
    dispatch(updateUser(null));
    dispatch(updateToken(null));
    //window.location.reload();
    navigate("/login");
    toast.success("Logged out successfully")
}

export async function changePassword({dispatch, password, newPassword, token}){
    try{
        dispatch(change(true));
        const result = await instance.put(changePassUrl, {
            password, newPassword, confirmPassword: newPassword
        },
        {
            headers:{
                "token": "Bearer "+token
            }
        })

        //console.log(result.data)
        dispatch(change(false));
        toast.success(result.data.message)
    }
    catch(error){
        dispatch(change(false));
        toast.error(error.response.data.message)
    }
}

export async function deleteAccount({dispatch, token, navigate}){
    try{
        dispatch(change(true));
        const result = await instance.delete(deleteAccountUrl, {
            headers:{
                "token":"Bearer "+token
            }
        })
        localStorage.clear();
        
        navigate('/')
        dispatch(change(false));
        toast.success(result.data.message)
        window.location.reload()

    }
    catch(error){
        dispatch(change(false));
        toast.error(error.response.data.message)
    }
}