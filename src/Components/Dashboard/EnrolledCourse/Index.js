import { Link } from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {change} from '../../../redux/slices/LoaderSlice'
import { useEffect } from "react";
import Card from "./Card";

export default function EnrolledCourse(){
    const options = ['All', 'Pending', 'Completed']
    const [category, setCategory] = useState('All');

    
    const dispatch = useDispatch()

    function changeCategory(ptr){
        setCategory(ptr)
    }

    useEffect(()=>{
        
    })

    const data = [{
        image:"https://picsum.photos/200",
        heading:"The total Python",
        description:"Short description",
        duration: "2hr 30 min",
        progress: 30,
    },
    {
        image:"https://picsum.photos/200",
        heading:"The total Python",
        description:"Short description",
        duration: "1hr 30 min",
        progress: 100,
    }
    ]

    return (
        <div className=" h-full flex flex-col min-h-[calc(100vh-3.8rem)]">
            {/*upper  section*/}
            <div className="w-full py-6 pr-[7.5rem] pl-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-3">
                    {/*home/dashboard/my Profile*/}
                    <div className="flex self-stretch gap-2 text-sm">
                        <Link to='/' className="text-richblack-300">Home</Link>
                        <span className="text-richblack-600">/</span>
                        <Link to='/dashboard/my-profile' className="text-richblack-300">Dashboard</Link>
                        <span className="text-richblack-600">/</span>
                        <Link to='/dashboard/enrolled-courses' className="text-yellow-50">Enrolled Courses</Link>
                    </div>

                    {/*My Profile*/}
                    <p className="text-3xl font-medium text-richblack-5">
                        Enrolled Courses
                    </p>
                </div>
            </div>

            {/*Select Bar*/}
            <div className="flex gap-[0.3125rem] p-1 text-richblack-200 bg-richblack-800 rounded-[31.25rem] w-fit
            shadow-input ml-6 mt-4 mb-7">
                        {
                            options.map((ptr, index)=>{
                                return (<div className={`flex items-center text-sm cursor-pointer px-[1.125rem] py-[0.375rem] rounded-[6.25rem] ${ptr===category?'bg-richblack-900 text-richblack-5':'hover:text-richblack-100'}
                                 transition-all duration-150 select-none`} onClick={()=>{changeCategory(ptr)}}
                                 key={index} >{ptr}</div>)
                            })
                        }
            </div>

            <div className="flex flex-col mx-6  ">
                <div className=" text-richblack-50 bg-richblack-700 rounded-md
                text-sm font-medium flex items-center w-fit ">
                    <div className="w-[23rem] p-4">
                        Course Name
                    </div>
                    <div className="w-[12rem] p-4">
                        Duration
                    </div>
                    <div className="w-[12rem] p-4">
                        Progress
                    </div>
                    <div className="w-[7rem]">

                    </div>
                </div>

                {
                    data.map((element, index)=>{
                        return <Card key={index} data={element}/>
                    })
                }   
            </div>

            
        </div>
    )
}