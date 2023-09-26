import { useState } from "react";
import {BiShow, BiHide} from 'react-icons/bi';
import { sendOtp } from "../../Middleware/Auth";
import { useDispatch } from 'react-redux'
import { change } from '../../redux/slices/LoaderSlice'
import { useNavigate } from "react-router-dom";
import { updateSignupData } from "../../redux/slices/SignupSlice";


function SignupForm(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        firstName:'', lastName:'', email:'', password:'', confirmPassword:'',
        type:'Student'
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setConfirm] = useState(false);

    function changeHandler(event){
        setData(prev=>({
            ...prev, [event.target.name] : event.target.value
        }))
    }

    function changeHandler1(event){
        setData(prev=>({
            ...prev, type: event.target.textContent
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        sendOtp({data, navigate, dispatch, change , updateSignupData  });
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col  w-full">
            {/*Type button --------DONE*/}
            <div className="flex gap-[0.3125rem] p-[0.25rem] rounded-full bg-richblack-800 w-fit text-richblack-200
            shadow-input">
                
                <span  onClick={changeHandler1}
                className={`${(data.type==='Student')?'text-richblack-5 bg-richblack-900':''}
                cursor-pointer py-[0.375rem] px-[1.125rem] gap-[0.625rem] rounded-full select-none`}>
                Student</span>
                <span  onClick={changeHandler1}
                className={`${(data.type==='Instructor')?'text-richblack-5 bg-richblack-900':''}
                cursor-pointer py-[0.375rem] px-[1.125rem] gap-[0.625rem] rounded-full select-none`}
                >Instructor</span>
            </div>

            {/*input fields*/}
            <div className="flex flex-col gap-[1.25rem] self-stretch w-full mt-[2.25rem]">
                {/*FIrst and last name*/}
                <div className="gap-[1.25rem] grid grid-cols-2 ">
                    {/*First Name*/}
                    <label className="flex flex-col gap-[0.375rem]">
                        <p className="text-sm text-richblack-5 font-normal w-fit">First Name&nbsp;
                            <sup className="text-pink-200">*</sup>
                        </p>
                        <input type="text" name="firstName" placeholder="Enter first name" required
                            value={data.firstName}  onChange={changeHandler} 
                            className="flex gap-[0.75rem] p-[0.75rem] items-center rounded-lg
                            bg-richblack-800 autofill:text-richblack-200 shadow-input autofill:text-base autofill:font-medium
                            text-richblack-5 outline-none "    
                        />
                    </label>

                    {/*Last name*/}
                    <label className="flex flex-col gap-[0.375rem] self-stretch">
                        <p className="text-sm text-richblack-5 font-normal">Last Name&nbsp;
                            <sup className="text-pink-200">*</sup>
                        </p>
                        <input type="text" name="lastName" placeholder="Enter last name" required
                            value={data.lastName}  onChange={changeHandler}
                            className="flex gap-[0.75rem] p-[0.75rem] items-center self-stretch rounded-lg
                            bg-richblack-800 autofill:text-richblack-200 shadow-input autofill:text-base autofill:font-medium
                            text-richblack-5 outline-none"    
                        />
                    </label>
                </div>

                {/*Email*/}
                <label className="flex flex-col gap-[0.375rem] self-stretch ">
                    <p className="text-sm text-richblack-5 font-normal">Email Address&nbsp;
                        <sup className="text-pink-200">*</sup>
                    </p>
                    <input type="email" name="email" placeholder="Enter email address" required
                        value={data.email} onChange={changeHandler}
                        className="flex gap-[0.75rem] p-[0.75rem] items-center self-stretch rounded-lg
                        bg-richblack-800 autofill:text-richblack-200 shadow-input autofill:text-base autofill:font-medium
                        text-richblack-5 outline-none"    
                        />
                    
                </label>

                {/*Phone number*/}


                {/*password and confirm password*/}
                
                <label className="flex flex-col gap-[0.375rem] self-stretch">
                    <p className="text-sm text-richblack-5 font-normal">Password&nbsp;<sup className="text-pink-200">*</sup></p>
                    <div className="flex relative self-stretch rounded-lg bg-richblack-800 gap-2 shadow-input">
                        <input type={showPassword?'text':'password'} name="password" placeholder="Enter Password" required onChange={changeHandler}
                            value={data.password}
                            className="w-full flex gap-[0.75rem] p-[0.75rem] items-center self-stretch 
                        bg-richblack-800 autofill:text-richblack-200 autofill:text-base autofill:font-medium
                        text-richblack-5 shadow-input outline-none rounded-l-lg" 
                        />
                        <span className="text-white w-fit px-4 flex justify-center items-center cursor-pointer"
                        onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?

                        <BiHide/>:<BiShow/>}</span>
                    </div>
                    
                </label>

                <label className="flex flex-col gap-[0.375rem] self-stretch">
                    <p className="text-sm text-richblack-5 font-normal">Password&nbsp;<sup className="text-pink-200">*</sup></p>
                    <div className="flex relative self-stretch rounded-lg bg-richblack-800 gap-2 shadow-input">
                        <input type={showConfirm?'text':'password'} name="confirmPassword" placeholder="Confirm Password" required onChange={changeHandler}
                            value={data.confirmPassword}
                            className="w-full flex gap-[0.75rem] p-[0.75rem] items-center self-stretch 
                        bg-richblack-800 autofill:text-richblack-200 autofill:text-base autofill:font-medium
                        text-richblack-5 shadow-input outline-none rounded-l-lg" 
                        />
                        <span className="text-white w-fit px-4 flex justify-center items-center cursor-pointer"
                        onClick={()=>{setConfirm(!showConfirm)}}>{showConfirm?

                        <BiHide/>:<BiShow/>}</span>
                    </div>
                    
                </label>
                

            </div>

            <button className="w-full py-1 bg-yellow-500 text-black rounded-md font-semibold mt-[2.25rem]">Create Account</button>

        </form>
    );
}

export default SignupForm;