import { useLocation } from "react-router-dom"

import { Link } from "react-router-dom";
import * as Icons from 'react-icons/vsc'

export default function Icon({data}){
    const location = useLocation();

    const DynamicIcon = Icons[data.icon]

    //console.log(location.pathname,"---",data.path)

    return (
        <Link className={`flex py-2 px-6 items-center self-stretch gap-3 border-l-[2px]
        ${location.pathname===data.path?'border-yellow-50 bg-yellow-800 text-yellow-50':
        'text-richblack-200 border-transparent'}
        text-sm font-medium `}
        to={data.path}>
            
            <div className="w-4 h-4 object-cover text-lg">
                <DynamicIcon/>
            </div>

            <div>
                {data.name}
            </div>

        </Link>
    )
}