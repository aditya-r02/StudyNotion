import {BsArrowLeft} from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {GiBackwardTime} from 'react-icons/gi'
// import OtpInput from 'react-otp-input'
import { useState } from 'react'
import { signupLink } from '../../Middleware/Auth'
import { useDispatch } from 'react-redux'
import { change } from '../../redux/slices/LoaderSlice'


export default function OtpPage(){
    const [otp, setOtp] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();


    
    const data = location.state.data;
    // console.log("otp page")
    // console.log(data)
    

    function changeHandler(event){
        setOtp(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault()
        signupLink({data, navigate, dispatch, change, otp})
    }

    return (
        <div className="h-[60vh] flex justify-center" onSubmit={submitHandler}>

            <form className="w-[31.75rem] flex p-8 flex-col gap-6">
                <div className="flex flex-col gap-3 w-full">
                    <h3 className="text-3xl font-semibold text-richblack-5">Verify email</h3>
                    <p className="text-lg text-richblack-100">
                        A verification code has been sent to you. Enter the code below
                    </p>
                </div>

                <div className='w-full'>
                    {/* <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span className='w-5'></span>}
                        renderInput={(props) => <input {...props}  className='flex flex-col gap-3 p-3 items-center justify-center rounded-lg
                        bg-richblack-800 text-richblack-5 shadow-otp w-[3.5833rem] text-base font-medium
                        text-center ' placeholder='-' />}
                    /> */}
                    <input type='number' placeholder='enter otp' value={otp} onChange={changeHandler}/>
                </div>

                <div className="flex flex-col gap-3 self-stretch">
                    <button type="submit" className="w-full flex p-3 justify-center items-center gap-2 rounded-lg
                    bg-yellow-50 shadow-signin text-base font-medium text-richblack-900">
                    Verify email</button>

                    <div className="flex gap-3 ">
                        <div className="flex-1 p-3 flex items-center gap-2 text-base text-richblack-5">
                            <BsArrowLeft/>
                            <Link to='/login'>Back to login</Link>
                        </div>
                        <div className="flex-1 p-3 flex items-center gap-2 text-base justify-end
                        text-blue-100">
                            <GiBackwardTime className='text-lg'/>
                            <div className='cursor-pointer' >Resend it</div>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    )
}