import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { removeProfilePicture, updateProfilePicture } from "../../../Middleware/User";
import {change} from '../../../redux/slices/LoaderSlice'


export default function UpdateProfile(){

    const dispatch = useDispatch();
    const {image : imageUrl} = useSelector(state=>state.user.userDetails)
    const token = useSelector(state=>state.token.value)

    const [selectedFile, setSelectedFile] = useState(null);

    async function updateBtn(){

        await updateProfilePicture({token, selectedFile, dispatch});
        setSelectedFile(null);
    }

    function selectFile(event){
        const file = event.target.files[0];
        //console.log(file)
        setSelectedFile(file);
        //console.log(selectedFile)

    }

    const inputField = useRef();

    function divhandler(){
        inputField.current.click();
    }

    async function removeProfile(){
        removeProfilePicture({dispatch, change, token})
    }


    return (
        <div className="flex p-6 items-center gap-5 self-stretch ">
                        {/*image*/}
                        <div className="w-[4.875rem] h-[4.875rem] flex items-center justify-center">
                            <img src={imageUrl} alt="profile"
                            className="w-full h-full rounded-full"
                            />
                        </div>

                        {/*image upload*/}
                        <div className="flex flex-col gap-3 self-stretch">
                            <p className="text-richblack-25 text-base font-medium">
                            Change Profile Picture
                            </p>

                            <div className="flex gap-3">

                                <div className="flex py-[0.375rem] px-[1.125rem] items-center gap-2 rounded-lg
                                bg-yellow-50 shadow-signin text-richblack-900 font-medium
                                cursor-pointer" onClick={divhandler}>
                                    Change
                                </div>

                                {
                                    selectedFile &&
                                    <div className={`flex py-[0.375rem] px-[1.125rem] items-center gap-2 rounded-lg
                                bg-yellow-50 shadow-signin text-richblack-900 font-medium
                                cursor-pointer }`} onClick={updateBtn}>
                                    Update
                                </div>
                                }
                                    
                                <input type="file" ref={inputField} onChange={selectFile}
                                    className="hidden"
                                />
                                

                                <button type="button"
                                onClick={removeProfile}
                                className="flex py-[0.375rem] px-[1.125rem] items-center gap-2 rounded-lg
                                border-[1px] border-richblack-600 bg-richblack-700 text-richblack-50">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
    )
}