import {RiDeleteBin6Line} from 'react-icons/ri'
import {BsFillStarFill} from 'react-icons/bs'


export default function Cards(){
    const data = [
        {heading:'The Complete Python Bootcamp From Zero to Hero in Python',
        name:"Amandeep Chhabra",
        rating:4,
        reviews: 450,
        total: 5,
        lessons: 10,
        level:"advanced",
        cost: 4999,
        image:"https://picsum.photos/200/300"},
        {heading:'The Complete C++ Bootcamp From Zero to Hero in Python',
        name:"Amandeep Chhabra",
        rating:2,
        reviews: 450,
        total: 5,
        lessons: 10,
        level:"amateur",
        cost: 4999, 
        image:"https://picsum.photos/300/200"},
        {heading:'The Complete C++ Bootcamp From Zero to Hero in Python',
        name:"Amandeep Chhabra",
        rating:2,
        reviews: 450,
        total: 5,
        lessons: 10,
        level:"amateur",
        cost: 4999, 
        image:"https://picsum.photos/300/200"}
    ]
    const value = [1,2,3,4,5]

    return (
        <div className="flex flex-col pl-6">
            {
                data.map((element, index)=>{
                    return (
                        <div className={`flex px-6 gap-5 ${(index===data.length-1)?'':'border-b-[1px] border-richblack-700'}
                         py-[2.06rem]`} key={index}>
                            <div className="flex">
                                <img src={element.image} alt="course"
                                    className="w-[11.5625rem] rounded-lg h-[9.25rem] object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-[0.5625rem] max-w-[20.4375rem]">
                                <h2 className="text-lg font-medium text-richblack-5">
                                    {element.heading}
                                </h2>
                                <p className="text-richblack-300">
                                    {element.name}
                                </p>

                                <div className="flex gap-2 items-center">
                                    <p className="text-base font-semibold text-yellow-100">
                                        {element.rating}
                                    </p>

                                    <div className="flex gap-[0.12rem]">
                                        {
                                            value.map((val)=>{
                                                return (
                                                    <div className={`${val<=element.rating?'text-yellow-100':'text-richblack-700'}`}>
                                                        <BsFillStarFill/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <p className="text-richblack-400">
                                        {element.reviews} reviews
                                    </p>
                                </div>

                                <div className="text-sm font-medium text-richblack-300 gap-4 flex">
                                    <span>
                                        {element.total} Courses
                                    </span>
                                    <span>
                                        {element.lessons} lessons
                                    </span>
                                    <span>
                                        {element.level} 
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex p-3 items-center gap-2 rounded-lg border-[1px] border-richblack-700
                                text-pink-200">
                                    <span className='text-lg font-medium'>
                                        <RiDeleteBin6Line/>
                                    </span>

                                    <span className='text-base font-medium'>
                                        Remove
                                    </span>
                                </div>

                                <p className='text-2xl font-semibold text-yellow-50'>
                                    Rs. {element.cost}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}