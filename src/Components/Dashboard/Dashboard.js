import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Loader from '../Comman/Loader'


export default function Dashboard() {
    const loading = useSelector(state => state.loader.value)
    

    return (
        <>
            {
                loading ?
                    (
                        <Loader />
                    ) :
                    (
                        <div className="min-h-[calc(100vh-3.8rem)] flex text-richblack-25 items-stretch">

                            <Sidebar />

                            <Outlet />

                            

                        </div >
                    )
            }
        </>
    )
}