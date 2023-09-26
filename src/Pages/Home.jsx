import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BsArrowRightShort} from 'react-icons/bs'
import Banner from "../assets/Images/banner.mp4"
import CodeBunch from "../Components/Homepage/CodeBunch";
import Footer from "../Components/Homepage/Footer";
import YellowBtn from "../Components/Homepage/YellowBtn";
import BlackBtn from '../Components/Homepage/BlackBtn'
import IconFrame from "../Components/Homepage/IconFrame";
import logo1 from '../assets/TimeLineLogo/Logo1.svg'
import logo2 from '../assets/TimeLineLogo/Logo2.svg'
import logo3 from '../assets/TimeLineLogo/Logo3.svg'
import logo4 from '../assets/TimeLineLogo/Logo4.svg'
import TimelineVideo from '../assets/Images/TimelineVideo.mp4'
import note1 from '../assets/Images/Know_your_progress.png'
import note2 from '../assets/Images/Compare_with_others.png'
import note3 from '../assets/Images/Plan_your_lessons.png'
import Instructor from '../assets/Images/Instructor.png'
// import Review from "../Components/Homepage/Review";
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "../Components/Homepage/Card";
import {HomePageExplore} from '../data/homepage-explore'


export default function Home(){
    const options = ['Free', 'New to coding', 'Most popular', 'Skills paths', 'Career paths']

    const [category, setCategory] = useState('Free');
    const [data, setData] = useState(HomePageExplore[0].courses);
    const [selectedCard, setSelectedCard] = useState(HomePageExplore[0].courses[0].heading);


    function changeCategory(ptr){
        //console.log(ptr);
        setCategory(ptr);
        const obj = HomePageExplore.filter((element)=>element.tag===ptr);
        //console.log(obj[0].courses);
        
        setData(obj[0].courses);
        setSelectedCard(obj[0].courses[0].heading);
    }

    return (
        <div className="pt-16 w-full flex flex-col items-center text-white font-inter mx-auto h-fit
        "> 

            {/* Section1*/}
            <div className="flex flex-col items-center gap-[2.375rem] font-medium text-base">

                <Link to={"/signup"}>
                    <div className="rounded-[31.25rem] bg-richblue-800 p-[0.25rem] flex gap-[0.3125rem] 
                    shadow-button transition-all duration-200 hover:scale-95 hover:bg-richblue-900 w-fit">
                        <div className="flex items-center py-[0.375rem] px-[1.125rem] gap-[0.625rem] rounded-[6.25rem]
                        text-base font-medium text-richblack-200 ">
                            <p>Become an Instructor</p>
                            <span>{<BsArrowRightShort/>}</span>
                        </div>
                    </div>
                </Link>

                <div className="flex flex-col items-center gap-[1rem] w-[57.0625rem]">

                    <h3 className="text-4xl font-semibold tracking-tight">
                        Empower Your Future with <span className="highlighted-text">Coding Skills</span>
                    </h3>

                    <p className="text-base  text-richblack-300">
                        With our online coding courses, you can learn at your own pace,
                        from anywhere in the world, and get access to a wealth of resources,
                        including hands-on projects, quizzes, and personalized feedback from instructors.
                    </p>

                </div>

                <div className="flex gap-[1.5rem] ">

                    <YellowBtn text="Learn More" ptr='/signup'/>

                    <BlackBtn text='Book a demo' ptr='/login'/>

                </div>
            </div>

            {/*Banner Video*/}
            <div className=" h-[32.1875rem] mt-[3.62rem] relative z-0 shadow-image mb-[1.25rem]">
                
                <video autoPlay loop muted className="w-full h-full z-10">
                    <source src={Banner}/>
                </video>

            </div>

            {/*Frame 38*/ }
            

            <CodeBunch 
            heading={<span>Unlock your <span className="highlighted-text">coding potential</span> with our online courses.</span>}
            para={'Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'}
            btn1={<span>Try it yourself <BsArrowRightShort className="inline"/></span>}
            btn2={'Learn More'}
            link1={'/signup'}
            link2={'/login'}
            isFirst={true}
            />

            <CodeBunch 
            heading={<span>Start <span className="highlighted-text">coding in seconds</span></span>}
            para={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
            btn1={<span>Continue Lesson <BsArrowRightShort className="inline"/></span>}
            btn2={'Learn More'}
            link1={'/signup'}
            link2={'/login'}
            isFirst={false}
            />

            {/*unlock the power of code*/}
            <div className="flex justify-center items-center py-[5.625rem] px-[7.5rem] g-[6.125rem] z-10">
                <div className="gap-[2.25rem] flex flex-col items-center self-stretch">
                    {/*Heading */}
                    <div className="flex flex-col text-center">
                        <h3 className=" text-4xl font-semibold self-stretch">Unlock the <span className="highlighted-text">Power of Code</span></h3>
                        <p className="self-stretch text-base text-richblack-300">Learn to Build Anything You Can Imagine</p>
                    </div>

                    {/*Select bar*/}
                    <div className="flex gap-6 text-richblack-400 bg-richblack-800 py-2 px-2 rounded-full">
                        {
                            options.map((ptr, index)=>{
                                return (<div className={`text-sm cursor-pointer px-2 py-1 rounded-full ${ptr===category?'bg-richblack-900 text-richblack-50':'hover:text-richblack-100'}
                                 transition-all duration-150 select-none`} onClick={()=>{changeCategory(ptr)}}
                                 key={index} >{ptr}</div>)
                            })
                        }
                    </div>

                    {/*Cards*/}
                    <div className="flex pt-[2rem] px-[3.25rem] gap-[2.25rem] self-stretch">
                        {
                            data && data.length>0 && data.map((obj, index)=>{
                                return <Card key={index} heading={obj.heading} para={obj.description} level={obj.level}
                                lessons={obj.lessionNumber} selected={selectedCard}
                                setCard={setSelectedCard}/>
                            })
                        }
                    </div>

                    {/*buttons*/}
                    <div className="flex items-center justify-center gap-[1.5rem] pt-[2rem]">
                        <YellowBtn ptr='/signup'
                        text={<>Explore full Catalog <BsArrowRightShort className="inline"/></>}/>

                        <BlackBtn ptr='/signup'
                        text={<>Learn More</>}/>
                    </div>
                </div>
            </div>

            {/* <div className="flex py-[2rem] px-[3.25rem] gap-[2.25rem] self-stretch">
                <Card heading='Learn CSS' para='This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques'
                level='Beginner' lessons={6} selected='Learn CSS'/>

                <Card heading='Learn CSS' para='This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques'
                level='Beginner' lessons={6}/>

                <Card heading='Learn CSS' para='This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques'
                level='Beginner' lessons={6}/>
            </div>
             */}

            {/* Section2*/}
            <div className="bg-pure-greys-5 w-full h-fit flex flex-col text-inter -mt-[17rem] z-0">

                {/*svg and 2 buttons*/}
                <div className="vector-bg h-[20rem] ">
                    
                </div>

                {/*Another Secton*/}
                <div className="py-[5.625rem] px-[7.5rem] flex flex-col items-center justify-center gap-[3.25rem]">

                    {/*upper section*/}
                    <div className="flex gap-[0.75rem] self-stretch">

                        <div className="flex-1 text-[2.25rem] font-semibold leading-[2.75rem] tracking-tight
                        text-richblack-900">
                            Get the skills you need for a <span className="highlighted-text">job that is in demand.</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-[0.75rem] ">
                            <p className="text-richblack-700 font-medium">
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </p>
                            
                            <div className="pt-[2.25rem] h-fit w-fit flex">
                                <YellowBtn 
                                ptr='/signup' text={<>Learn More</>}/>
                                
                            </div>
                        </div>

                    </div>

                    {/*lower section || Frame 50*/}
                    <div className="flex gap-[4.75rem] self-stretch items-center">

                        {/*Frame 49*/}
                        <div className="flex flex-col gap-[2rem] ">
                            <IconFrame src1={logo1} heading='Leadership' para='Fully committed to the success company'/>
                            <IconFrame src1={logo2} heading='Responsiblity' para='Students will always be our top priority'/>
                            <IconFrame src1={logo3} heading='Flexibility' para='The ability to switch is an important skills'/>
                            <IconFrame src1={logo4} heading='Solve the problem' para='Code your way to a solution'/>

                        </div>

                        {/*Frame51*/}
                        <div className="h-[34.0625rem] w-[44.625rem] shadow-homepage-video
                         relative">
                            <video autoPlay loop muted className="h-full z-10 object-cover">
                                <source src={TimelineVideo}/>
                            </video>

                            {/*Hanging box*/}
                            <div className="absolute p-[2.625rem] gap-[3.25rem] bg-caribbeangreen-700 flex
                            right-0 left-0 w-fit mx-auto -bottom-20">
                                <div className="flex gap-[1.5rem]">
                                    <div className="text-4xl font-bold text-white">10</div>
                                    <div className="text-sm font-medium text-caribbeangreen-300">YEARS<br/>EXPERIENCES</div>
                                </div>

                                <div className="w-[0.0625rem]  bg-caribbeangreen-500 self-stretch"></div>

                                <div className="flex gap-[1.5rem]">
                                    <div className="text-4xl font-bold text-white">250</div>
                                    <div className="text-sm font-medium text-caribbeangreen-300">TYPES OF<br/>COURSES</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*3 notes wala section*/}
                <div className="flex flex-col py-[5.625rem] px-[7.5rem] justify-center items-center gap-[3.25rem]">

                    {/*Upper part*/}
                    <div className="flex px-[13.75rem] flex-col items-center gap-[0.75rem] self-stretch">
                        <p className="text-richblack-900  text-4xl font-semibold">Your swiss knife 
                        for <span className="highlighted-text">learning any language
                        </span></p>

                        <p className="text-base text-richblack-700 text-center">
                            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                        </p>
                    </div>
                    {/**notes wala part || frame 84*/}
                    <div className="w-[68.90556rem] h-[29.31038rem] flex relative z-0">
                        <img src={note1} alt="know your progress"  className="absolute top-0 left-0 z-0
                        hover:z-40 hover:scale-105 transition-all duration-200 ease-in"/>
                        <img src={note2} alt="Compare with others" className="absolute -top-10 left-72 z-10
                        hover:z-40 hover:scale-105 transition-all duration-200 ease-in"/>
                        <img src={note3} alt='plan your lessons' className="absolute -top-8 -right-4 z-20
                        hover:z-40 hover:scale-105 transition-all duration-200 ease-in"/>
                    </div>
                    {/*button wala part*/}
                    <div className="flex justify-center pt-[2.25rem]">
                        <YellowBtn ptr='/signup' text='Learn More'/>
                    </div>
                </div>

            </div>

            {/* Section3*/}
            <div>

                {/*Become an instructor Section*/}
                <div className="flex justify-center items-center py-[5.625rem] px-[7.5rem] gap-[6.125rem] w-full">

                    {/*left part*/}
                    <div className="w-[38.0625rem] shadow-instructor">
                        <img src={Instructor} alt="Instructor" className="h-full object-cover"/>
                    </div>

                    {/*right part*/}
                    <div className="flex flex-col gap-[0.75rem]">
                        <h3 className="text-4xl font-semibold text-richblack-5">
                            Become an<br/><span className="highlighted-text">instructor</span>
                        </h3>

                        <p className="text-base text-richblack-300">
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                        </p>

                        <div className="pt-[3.25rem] flex gap-[1.5rem]">
                            <YellowBtn ptr='/signup' 
                            text={<>Start Teaching today <BsArrowRightShort className="inline"/></>}/>
                        </div>

                    </div>

                </div>

                {/*Review Section*/}
                {/* <div className="flex flex-col gap-[1.25rem] items-center py-[5rem] w-[80rem]">
                    <h3 className="text-4xl font-semibold text-richblack-5">
                        Reviews from other learners
                    </h3>


                   

                </div> */}

            </div>

            {/* Footer*/}
            <Footer/>
        </div>
    );
}