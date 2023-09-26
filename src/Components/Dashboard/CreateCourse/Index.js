import { Link } from "react-router-dom";
import {FaLessThan} from 'react-icons/fa';
import {BsFillLightningChargeFill} from 'react-icons/bs'
import { useSelector } from "react-redux";
import Step1 from "./Step1";


export default function CreateCourse(){
    const step = useSelector(state=>state.courseBuilder.step)
    
    const steps = [
        {index:1, title:"Course Information"}, {index:2, title:"Course Builder"}, {index:3, title:"Publish"}
    ]

    const tips = ["Set the Course Price option or make it free.","Standard size for the course thumbnail is 1024x576.","Video section controls the course overview video.",
"Course Builder is where you create & organize a course.", "Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
"Information from the Additional Data section shows up on the course single page.", "Make Announcements to notify any important",
"Notes to all enrolled students at once."]
    return (
        <div className="overflow-y-scroll h-[calc(100vh-3.8rem)] w-full flex">
            <div className="flex flex-col">
                <div className="py-6 pl-6 flex gap-6 w-[43rem]">
                    <Link to='/dashboard/my-profile'>
                        <div className="flex gap-1 text-richblack-300 text-base items-center">
                            <span className="text-sm">
                                <FaLessThan/>
                            </span>
                            <p>
                                Back to Dashboard
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-[0.125rem] w-[43rem] relative z-0">
                    {
                        steps.map((element)=>{
                            return (
                                <div key={element.index} className="flex flex-col items-center gap-2 z-10">
                                    <div className={`w-[2.375rem] h-[2.375rem] rounded-full flex items-center justify-center
                                    border-[1px] text-lg
                                    ${element.index===step?'border-yellow-50 bg-yellow-900 text-yellow-50 font-semibold':
                                    'border-richblack-700 bg-richblack-800 text-richblack-300'}`}>
                                        {element.index}
                                    </div>

                                    <div className={`text-sm ${element.index===step?'text-richblack-5':'text-richblack-500'}`}>
                                        {element.title}
                                    </div>
                                </div>
                            )
                        })
                    }

                    
                    <hr
                        className="border-t-2 border-dashed border-t-richblack-600 w-[30rem] absolute left-0 right-0 mx-auto
                        top-[1.15rem] z-0"
                    />
                    
                </div>

                {
                    step===1 &&
                    <Step1/>
                }
            </div>

            <div className="flex max-w-[24rem] p-6 gap-[1.875rem] rounded-lg border-[1px] border-richblack-700 bg-richblack-800
            h-fit mt-6 flex-col">

                <div className="flex text-lg font-semibold text-richblack-5">
                    <p className="flex items-center gap-[0.125rem]">
                        <span className=" text-yellow-5">
                            <BsFillLightningChargeFill/>
                        </span>
                        <span>
                            Course Upload Tips
                        </span>
                    </p>
                </div>

                <ul className="flex flex-col gap-[0.6875rem] text-richblack-5 text-xs " >
                    
                    {
                        tips.map((element,index)=>{
                            return (
                                <li key={index}>
                                    {element}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}