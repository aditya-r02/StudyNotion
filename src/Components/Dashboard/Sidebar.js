import { sidebarLinks } from '../../data/dashboard-links'
import Icon from './Icon'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";
import { logoutLink } from '../../Middleware/Auth';
import {VscSignOut} from 'react-icons/vsc'

export default function Sidebar() {
    const accountType = useSelector(state => state.user.userDetails.account_type)
    //console.log(accountType)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const data = [{
        id: 1,
        name: "Settings",
        path: "/dashboard/settings",
        type: "ALL",
        icon: "VscSettingsGear",
    },
    ]

    return (
        <div className="flex flex-col py-[1.875rem] gap-[0.625rem] min-w-[13.875rem]
        border-r-[1px] border-richblack-700 min-h-[calc(100vh-4rem)] h-full">

            <div className="flex flex-col">
                {
                    sidebarLinks.map((element) => {
                        if (element.type === 'ALL' || (accountType && element.type === accountType.toUpperCase())) {
                            //console.log(element)
                            return <Icon key={element.id} data={element} />
                        } else {
                            return null;
                        }
                    })
                }
            </div>

            {/*horizoontal line*/}
            <div className='flex items-center py-1 px-4 gap-3 self-stretch'>
                <div className='w-full h-[1px] bg-richblack-600'></div>
            </div>

            <div>
                {
                    data.map((element) => {
                        return <Icon key={element.id} data={element} />
                    })
                }

                <div className={`flex py-2 px-6 items-center self-stretch gap-3 border-l-[2px]
        
                        text-richblack-200 border-transparent
        text-sm font-medium cursor-pointer`}
        onClick={openModal}
                    >

                    <div className="w-4 h-4 object-cover text-lg">
                        <VscSignOut/>
                    </div>

                    <div>
                        Logout
                    </div>

                </div>

            </div>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Background dim color
                    },
                    content: {
                        width: '30%',
                        margin: 'auto',
                        height: "fit-content",
                        backgroundColor: "rgb(0, 8, 20)",
                        border: "1px solid rgb(44 51 63)"
                    },
                }}
            >
                <div className='flex flex-col px-4 py-2 gap-8 '>
                    <h3 className='text-lg font-semibold text-richblack-5 text-center'>
                        Do you want to log out?
                    </h3>
                    <div className='flex justify-around'>
                        <button className='py-3 px-6 bg-pink-700 rounded-lg text-richblack-5'
                            onClick={() => { logoutLink({ navigate, dispatch }) }}>
                            Confirm
                        </button>

                        <button className='py-3 px-6 bg-richblue-300 rounded-lg text-richblack-5'
                            onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </ReactModal>

        </div>
    )
}