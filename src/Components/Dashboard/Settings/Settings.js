import { useNavigate } from "react-router-dom"
import UpdateProfile from "./UpdateProfile";
import UpdatePass from "./UpdatePass";
import DeleteAccount from "./DeleteAccount";
import ProfileDetails from "./ProfileDetails";


export default function Settings(){
   

    


    const navigate = useNavigate();
    

    return (
        <div className="flex flex-col gap-8 overflow-y-scroll h-[calc(100vh-3.8rem)]">

            <div className="flex pt-6  pl-6 pr-[7.5rem] gap-6 ">

                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="flex gap-1 text-sm text-richblack-300 cursor-pointer" 
                    onClick={()=>{navigate(-1)}}>
                        <span>{"<"}</span>
                        <span>Back</span>
                    </div>

                    <p className="text-3xl font-medium text-richblack-5">
                        Edit Profile
                    </p>

                </div>

            </div>

            <div className="flex flex-col gap-11 pl-[6.36rem] pr-[20.25rem] pb-4">
                {/*Profile update && additional details*/}
                <div className="flex flex-col gap-5 self-stretch ">
                    {/*Profile pic*/}
                    <UpdateProfile/>

                    {/*details*/}
                    <ProfileDetails/>

                    {/*change password*/}
                    <UpdatePass/>
                </div>

                {/*Delete Account*/}
                <div>
                    <DeleteAccount/>

                </div>
            </div>

        </div>
    )
}