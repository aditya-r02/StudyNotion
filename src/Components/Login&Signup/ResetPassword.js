import { useState } from "react";
import { BiShow, BiHide } from 'react-icons/bi';
import Loader from "../../Components/Comman/Loader";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/slices/LoaderSlice";
import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsArrowLeft} from 'react-icons/bs'
import { resetPassword } from "../../Middleware/Auth";


export default function ResetPassword() {
    const navigate = useNavigate()
    const loading = useSelector((state) => state.loader.value)
    const dispatch = useDispatch()
    const location = useLocation();
    //console.log(location)
    const token = location.pathname.split("/").at(-1);

    const [data, setData] = useState({
       password: '', confirmPassword: '',
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setConfirm] = useState(false);

    function changeHandler(event) {
        setData(prev => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        resetPassword({password:data.password, confirmPassword:data.confirmPassword, token, dispatch, change, navigate})
    }

    return (


        <div className="w-full flex h-[70vh] flex-col items-center">
            {
                loading ?
                    (<Loader />) :
                    (<form className="w-[31.75rem] p-8 flex flex-col gap-6" onSubmit={submitHandler}>
                        <div className="flex flex-col gap-3 text-3xl font-semibold text-richblack-5">
                            <h3>Choose new password</h3>
                            <p className="text-richblack-100 text-lg">
                                Almost done. Enter your new password and youre all set.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <label className="flex flex-col gap-[0.375rem] self-stretch">
                                <p className="text-sm text-richblack-5 font-normal">Password&nbsp;<sup className="text-pink-200">*</sup></p>
                                <div className="flex relative self-stretch rounded-lg bg-richblack-800 gap-2 shadow-input">
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter Password" required onChange={changeHandler}
                                        value={data.password}
                                        className="w-full flex gap-[0.75rem] p-[0.75rem] items-center self-stretch 
                        bg-richblack-800 autofill:text-richblack-200 autofill:text-base autofill:font-medium
                        text-richblack-5 shadow-input outline-none rounded-l-lg"
                                    />
                                    <span className="text-white w-fit px-4 flex justify-center items-center cursor-pointer"
                                        onClick={() => { setShowPassword(!showPassword) }}>{showPassword ?

                                            <BiHide /> : <BiShow />}</span>
                                </div>

                            </label>

                            <label className="flex flex-col gap-[0.375rem] self-stretch">
                                <p className="text-sm text-richblack-5 font-normal">Password&nbsp;<sup className="text-pink-200">*</sup></p>
                                <div className="flex relative self-stretch rounded-lg bg-richblack-800 gap-2 shadow-input">
                                    <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" required onChange={changeHandler}
                                        value={data.confirmPassword}
                                        className="w-full flex gap-[0.75rem] p-[0.75rem] items-center self-stretch 
                        bg-richblack-800 autofill:text-richblack-200 autofill:text-base autofill:font-medium
                        text-richblack-5 shadow-input outline-none rounded-l-lg"
                                    />
                                    <span className="text-white w-fit px-4 flex justify-center items-center cursor-pointer"
                                        onClick={() => { setConfirm(!showConfirm) }}>{showConfirm ?

                                            <BiHide /> : <BiShow />}</span>
                                </div>

                            </label>
                        </div>

                        <div className="w-full">
                            <button type="submit" className="flex items-center justify-center gap-2 p-3 self-stretch rounded-lg
                    bg-yellow-50 text-richblack-900 shadow-signin font-semibold w-full">
                                Reset Password
                            </button>

                            <div className="flex p-3 items-center gap-2 rounded-lg text-richblack-5">
                                <span><BsArrowLeft /></span>
                                <Link to='/login'>Back to login</Link>
                            </div>
                        </div>
                    </form>)

            }
        </div>
    )
}