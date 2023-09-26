import { instance, removePhotoUrl, updateAdditionalUrl, updatePhotoUrl } from "../axios/Instance";
import { toast } from "react-hot-toast";
import { updateUser } from "../redux/slices/UserSlice";
import {change} from '../redux/slices/LoaderSlice'


export async function removeProfilePicture({ change, dispatch, token}){

    try{
        dispatch(change(true))
        const result = await instance.put(removePhotoUrl, {token});

        localStorage.removeItem("userDetails");
        const userDetails = result.data.userDetails;
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(updateUser(userDetails))
        toast.success("Updated Successfully!")
        dispatch(change(false))
    }
    catch(error){
        console.log(error);
        dispatch(change(false));
        toast.error(error.response.data.message)
    }
}

export async function updateProfilePicture({dispatch, token, selectedFile}){
    try{
        if (!selectedFile){
            toast.error("Please select a file")
        }

        dispatch(change(true));

        const formData = new FormData();
        formData.append("image", selectedFile);

        const result = await instance.put(updatePhotoUrl, formData,
            {
                headers:{
                    'token': "Bearer "+token,
                }
            });

        localStorage.removeItem("userDetails");
        const userDetails = result.data.userDetails;
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(updateUser(userDetails))
        toast.success("Updated Successfully!")
        dispatch(change(false))
    }
    catch(error){
        console.log(error);
        dispatch(change(false));
        toast.error(error.response.data.message);
    }
}

export async function updateAdditionalDetails({dispatch, token, data}){
    try{
        dispatch(change(true))
        let newData = {date_of_birth:data.date_of_birth,
                         gender: data.gender,
                         phone_no: data.phone_no,
                         country: data.country,
                         about: data.about,
                         first_name:data.fullName.split(" ").at(0)}
        if (data.fullName.split(" ").length===2){
            newData.last_name = data.fullName.split(" ").at(-1);
        }else{
            newData.last_name = ""
        }
        //console.log(newData)
        const result = await instance.put(updateAdditionalUrl, newData,
            {
                headers:{
                    "token": "Bearer "+token
                }
            });
        const userDetails = result.data.userDetails;
        dispatch(updateUser(userDetails))
        localStorage.removeItem("userDetails")
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        //console.log(result)
        //console.log(userDetails);

        dispatch(change(false));
    }
    catch(error){
        console.log(error);
        dispatch(change(false));
        toast.error(error.response.data.message)
    }
}