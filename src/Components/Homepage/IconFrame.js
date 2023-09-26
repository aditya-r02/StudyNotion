


export default function IconFrame({src1, heading, para}){
    return (
        <div className="flex py-[1rem] px-[0.75rem] self-stretch gap-[1.5rem]"> 

            <div className="w-[3.25rem] h-[3.25rem] p-[0.25rem] flex justify-center items-center
            rounded-[12.5rem] bg-white shadow-icon relative" >
                <img src={src1} className="" alt="logo"/>
                <div className="absolute dashed"></div>

            </div>

            <div className="flex flex-col self-stretch">
                <p className="text-richblack-800 font-semibold">{heading}</p>
                <p className="text-richblack-400">{para}</p>
            </div>

        </div>
    );
}