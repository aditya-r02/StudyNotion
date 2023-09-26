import { useForm } from "react-hook-form"
import {HiOutlineCurrencyRupee} from 'react-icons/hi2'
import { FileUploader } from "react-drag-drop-files"
import { useState, useEffect } from "react"
import {BiCloudUpload} from 'react-icons/bi'
import { instance, categoryUrl } from '../../../axios/Instance';

export default function Step1(){
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const fileTypes = ['JPG', 'PNG']

    const [file, setFile] = useState(null);

    const handleChange = (file) =>{
        setFile(file);
        console.log(file)
    }

    const [category, setCategory] = useState([]);
    const [tags, setTags] = useState([]);
    const tagHandler = (event) =>{
        
        console.log(event.target.value)
        if (event.key==="Enter" && event.target.value.length>0){
            console.log("hello")
            let newData = [event.target.value, ...tags];
            //newData.push(event.value)
            setTags(newData);
        }else{
            
        }
    }

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

    return (
        <form className="flex flex-col p-6 gap-[1.625rem] rounded-lg border-[1px] border-richblack-700 bg-richblack-800 mt-8
        mx-6">

            {/*Course Title*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Course Title 
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                <input type="text" placeholder="Enter Course Title"
                className="flex p-3 gap-3 items-center rounded-lg bg-richblack-700 shadow-button outline-none"/>
            </label>

            {/*Course Description*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Course Short Description
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                <textarea type="text" placeholder="Enter Description"
                className="flex p-3 gap-3 items-center rounded-lg bg-richblack-700 shadow-button outline-none"/>
            </label>

            {/*Price*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Price
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                <div className="rounded-lg bg-richblack-700 shadow-button flex items-center">
                    <span className="p-4 text-richblack-500 text-xl">
                        <HiOutlineCurrencyRupee/>
                    </span>

                    <input type="text" placeholder="Enter Price"
                    className="flex p-3 gap-3 items-center bg-richblack-700 outline-none"/>
                </div>

                
            </label>

            {/*Category*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Category 
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                <select className="flex gap-3 items-center p-3 rounded-lg bg-richblack-700
                                    shadow-input text-richblack-200 outline-none"
                >
                    {
                        category.map((element, index)=>{
                            return (
                                <option key={index} value={element.name}  className="text-richblack-200">
                                    {element.name}
                                </option>
                            )
                        })
                    }
                </select>

            
            </label>

            {/*Tags*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Tags
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                {tags.length>0 &&
                <div>
                    {
                        tags.map((tag, index)=>{
                            return (
                                <div className="" key={index}>
                                    {tag}
                                </div>
                            )
                        })
                    }
                </div>}

                <input type="text" placeholder="Choose a Tag"
                className="flex p-3 gap-3 items-center rounded-lg bg-richblack-700 shadow-button outline-none"
                    onKeyDown={tagHandler}
                />
            </label>

            {/*Course Thumbnail*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Course Thumbnail
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                        
                <FileUploader name='file' types={fileTypes} handleChange={handleChange} 
                 multiple={false} 
                >
                   <div className='flex flex-col py-8 px-3 justify-center items-center gap-2 self-stretch rounded-lg
                border-[1px] border-richblack-600 bg-richblack-700 shadow-button text-richblack-200
                cursor-pointer'>
                        <div className="p-3 flex items-center justify-center gap-[0.625rem] rounded-full bg-richblack-800
                        text-yellow-50  text-xl">
                            <BiCloudUpload/>
                        </div>

                        <div className="text-xs ">
                            {
                                file===null &&
                                <><p>Drag and Drop an image,  or &nbsp;
                                <span className="text-yellow-50 font-medium">
                                    Browse
                                </span>
                            </p>

                            <p>
                            Max 6MB each (12MB for videos)
                            </p></>
                            }

                            {
                                file!==null &&
                                <div>
                                    <p>Thumbnail image Added!</p>
                                </div>
                            }
                        </div>

                        <ul className="flex p-[0.625rem] gap-[3.25rem]">
                            <li>
                            Aspect ratio 16:9
                            </li>
                            <li>
                                Recommended size 1024x576
                            </li>
                        </ul>
                   </div>
                </FileUploader>
                
                
            </label>

            {/*Benefits of this course*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Benefits of this Course
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                <textarea type="text" placeholder="Enter Benefits of this Course"
                className="flex p-3 gap-3 items-center rounded-lg bg-richblack-700 shadow-button outline-none"/>
            </label>

            {/*Requirements*/}
            <label className="flex flex-col gap-[0.375rem] self-stretch w-full">
                <p className="flex gap-[0.125rem] items-start">
                    <span className="text-sm text-richblack-5">
                        Requirements/Instructions
                    </span>
                    <span className="text-pink-200">*</span>
                </p>

                <textarea type="text" placeholder="Enter requirements of this Course"
                className="flex p-3 gap-3 items-center rounded-lg bg-richblack-700 shadow-button outline-none"
                    rows={1}
                />

                <div className="flex py-1 px-2 gap-3">
                    <p className="text-base font-bold text-yellow-50">
                        Add
                    </p>
                </div>
            </label>

            <button type="submit" className="self-end">
                Next
            </button>

        </form>
    )
}