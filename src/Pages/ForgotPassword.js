import { useState } from "react"
import {BsArrowLeft} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";
import forgotPassword from "../Middleware/Auth";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../redux/slices/LoaderSlice";
import Loader from "../Components/Comman/Loader";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const loading = useSelector((state)=>state.loader.value);
    //console.log("Loading", loading);
    const dispatch = useDispatch();

    function changeHandler(event){
        setEmail(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        forgotPassword({email, navigate, dispatch, change});
    }

    return (
        <div className="w-full flex h-[70vh] flex-col items-center">
            {
                loading ?
                (<Loader/>):
                
                    <form className="flex flex-col p-8 gap-9 w-[31.75rem]" onSubmit={submitHandler}>
                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-semibold text-richblack-5">Reset your password</h3>
                    <p className="text-lg text-richblack-100">Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p>
                </div>

                <label className="flex flex-col gap-[0.375rem] self-stretch ">
                    <p className="text-sm text-richblack-5 font-normal">Email Address&nbsp;
                        <sup className="text-pink-200">*</sup>
                    </p>
                    <input type="email" name="email" placeholder="Enter email address" required
                            value={email} onChange={changeHandler}
                        className="flex gap-[0.75rem] p-[0.75rem] items-center self-stretch rounded-lg
                        bg-richblack-800 autofill:text-richblack-200 shadow-input autofill:text-base autofill:font-medium
                        text-richblack-5 outline-none"    
                        />
                    
                </label>

                <div className="w-full">
                    <button type="submit" className="flex items-center justify-center gap-2 p-3 self-stretch rounded-lg
                    bg-yellow-50 text-richblack-900 shadow-signin font-semibold w-full">
                        Reset Password
                    </button>

                    <div className="flex p-3 items-center gap-2 rounded-lg text-richblack-5">
                        <span><BsArrowLeft/></span>
                        <Link to='/login'>Back to login</Link>
                    </div>
                </div>

            </form>
                
            }
        </div>
    )
}