import {BsFillPeopleFill} from 'react-icons/bs'
import {MdPlayLesson} from 'react-icons/md'

export default function Card({heading, para, level, lessons, selected, setCard}){

    return (
        <div className={`flex flex-col justify-between ${heading===selected?'bg-richblack-5 shadow-card':'bg-richblack-800'}  w-[21.33rem]
        cursor-pointer` } onClick={()=>{setCard(heading)}}>
            {/*Upper part*/}
            <div className="pt-[2rem] pb-[3.25rem] px-[1.5rem] flex flex-col gap-[0.75rem] self-stretch">
                <h4 className={`text-xl font-semibold self-stretch ${selected===heading?'text-richblack-800':'text-richblack-25'}`}>

                    {heading}
                </h4>
                <p className={`${heading===selected?'text-richblack-500':'text-richblack-400'} text-base `}>{para}</p>
            </div>
            
            {/*lower part*/}
            <div className={`flex py-[1rem] px-[1.5rem] items-center gap-[1rem] self-stretch border-t 
             justify-between border-dashed ${heading===selected?'text-blue-500 border-richblack-50':'text-richblack-400 border-richblack-600'}`}>
                <div className="flex items-center">
                    <span className="w-[1.25rem] h-[1.25rem] object-contain">
                        <BsFillPeopleFill className='text-lg'/>
                    </span>
                    <span>&nbsp;{level}</span>
                </div>

                <div className="flex items-center">
                    <span className="w-[1.125rem] h-[1.125rem] object-cover">
                        <MdPlayLesson className='text-lg'/>
                    </span>

                    <span className="text-base font-medium">&nbsp;{lessons} Lessons</span>
                </div>
            </div>
        </div>
    );
}