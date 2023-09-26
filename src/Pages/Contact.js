import {HiChatBubbleLeftRight} from 'react-icons/hi2'
import {BsGlobeEuropeAfrica} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'
import Form from '../Components/Comman/Form'
import Footer from '../Components/Homepage/Footer'

export default function Contact(){

    const data = [{heading:"Chat on us", para1:"Our friendly team is here to help.", para2:"@mail address"},
    {heading:"Visit us", para1:"Come and say hello at our office HQ.", para2:"Here is the location/ address"},
    {heading:"Call us", para1:"Mon - Fri From 8am to 5pm", para2:"+123 456 7890"},]

    return (
        <div className="w-full">
            <section className="flex py-[5.625rem] px-[7.5rem] gap-[3.25rem] justify-center">
                {/*Left section*/}
                <div className="flex max-w-[28.125rem] p-6 flex-col gap-6 rounded-xl bg-richblack-800
                 text-richblack-200 h-fit ">
                    
                    {
                        data.map((element, index)=>{
                            return (
                                <div key={index} className="flex self-stretch p-3 gap-[0.5625rem] ">
                                    <div className=' w-6 h-6 text-2xl text-richblack-100'>
                                        {index===0 && <HiChatBubbleLeftRight/>}
                                        {index===1 && <BsGlobeEuropeAfrica/>}
                                        {index===2 && <MdCall/>}
                                    </div>
                                    <div className='gap-[0.12rem] flex flex-col'>
                                        <h3 className='text-richblack-5 text-lg font-semibold'>
                                            {element.heading}
                                        </h3>
                                        <p className='text-sm font-medium'>
                                        {element.para1}
                                        </p>
                                        <p className='text-sm font-semibold'>
                                           {element.para2}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                {/*right section*/}
                <div className='flex flex-col p-[3.25rem] justify-center items-start gap-8'>
                    <div className='gap-3 flex flex-col max-w-[37.5rem]'>
                        <h3 className='text-richblack-5 text-4xl font-semibold'>
                        Got a Idea? We’ve got the skills. Let’s team up
                        </h3>

                        <p className='text-richblack-300 font-medium text-base'>
                        Tall us more about yourself and what you’re got in mind.
                        </p>
                    </div>

                    <Form/>
                </div>

            </section>


            <Footer/>
        </div>
    )
}