import { useState } from "react";
import { useDispatch } from "react-redux";
import {BiShow, BiHide} from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import { loginLink } from "../../Middleware/Auth";
import { change } from "../../redux/slices/LoaderSlice";


function LoginForm(props){
    const [data, setData] = useState({
        email:'', password:'', type:'Student'
    })

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setData((prev)=>({
            ...prev, [event.target.name] :event.target.value
        }))
    }

    function clickHandler(event){
        event.preventDefault();
        //console.log(data)
        loginLink({data, dispatch, change, navigate})
        
    }

    function changeHandler1(event){
        setData(prev=>({
            ...prev, type: event.target.textContent
        }))
    }

    return (
        <form onSubmit={clickHandler} className="flex flex-col">
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

            <label className="flex flex-col gap-[0.375rem] self-stretch mt-[2.25rem]">
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

            <label className="flex flex-col mt-[1.25rem] gap-[0.375rem] self-stretch">
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
                <Link to='/forgotpassword' className="text-blue-200 text-sm font-normal self-end w-fit">Forgot Password</Link>
            </label>

            

            <button className="mt-[2.25rem] w-full p-[0.75rem] text-center rounded-lg shadow-signin bg-yellow-50
            text-base font-medium text-richblack-900">
            Sign In</button>
            
        </form>
    );
}

export default LoginForm;