import img1 from '../assets/Images/aboutus1.webp'
import img2 from '../assets/Images/aboutus2.webp'
import img3 from '../assets/Images/aboutus3.webp'
import img4 from '../assets/Images/FoundingStory.png'
import YellowBtn from '../Components/Homepage/YellowBtn'
import Footer from '../Components/Homepage/Footer'
import Form from '../Components/Comman/Form'

export default function About() {
    const stats = [{heading:"5K", body:"Active Students"},{heading:"10+", body:"Mentors"},{heading:"200+", body:"Courses"},
    {heading:"50+", body:"Awards"}]

    const cards = [{heading:"Curriculum Based on Industry Needs", body:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."},
     {heading:"Our Learning Methods", body:"The learning process uses the namely online and offline."},
     {heading:"Certification", body:"You will get a certificate that can be used as a certification during job hunting."}, 
     {heading:'Rating "Auto-grading"', body:"You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."}, 
     {heading:"Ready to Work", body:"Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."}]

   

    

    return (
        <div className="w-full">
            <section className="w-full pt-20 flex flex-col px-[7.5rem] items-center gap-[3.25rem] bg-richblack-800">

                {/*Upper part*/}
                <div className="gap-[2.375rem] flex flex-col self-stretch items-center max-w-[57.0625rem] mx-auto">
                    <div className="flex py-[0.375rem] px-[1.125rem] gap-[0.625rem] rounded-[6.25rem] text-richblack-200">
                        <p className="text-base font-medium">About us</p>
                    </div>
                    <div className="flex flex-col px-[3.25rem] items-center gap-4 text-center">
                        <h2 className="self-stretch text-4xl font-semibold text-richblack-5">
                            Driving Innovation in Online Education for a 
                            <span className="highlighted-text"> Brighter Future</span>
                        </h2>
                        <p className="text-base font-medium text-richblack-300">
                        Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                        </p>
                    </div>
                </div>

                {/*3 photos part*/}
                <div className="relative items-center justify-center">
                    {/*images part*/}
                    <div className="flex gap-6 self-stretch">
                        <img src={img1} className='flex-1 w-80 object-cover z-20' alt='aboutSection'/>
                        <img src={img2} className='flex-1 w-80 object-cover z-20' alt='aboutSection'/>
                        <img src={img3} className='flex-1 w-80 object-cover z-20' alt='aboutSection'/>

                    </div>
                    {/*ellipse*/}
                    <div className="w-[22.33938rem] h-[2.30469rem] absolute -top-1 ellipse3
                    rounded-[22.33938rem] opacity-75 blur-xl left-0 right-0 mx-auto"></div>
                </div>
            </section>

            <section className='w-full bg-richblack-900 -mt-[5.2rem] pt-[5.2rem] items-center'>
                {/*Frame 3210*/}
                <div className='w-full flex py-[5.625rem] px-[7.5rem] gap-[0.625rem] border-b border-richblack-700'>
                    <p className='text-richblack-100 text-4xl font-semibold leading-[3.25rem] text-center'>
                    We are passionate about revolutionizing the way we learn. Our innovative platform &nbsp;
                     <span className='highlighted-text'>combines technology</span>
                     , &nbsp;
                     <span className='highlighted-text1'>expertise</span>
                     , and community to create an &nbsp;
                     <span className='highlighted-text2'>unparalleled educational experience.</span>
                    </p>
                </div>

                {/*frame 39*/}
                <div className='flex items-center justify-center gap-[6.125rem] py-[5.625rem] px-[7.5rem]'>
                    {/*text part*/}
                    <div className='flex flex-col gap-6 max-w-[30.375rem]'>
                        <h3 className='text-4xl font-semibold highlighted-text3 leading-[2.75rem]'>Our Founding Story</h3>
                        <div className='text-richblack-300 text-base font-medium flex flex-col gap-4'>
                            <p>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                            </p>

                            <p>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                            </p>
                        </div>
                    </div>
                    {/*image part*/}
                    <div className='relative flex flex-col max-w-[33.375rem] p-8 gap-[0.125rem] object-cover '>
                        <img src={img4} className='w-full z-10' alt='founding story'/>
                        <div className='w-[23.30931rem] h-[16.06588rem] absolute rounded-[23.30931rem] opacity-20 blur-xl ellipse4
                        top-[-0.3125rem] left-[-0.2rem]'></div>
                    </div>
                </div>

                {/*Vision and mission*/}
                <div className='flex justify-center items-start gap-[6.125rem] py-[5.625rem] px-[7.5rem] '>
                <div className='flex flex-col max-w-[30.375rem] gap-6'>
                    <h3 className='text-4xl font-semibold highlighted-text1'>
                        Our Vision
                    </h3>
                    <p className='text-richblack-300 font-medium text-base'>
                        With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                    </p>
                </div>

                <div className='flex flex-col max-w-[30.375rem] gap-6'>
                    <h3 className='text-4xl font-semibold highlighted-text'>
                        Our Mission
                    </h3>
                    <p className='text-richblack-300 font-medium text-base'>
                         our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                    </p>
                </div>
            </div>
            </section>

            <section className='flex gap-[0.625rem] py-[5.625rem] px-[7.5rem] w-full border-b border-richblack-700 bg-richblack-800'>
                {
                    stats.map((stat,index)=>{
                        return (
                            <div key={index} className='flex-1 flex flex-col justify-center gap-3 items-center'>
                                <h3 className='text-richblack-5 text-center text-3xl font-bold'>{stat.heading}</h3>
                                <p className='text-richblack-500 text-center text-base font-semibold'>{stat.body}</p>
                            </div>
                            )
                    })
                }
            </section>

            <section className=' py-[5.625rem] px-[7.5rem] grid grid-cols-4'>
                
                {/*Rectangle box*/}
                <div className='max-w-[34.9375rem] mr-[3.25rem] flex flex-col gap-3 col-span-2'>
                    
                    <h3 className='text-richblack-5 text-4xl font-semibold'>
                    World-Class Learning for <span className='highlighted-text'>Anyone, Anywhere</span>
                    </h3>

                    <p className='text-richblack-300 text-base font-medium'>
                    Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
                    </p>
                    
                    <div className='pt-9 flex self-stretch gap-6'>
                        <YellowBtn ptr='/signup' text='Learn More'/>
                    </div>

                </div>

                {
                    cards.map((card,index)=>{
                        return (
                            <div className={`flex min-h-[18.375rem] p-8 flex-col items-center gap-8 ${index%2===0?'bg-richblack-700':
                            'bg-richblack-800'} max-w-[18.40625rem]`}>
                                <h2 className='text-lg font-semibold text-richblack-5'>{card.heading}</h2>
                                <p className='self-stretch text-richblack-100 text-sm'>{card.body}</p>
                            </div>
                        )
                    })
                }
                
            </section>
            
            <section className='flex flex-col items-center justify-center pt-[5.625rem] px-[26.25rem] gap-8'>
                <div className='gap-3 flex flex-col text-center w-full items-center'>
                    <h3 className='text-richblack-5 text-4xl font-semibold'>
                        Get in Touch
                    </h3>
                    <p className='text-base font-medium text-richblack-300'>
                    We’d love to here for you, Please fill out this form.
                    </p>
                </div>

                <Form/>
            </section>

            <Footer/>
        </div>
    )
}