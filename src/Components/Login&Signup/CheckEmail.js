import { Link } from "react-router-dom"
import {BsArrowLeft} from 'react-icons/bs'
import forgotPassword from "../../Middleware/Auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/slices/LoaderSlice";
import Loader from "../../Components/Comman/Loader";


export default function CheckEmail(){
    const navigate = useNavigate();

    const location = useLocation();
    //console.log(location)
    const email = location.state.email

    const dispatch = useDispatch();
    const loading = useSelector((state)=> state.loader.value)

    function submitHandler(event){
        event.preventDefault();
        forgotPassword({email, navigate, dispatch, change});
    }

    return (
        <div className="w-full flex h-[70vh] flex-col items-center">
            {
                loading ?
                (<Loader/>):
                
                    <form className="flex flex-col p-8 gap-9 w-[31.75rem]" onSubmit={submitHandler}>
                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-semibold text-richblack-5">Check email</h3>
                    <p className="text-lg text-richblack-100">
                        We have sent the reset email to {email}
                    </p>
                </div>


                <div className="w-full">
                    <button type="submit" className="flex items-center justify-center gap-2 p-3 self-stretch rounded-lg
                    bg-yellow-50 text-richblack-900 shadow-signin font-semibold w-full">
                        Resend email
                    </button>

                    <div className="flex p-3 items-center gap-2 rounded-lg text-richblack-5">
                        <span><BsArrowLeft/></span>
                        <Link to='/login'>Back to login</Link>
                    </div>
                </div>

            </form>
                
            }
        </div>
    )
}