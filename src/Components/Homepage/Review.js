import {BsFillStarFill} from 'react-icons/bs'

export default function Review({src, name, email, para, rating}){

    return (
        <div className="flex flex-col">

            <div className="flex ">
                <img src={src} alt="Profile"/>
                <div className="flex flex-col">
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </div>

            <p>{para}</p>

            <div className='flex'>
                <p>{rating}</p>
                <div className='flex'>
                    {
                        Array.from({length:5}).map((_,index)=>{
                            const flag = (index+1<=rating)?'text-yellow-50':'text-richblack-500';
                            return (<BsFillStarFill className={`${flag}`}/>)
                        })
                    }
                </div>
            </div>

        </div>
    );
}