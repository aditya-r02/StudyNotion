import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
// import {FcGoogle} from 'react-icons/fc'

function Template(props){
    
    return (
        <div className=" w-full  flex mt-[4.12rem] justify-center gap-[7.5rem] bg-richblack-900">
            {/* leftside */}
            <div className="flex flex-col gap-[2.25rem] p-8  max-w-[27.75rem]">
                <div className="flex flex-col gap-[0.75rem]">
                    <h2 className="text-3xl font-semibold text-richblack-5">{props.heading}</h2>
                    <p className="text-lg text-richblack-100">
                        {props.desc1}
                        <span className="text-blue-100 text-base font-bold font-edu-sa">{props.desc2}</span>
                    </p>
                </div>

                {
                    (props.formType==='login')?<LoginForm updateLog={props.updateLog}/>:

                    <SignupForm updateLog={props.updateLog}/>
                }

                {/* <div className="flex items-center text-slate-700">
                    <div className="w-full h-[1px] bg-white"></div>
                    <span className="mx-1 text-sm">OR</span>
                    <div className="w-full h-[1px] bg-slate-700"></div>
                </div>

                <button type="button" className="flex mt-2 items-center text-gray-200 w-full justify-center
                border border-slate-700 rounded-md py-1"
                ><FcGoogle/> &nbsp;Sign in with Google</button> */}
            </div>

            {/*Rightside*/}
            <div className="relative  w-[34.875rem] z-0">
                <img className="w-full object-cover z-10" src={props.image} alt ='sleep' loading="lazy"/>
                <img className="w-full object-cover absolute top-3 left-3 -z-10" src={props.frame} alt="frame" loading="lazy"/>
            </div>
        </div>
    );
}

export default Template;