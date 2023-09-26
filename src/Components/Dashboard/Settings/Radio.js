import { useRef } from "react"


export default function Radio({  value, checked }) {

    const btn = useRef();
    function clickHandler(){
        btn.current.click();
    }


    return (
        <label className="flex gap-3 items-center" onClick={clickHandler}>

            <input type="radio" value={value} ref={btn} checked={checked}
                className="peer appearance-none hidden"
            />

            <div className="border-2 border-richblack-500 w-5 h-5 rounded-full 
             bg-richblack-700 z-10 justify-center items-center flex peer-checked:border-none
             peer-checked:bg-yellow-50 peer-checked:before:content-[''] peer-checked:before:w-3 
             peer-checked:before:h-3 peer-checked:before:rounded-full peer-checked:before:border-2
             peer-checked:before:border-richblack-700">
               
            </div>


            <p className="peer-checked:text-richblack-5">{value}</p>
        </label>
    )
}