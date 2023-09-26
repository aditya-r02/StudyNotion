import {RiDeleteBin6Line} from 'react-icons/ri'
import ReactModal from 'react-modal'
import { useState } from 'react';
import { deleteAccount } from '../../../Middleware/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DeleteAccount(){
    const dispatch = useDispatch();
    const token = useSelector(state=>state.token.value)
    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="flex self-stretch p-6 gap-[1.1875rem] rounded-lg border-[1px] border-pink-700
        bg-pink-900">

            {/*Icon*/}
            <div className="p-[0.875rem] flex items-center justify-center gap-[0.625rem] rounded-full
            bg-pink-700 h-fit">
                <div className="w-6 h-6 px-[0.0625rem] flex items-center justify-center text-pink-200
                text-2xl">
                    <RiDeleteBin6Line/>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold text-pink-5'>
                    Delete Account
                </h3>
                <div className='max-w-[34.5625rem] text-pink-25 text-sm font-medium'>
                    <p >
                        Would you like to delete account?
                    </p>
                    <p>
                    This account contains Paid Courses. Deleting your account will remove all the contain associated with it.
                    </p>
                </div>

                <div className='text-pink-300 font-medium cursor-pointer' onClick={openModal}>
                    I want to delete my account.
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
            height:"fit-content",
            backgroundColor: "rgb(0, 8, 20)",
            border:"1px solid rgb(44 51 63)"
          },
        }}
      >
        <div className='flex flex-col px-4 py-2 gap-8 '>
            <h3 className='text-lg font-semibold text-richblack-5 text-center'>
                Are you sure to delete your account
            </h3>
            <div className='flex justify-around'>
                <button className='py-3 px-6 bg-pink-700 rounded-lg text-richblack-5'
                onClick={()=>{deleteAccount({dispatch, token, navigate})}}>
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