import {BiShow, BiHide} from 'react-icons/bi'; 
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../../../Middleware/Auth';

export default function UpdatePass() {
    const token = useSelector(state=>state.token.value)
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setConfirm] = useState(false);

    const { register, handleSubmit,  formState: { errors } } = useForm();
    function submitHandler(data, event){
        event.preventDefault();
        console.log(data);
        changePassword({dispatch, password: data.password, newPassword:data.newPassword, token})
    }

    return (
        <form  onSubmit={handleSubmit(submitHandler)}
        className="flex p-6 flex-col justify-center gap-5 self-stretch rounded-lg border-[1px]
                    border-richblack-700 bg-richblack-800">

            <p className="text-lg font-semibold text-richblack-5">
                Password
            </p>

            <div className="flex gap-6 self-stretch">
                <label className="flex flex-col gap-[0.375rem] self-stretch ">
                    <p className="text-sm text-richblack-5 font-normal">Current Password&nbsp;<sup className="text-pink-200">*</sup></p>
                    <div className="flex relative self-stretch rounded-lg bg-richblack-700 gap-2 shadow-input">
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter Password"

                            className="w-full flex gap-[0.75rem] p-[0.75rem] items-center self-stretch 
                                    bg-richblack-700 autofill:text-richblack-200 autofill:text-base autofill:font-medium
                                    text-richblack-5 shadow-input outline-none rounded-l-lg"
                        {...register("password", {required: true})}/>
                        {errors.password?.type === 'required' && toast.error("Enter current Password")}
                        <span className="text-white w-fit px-4 flex justify-center items-center cursor-pointer"
                            onClick={() => { setShowPassword(!showPassword) }}>{showPassword ?

                                <BiHide /> : <BiShow />}</span>
                    </div>

                </label>

                <label className="flex flex-col gap-[0.375rem] self-stretch">
                    <p className="text-sm text-richblack-5 font-normal">New Password&nbsp;<sup className="text-pink-200">*</sup></p>
                    <div className="flex relative self-stretch rounded-lg bg-richblack-700 gap-2 shadow-input">
                        <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Enter new Password"

                            className="w-full flex gap-[0.75rem] p-[0.75rem] items-center self-stretch 
                                    bg-richblack-700 autofill:text-richblack-200 autofill:text-base autofill:font-medium
                                    text-richblack-5 shadow-input outline-none rounded-l-lg"
                        {...register("newPassword", {required: true})}
                        />
                        {errors.newPassword?.type === 'required' && toast.error("Enter new Password")}
                        <span className="text-white w-fit px-4 flex justify-center items-center cursor-pointer"
                            onClick={() => { setConfirm(!showConfirm) }}>{showConfirm ?

                                <BiHide /> : <BiShow />}</span>
                    </div>

                </label>
            </div>

            <button type='submit'
            className='self-end py-3 px-6 flex justify-center items-center gap-2 rounded-lg bg-yellow-50 
            shadow-signin text-richblack-900 font-medium'>
            Change</button>

        </form>
    )
}