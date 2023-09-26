import { Link } from "react-router-dom";

export default function YellowBtn({ text, ptr }) {
    return (
        <Link to={ptr} className="py-[0.75rem] px-[1.5rem] items-center 
                    rounded-[0.5rem] bg-yellow-50 shadow-button2">
            <p className="text-richblack-900 font-semibold">{text}</p>
        </Link>
    );
}