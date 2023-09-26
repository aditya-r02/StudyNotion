import {useForm} from 'react-hook-form'
import CountryCodes from '../../data/countrycode.json'

export default function Form(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function submitHandler(data, event){
        event.preventDefault();
        console.log(data);
        console.log("hello")
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col p-8 gap-9 self-stretch max-w-[37.5rem]'>
                    <div className='flex flex-col gap-5 self-stretch'>
                        {/*First name and last name*/}
                        <div className='grid grid-cols-2 gap-5 self-stretch'>
                            <label className='flex flex-col gap-[0.375rem]'>
                                <p className='text-richblack-5 text-sm'>First Name</p>
                                <input className='flex p-3 gap-3 items-center  text-base font-medium text-richblack-50
                                placeholder:text-richblack-200 bg-richblack-800 rounded-lg outline-none shadow-input' 
                                placeholder='Enter first name' type='text'
                                {...register("firstName", {required:true})}
                                />
                                {errors.firstName?.type==='required' &&
                                <p role='alert' className='text-pink-500'>First Name is required</p>}
                            </label>

                            <label className='flex flex-col gap-[0.375rem]'>
                                <p className='text-richblack-5 text-sm'>Last Name</p>
                                <input className='flex p-3 gap-3 items-center  text-base font-medium text-richblack-50
                                placeholder:text-richblack-200 bg-richblack-800 rounded-lg outline-none shadow-input' 
                                placeholder='Enter last name' type='text'
                                {...register("firstName", {required:true})}
                                />
                                {errors.lastName?.type==='required' &&
                                <p role='alert' className='text-pink-500'>Last Name is required</p>}
                            </label>
                        </div>

                        {/*Email*/}
                        <label className='flex flex-col gap-[0.375rem] '>
                            <p className='text-richblack-5 text-sm'>Email</p>
                            <input className='flex p-3 gap-3 items-center self-stretch text-base font-medium text-richblack-50
                            placeholder:text-richblack-200 bg-richblack-800 rounded-lg outline-none shadow-input' 
                            placeholder='Enter Email address' type='email'
                            {...register("email", {required:true})}
                                />
                            {errors.email?.type==='required' &&
                                <p role='alert' className='text-pink-500'>Email is required</p>}
                        </label>

                        {/*Phone number*/}
                        <label className='flex flex-col gap-[0.375rem] '>
                            <p className='text-richblack-5 text-sm'>Phone Number</p>

                            <div className='gap-5 grid grid-cols-8 w-full'>
                                <select className='p-3 col-span-2 flex items-center gap-3 rounded-lg bg-richblack-800
                                shadow-input text-base font-medium text-richblack-200 outline-none'
                                {...register("country", {required:true})}>
                                    {
                                        CountryCodes.map((country, index)=>{
                                            return (
                                                <option key={index} value={country.country}
                                                className='bg-richblack-900 text-richblack-100'
                                                >{country.code}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input className='col-span-6 flex p-3 gap-3 items-center self-stretch text-base font-medium text-richblack-50
                                placeholder:text-richblack-200 bg-richblack-800 rounded-lg outline-none shadow-input
                                ' 
                                placeholder='Enter Phone Number' type='number'
                                {...register("phoneNo", {required:true, maxLength:10, minLength:8})}
                                    />
                                
                            </div>
                            {errors.phoneNo && <p role='alert' className='text-pink-500'>Enter a valid phone number</p>}
                            
                        </label>
                    </div>

                    {/*Text area*/}
                    <label className='flex flex-col gap-[0.375rem] '>
                        <p className='text-richblack-5 text-sm'>Message</p>
                        <textarea className='flex p-3 gap-3 items-center self-stretch text-base font-medium text-richblack-50
                        placeholder:text-richblack-200 bg-richblack-800 rounded-lg outline-none shadow-input' 
                        placeholder='Enter message' type='text' rows={5}
                            {...register("message", {required:true})}
                                />
                    </label>

                    <button type='submit' className='self-stretch bg-yellow-50 p-3 justify-center items-center gap-2 rounded-lg
                    shadow-signin text-richblack-900 text-base font-medium'>
                    Send Message
                    </button>
                </form>
    )
}