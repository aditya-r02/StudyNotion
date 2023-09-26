import { Link } from "react-router-dom"
import Cards from "./Cards"

export default function Wishlist(){

    return (
        <div className="flex flex-col h-[calc(100vh-3.8rem)] grow pr-6 overflow-y-scroll">
            {/*upper  section*/}
            <div className="w-full py-6 pr-[7.5rem] pl-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-3">
                    {/*home/dashboard/my Profile*/}
                    <div className="flex self-stretch gap-2 text-sm">
                        <Link to='/' className="text-richblack-300">Home</Link>
                        <span className="text-richblack-600">/</span>
                        <Link to='/dashboard/my-profile' className="text-richblack-300">Dashboard</Link>
                        <span className="text-richblack-600">/</span>
                        <Link to='/dashboard/wishlist' className="text-yellow-50">Wishlist</Link>
                    </div>

                    {/*My Profile*/}
                    <p className="text-3xl font-medium text-richblack-5">
                        My Wishlist
                    </p>
                </div>
            </div>

            <div className=" pl-6 w-full ">
                <p className="text-richblack-400 font-semibold border-b-[1px] border-richblack-700 w-full">
                    3 Courses in Wishlist
                </p>
            </div>

            <div className="flex gap-[1.44rem]">
                <Cards/>

                <div className="flex flex-col gap-4 p-6 rounded-lg border-[1px] border-richblack-700 bg-richblack-800 
                h-fit mt-4 min-w-[15rem]">
                    <div className="flex flex-col gap-1 self-stretch">
                        <span className="text-sm font-semibold text-richblack-200">
                            Total:
                        </span>

                        <span className="text-2xl font-semibold text-yellow-50">
                            Rs. 3900
                        </span>
                    </div>

                    <button className="w-full py-3 px-6 justify-center items-center gap-2 self-stretch rounded-lg bg-yellow-50
                    shadow-button2 text-base font-medium text-richblack-900">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}