import { Link } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { instance, categoryUrl } from '../../axios/Instance';
import { useEffect, useRef, useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import { useSelector } from 'react-redux';
import {BsCart3} from 'react-icons/bs'
import {VscDashboard, VscSignOut} from 'react-icons/vsc'
import { logoutLink } from '../../Middleware/Auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {HiMiniArrowUpRight} from 'react-icons/hi2'


export default function Navbar(){
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const dashboardIcon = useRef();

    const location = useLocation();

    const [category, setCategory] = useState([])

    const token = useSelector((state)=>state.token.value)

    const userDetails = useSelector((state)=>state.user.userDetails);
    //console.log(userDetails)
    const imageURL = userDetails? userDetails.image:null; 
    //console.log(imageURL)

    const url = location.pathname;

    const fetchCategoryDetails = async()=>{
        try{
            const result = await instance.get(categoryUrl);
            setCategory(result.data.data);
            //console.log(result.data.data);
        }catch(error){
            console.log("error");
        }
    }

    useEffect(()=>{
        fetchCategoryDetails();
    }, [])

    useEffect(()=>{
        let handler = (e) =>{
            if (!dashboardIcon.current.contains(e.target)){
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)

        return ()=>{
            document.removeEventListener('mousedown', handler);
        }
    })


    return (
        <div className="flex py-[0.75rem] px-[7.5rem] gap-[2rem] items-center border-b-[1px] border-richblack-700 
        ">
            <Link to='/' className="self-stretch flex items-center ">
                <img src={logo} alt='logo' className='h-9 object-contain '/>
            </Link>

            <div className='flex items-center justify-center text-richblack-100 h-fit w-full'>
                {
                    NavbarLinks.map((element,index)=>{
                        return (
                            <div key={index}>
                                {
                                    element.title ==='Catalog'?
                                    (
                                        <div key={index} className='relative flex items-center gap-[0.25rem] 
                                        py-[0.25rem] px-[0.75rem] z-10 group'>
                                            <Link to={element.path} className={`text-base font-semibold
                                                ${element.path===url?'text-yellow-50':''} flex items-center`}>
                                                {element.title}<IoIosArrowDown/>
                                            </Link>

                                            {
                                                category && category.length>0 &&
                                                <div className='absolute top-8 left-8 invisible group-hover:visible
                                                duration-150 z-40'>
                                                    <div className='w-[0.88388rem] h-[0.88388rem] rotate-45 rounded-[0.1875rem]
                                                    bg-yellow-50'>
                                                    </div>

                                                    <div className='flex flex-col w-[42.5rem] -mt-[0.6rem] -ml-3'>
                                                        <div className='flex p-8 gap-[0.625rem] self-stretch bg-yellow-50
                                                        rounded-tl-lg rounded-tr-lg'>
                                                            <div className='flex flex-col gap-1 w-[28.25rem]'>
                                                                <h3 className='tet-lg font-semibold text-yellow-800'>
                                                                Popular course topics
                                                                </h3>
                                                                <p className='text-sm font-medium text-yellow-400 '>
                                                                Explore free or paid courses in topics that interest you.
                                                                </p>
                                                            </div>

                                                            <Link to='/courses' className='py-1 items-center gap-2 border-b-[1px]
                                                            border-yellow-700 flex text-richblack-800 w-[9.625rem]'>
                                                                <span className='text-sm font-semibold'>
                                                                    Explore all Courses
                                                                </span>
                                                                <span className='font-semibold text-sm'>
                                                                    <HiMiniArrowUpRight/>
                                                                </span>
                                                            </Link>
                                                        </div>

                                                        <div className='grid grid-cols-3 py-4 px-6 gap-2 rounded-bl-lg rounded-br-lg bg-richblack-5'>
                                                            {
                                                                category.map((element, index)=>{
                                                                    return (<Link key={index} to={`/catalog/${element.name.toLowerCase().replace(" ","-")}`}
                                                                    className='py-1 px-2 gap-[0.625rem] text-richblack-700 hover:bg-richblack-100
                                                                    rounded-lg'>
                                                                        {element.name}
                                                                    </Link>)
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                    :
                                    (
                                        <div key={index} className='flex items-center gap-[0.25rem] py-[0.25rem] px-[0.75rem]'>
                                            <Link to={element.path} className={`text-base font-semibold
                                            ${element.path===url?'text-yellow-50':''}`}>
                                                {element.title}
                                            </Link>
                                        </div> 
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex gap-4 items-center'>
                {!token &&
                    <Link className='py-2 px-3 justify-center items-center flex gap-2 rounded-lg bg-richblack-800
                    border-[1px] border-richblack-700 text-richblack-100 font-medium'
                     to='/login'>Login</Link>
                }

                {
                    !token &&
                    <Link className='py-2 px-3 justify-center items-center flex gap-2 rounded-lg bg-richblack-800
                    border-[1px] border-richblack-700 text-richblack-100 font-medium'
                    to='/signup'>Signup</Link>
                }

                {
                    token && 
                    <Link to='/dashboard/wishlist' className='w-5 h-5 text-richblack-200 text-lg'>
                        <BsCart3/>
                    </Link>
                }

                {
                    token && 
                    <div className=' relative
                    cursor-pointer'
                    ref={dashboardIcon} onClick={()=>{setOpen(!isOpen)}}>

                        {
                            imageURL &&
                            <div className='w-[1.80106rem] h-[1.80106rem]  rounded-full overflow-hidden
                            object-contain'>
                                <img src={imageURL} alt='profile' className='h-full w-full rounded-full
                                 flex items-center justify-center'/>
                            </div>
                        }

                        <div className={`absolute flex flex-col bg-richblack-800 text-richblack-200 p-2 rounded-lg border
                        border-richblack-700 text-base gap-2  ${!isOpen?'invisible scale-0 -top-2 right-0':
                        'group-click:visible group-click:scale-100 right-0 top-8'}
                        duration-200`}>
                            <Link to='/dashboard/my-profile' className='flex items-center gap-1'>
                                <span className='text-lg'><VscDashboard/></span>
                                <span>Dashboard</span>
                            </Link>

                            <div className=' w-full border-[1px] border-richblack-700'></div>

                            <div className='flex items-center gap-1 cursor-pointer'
                            onClick={()=>{logoutLink({navigate, dispatch})}}>
                                <span className='text-lg'><VscSignOut/></span>
                                <span>Logout</span>
                            </div>

                        </div>
                    </div>
                }
            </div>

            
        </div>
    )
}

