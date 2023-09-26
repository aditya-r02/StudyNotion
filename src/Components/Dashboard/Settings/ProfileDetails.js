import { useForm } from 'react-hook-form'
import CountryCodes from '../../../data/countrycode.json'
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateAdditionalDetails } from '../../../Middleware/User';

export default function ProfileDetails() {
    const userDetails = useSelector(state => state.user.userDetails)
    const token = useSelector(state=>state.token.value)
    //console.log(userDetails)

    const dispatch = useDispatch();
    //console.log(userDetails)

    async function submitHandler(data, event) {
        event.preventDefault();
        //console.log("hello")
        //console.log(data)
        updateAdditionalDetails({dispatch, token, data});
    }

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        setValue("fullName", userDetails.first_name + " " + userDetails.last_name)
        if (userDetails.additional_details.date_of_birth) {
            const date1 = userDetails.additional_details.date_of_birth
            setValue("date_of_birth", date1)
        }
        if (userDetails.additional_details.gender) {
            setValue("gender", userDetails.additional_details.gender)
        }

        if (userDetails.additional_details.phone_no) {
            setValue("phone_no", userDetails.additional_details.phone_no)
            //setValue("phone_no", userDetails.additional_details.phone_no.split(" ").at(0))
        }
        if (userDetails.additional_details.country){
            setValue("country", userDetails.additional_details.country)
        }
        if (userDetails.additional_details.about) {
            setValue("about", userDetails.additional_details.about)
        }


    })


    return (
        <form className="flex p-6 flex-col justify-center gap-5 self-stretch rounded-lg border-[1px]
                    border-richblack-700 bg-richblack-800"
            onSubmit={handleSubmit(submitHandler)}>

            <p className="text-lg font-semibold text-richblack-5">
                Profile Information
            </p>

            {/*Name and profession*/}
            <div className="grid grid-cols-2 gap-6 self-stretch">
                {/*Name*/}
                <label className="flex flex-col gap-[0.375rem]">
                    <p className="text-sm text-richblack-5 ">
                        Display Name
                    </p>

                    <input type="text"
                        // defaultValue={userDetails.first_name+" "+userDetails.last_name}
                        className="flex gap-3 items-center p-3 rounded-lg bg-richblack-700
                                    shadow-input text-richblack-200 outline-none"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName?.CountryCodes.type === 'required' && toast.error("Name cannot be empty")}

                    <p className="text-xs text-richblack-400">
                        Name entered above will be used for all issued certifies.
                    </p>

                </label>

                {/*Profession*/}
                <label className="flex flex-col gap-[0.375rem]">
                    <p className="text-sm text-richblack-5">
                        Profession
                    </p>

                    <select className="flex gap-3 items-center p-3 rounded-lg bg-richblack-700
                                    shadow-input text-richblack-200 outline-none"
                        {...register("role")}>
                        <option value='Developer' className="text-richblack-200">Developer</option>
                        <option value='Student' className="text-richblack-200">Student</option>
                        <option value='Software Engineer' className="text-richblack-200">
                            Software Engineer</option>
                    </select>

                </label>
            </div>

            {/*DOB and Gender*/}
            <div className="grid grid-cols-2 gap-6 self-stretch">
                <label className="flex flex-col gap-[0.375rem] self-stretch">
                    <p className="text-sm text-richblack-5">
                        Date of Birth
                    </p>

                    <input type="date"
                        className="flex items-center p-3 gap-3 self-stretch rounded-lg bg-richblack-700
                                shadow-input text-medium text-richblack-200 "
                        {...register("date_of_birth")}
                    />
                </label>

                <label className="flex flex-col gap-[0.375rem] self-stretch">
                    <p className="text-sm text-richblack-5">
                        Gender
                    </p>

                    <div className="grid grid-cols-3 p-3 gap-3 items-center rounded-lg bg-richblack-700
                                 shadow-input   text-richblack-200 self-stretch">
                        
                        <label className='flex gap-3 items-center'>
                            <input type="radio" value='Male'  {...register("gender")}
                            className='inputBtn peer'
                            
                             />
                             <p className='peer-checked:text-richblack-5'>Male</p>
                        </label>

                        <label className='flex gap-3 items-center'>
                            <input type="radio" value='Female'  {...register("gender")}
                            className='inputBtn peer'
                            
                             />
                             <p className='peer-checked:text-richblack-5'>Female</p>
                        </label>

                        <label className='flex gap-3 items-center'>
                            <input type="radio" value='Other'  {...register("gender")}
                            className='inputBtn peer'
                            
                             />
                             <p className='peer-checked:text-richblack-5'>Other</p>
                        </label>
                        

                    </div>
                </label>
            </div>

            {/*Phone Number and about*/}
            <div className="grid grid-cols-2 gap-6">
                <label className='flex flex-col gap-[0.375rem] '>
                    <p className='text-richblack-5 text-sm'>Phone Number</p>

                    <div className='gap-5 grid grid-cols-8 w-full'>
                        <select className='p-3 col-span-3 flex items-center gap-3 rounded-lg bg-richblack-700
                                    shadow-input text-base font-medium text-richblack-200 outline-none'
                            {...register("country", { required: true })}>
                            {
                                CountryCodes.map((country, index) => {
                                    return (
                                        <option key={index} value={country.code}
                                            className='bg-richblack-900 text-richblack-100'
                                        >{country.code}</option>
                                    )
                                })
                            }
                        </select>
                        <input className='col-span-5 flex p-3 gap-3 items-center self-stretch text-base font-medium text-richblack-200
                                    placeholder:text-richblack-200 bg-richblack-700 rounded-lg outline-none shadow-input
                                    '
                            placeholder='Enter Phone Number' type='number'
                            {...register("phone_no", {  maxLength: 10, minLength: 8 })}
                        />

                    </div>
                    {errors.phoneNo && <p role='alert' className='text-pink-500'>Enter a valid phone number</p>}

                </label>

                <label className="flex flex-col gap-[0.375rem] self-stretch">
                    <p className="text-sm text-richblack-5">
                        About
                    </p>

                    <textarea rows={1}
                        className="p-3 gap-3 flex items-center self-stretch rounded-lg bg-richblack-700
                                shadow-input font-medium text-richblack-200 outline-none "
                        placeholder="Enter Bio details" {...register("about")}
                    />

                </label>

            </div>

            <button type="submit"
                className="flex py-3 px-6 justify-center items-center gap-2 rounded-lg bg-yellow-50 
                        shadow-signin text-richblack-900 font-semibold w-fit self-end">
                Save
            </button>


        </form>
    )
}