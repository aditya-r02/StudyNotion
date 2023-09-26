import { useRef, useState, useEffect } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {TbFileCheck} from 'react-icons/tb'
import {MdDelete} from 'react-icons/md'

export default function Card({data}){
    const help = {width:`${data.progress}%`}

    const ptr = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        let handler = (e) =>{
            if (!ptr.current.contains(e.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)

        return ()=>{
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div className="flex border-b border-richblack-700 w-fit">
            {/*Icon and title*/}
            <div className="w-[23rem] flex gap-5 self-stretch items-center p-4">
                <div className="">
                    <img src={data.image} alt="courseIcon"
                        className="w-[3.25rem] h-[3.25rem] object-contain rounded-sm"
                    />
                </div>

                <div className="flex flex-col gap-[0.125rem] ">
                    <h3 className="text-base font-medium text-richblack-5">
                        {data.heading}
                    </h3>
                    <p className="text-richblack-300">
                        {data.description}
                    </p>
                </div>
            </div>

            {/*Duration*/}
            <div className="w-[12rem] p-4 flex items-center ">
                <p className="text-richblack-50 font-medium">
                    {data.duration}
                </p>
            </div>

            {/*Progress*/}
            <div className="w-[12rem] flex  justify-center flex-col gap-1 p-4">
                <p className="text-xs font-semibold text-richblack-50">
                    {
                        data.progress<100?`Progress ${data.progress}%`:'Completed'
                    }
                </p>

                <div className="w-full h-2 rounded-lg bg-richblack-700">
                    <div className={`${data.progress<100?'bg-blue-100':'bg-caribbeangreen-100'} h-full rounded-lg`}
                    style={help}></div>
                </div>
            </div>

            {/*Colon*/}
            <div className='w-[7rem] flex justify-center items-center p-4 relative'>
                <div className='text-2xl relative cursor-pointer text-richblack-200'onClick={()=>{setIsOpen(!isOpen)}}>
                    <BsThreeDotsVertical/>
                </div>

                <div className={`w-[12.9375rem] flex flex-col p-3 gap-3 rounded-lg border-[1px] border-richblack-500 bg-richblack-600
                text-richblack-25 absolute right-8 top-14 ${!isOpen?'hidden opacity-0':''}
                transition-all duration-1000 ease-in`} ref={ptr}>
                    <div className='flex gap-3 py-1 items-center cursor-pointer'>
                        <span className='text-xl'><TbFileCheck/></span>
                        <p className='text-richblack-5 font-semibold'>Mark as Completed</p>
                    </div>

                    <div className='flex gap-3 py-1 items-center cursor-pointer'>
                        <span className='text-xl'><MdDelete/></span>
                        <p className='text-richblack-5 font-semibold'>Remove</p>
                    </div>
                </div>
            </div>
        </div>
    )
}