import {BiEdit} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MyProfile(){
    const {first_name, last_name, email,  image} = useSelector(state=>state.user.userDetails);
    const {phone_no} = useSelector(state=>state.user.userDetails.additional_details)
    //console.log(first_name, last_name, email, phone_no)

    return (
        <div className="w-full h-full flex flex-col min-h-[calc(100vh-3.8rem)]">
            
            {/*upper  section*/}
            <div className="w-full py-6 pr-[7.5rem] pl-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-3">
                    {/*home/dashboard/my Profile*/}
                    <div className="flex self-stretch gap-2 text-sm">
                        <Link to='/' className="text-richblack-300">Home</Link>
                        <span className="text-richblack-600">/</span>
                        <Link to='/dashboard/my-profile' className="text-richblack-300">Dashboard</Link>
                        <span className="text-richblack-600">/</span>
                        <Link to='/dashboard/my-profile' className="text-yellow-50">My Profile</Link>
                    </div>

                    {/*My Profile*/}
                    <p className="text-3xl font-medium text-richblack-5">
                        My Profile
                    </p>
                </div>
            </div>

            <div className="flex flex-col pt-8 pl-[6.38rem] gap-5 pr-[20.25rem]">
                {/*photo section*/}
                <div className="flex items-center self-stretch p-6 gap-5 rounded-lg border-[1px] border-richblack-700
                bg-richblack-800 w-full justify-between">
                    {/*photo, name, email*/}
                    <div className="flex items-center gap-6">
                        <div className="w-[4.875rem] h-[4.875rem] rounded-full overflow-hidden
                        flex items-center justify-center">
                            <img src={image} alt="profile" className='w-full h-full rounded-full '/>
                        </div>

                        <div className="flex flex-col gap-[0.125rem]">
                            <h5 className="text-lg font-semibold text-richblack-5">
                                {first_name+" "+last_name}
                            </h5>
                            <p className="text-sm text-richblack-300">
                                {email}
                            </p>
                        </div>
                    </div>

                    {/*Edit button*/}
                    <Link to='/dashboard/settings'
                    className='py-2 px-5 flex items-center gap-2 rounded-lg bg-yellow-50 shadow-signin 
                    text-richblack-900'>
                        <span className='w-[1.125rem] text-lg'>
                            <BiEdit/>
                        </span>
                        <span className='font-medium'>Edit</span>
                    </Link>
                </div>

                {/*Details section*/}
                <div className='flex flex-col p-6 justify-center items-center gap-5 self-stretch w-full bg-richblack-800
                rounded-lg border-[1px] border-richblack-700'>

                    <div className='flex items-center justify-between w-full'>
                        <p className='text-lg font-semibold text-richblack-5'>
                            Personal Details
                        </p>

                        {/*Edit button*/}
                        <Link to='/dashboard/settings'
                        className='py-2 px-5 flex items-center gap-2 rounded-lg bg-yellow-50 shadow-signin 
                        text-richblack-900'>
                            <span className='w-[1.125rem] text-lg'>
                                <BiEdit/>
                            </span>
                            <span className='font-medium'>Edit</span>
                        </Link>
                    </div>

                    <div className='grid grid-cols-2 w-full gap-x-[0.25rem] gap-y-[0.125rem] text-sm'>

                        <span className='text-richblack-600'>First Name</span>
                        <span className='text-richblack-600'>Last Name</span>
                        <span className='font-medium text-richblack-5'>{first_name}</span>
                        <span className='font-medium text-richblack-5'>{last_name}</span>

                    </div>

                    <div className='grid grid-cols-2 w-full gap-x-[0.25rem] gap-y-[0.125rem] text-sm'>

                        <span className='text-richblack-600'>Email</span>
                        <span className='text-richblack-600'>Phone Number</span>
                        <span className='font-medium text-richblack-5'>{email}</span>
                        <span className='font-medium text-richblack-5'>
                            {phone_no?phone_no: "NILL"}
                        </span>

                    </div>

                </div>

            </div>
        </div>  
    )
}