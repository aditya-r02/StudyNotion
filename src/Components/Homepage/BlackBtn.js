import { Link } from "react-router-dom"

export default function BlackBtn({text, ptr}) {
    return (
        <Link to={ptr} className="py-[0.75rem] px-[1.5rem] items-center 
                    rounded-[0.5rem] bg-richblack-800 shadow-button2">
            <p className="font-semibold">{text}</p>
        </Link>
    )
}