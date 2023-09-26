import frame from '../assets/Images/frame.png'
import image from '../assets/Images/signup.webp'
import Template from '../Components/Login&Signup/Template'
import { useSelector } from 'react-redux';
import Loader from '../Components/Comman/Loader';

function SignupPage(props){
    const loading = useSelector((state)=>state.loader.value)

    const heading = 'Join the millions learning to code with StudyNotion for free';
    const desc1 = 'Build skills for today, tomorrow, and beyond.';
    const desc2 = 'Education to future-proof your career.' ;

    return (
        <>
            {loading?
            (<Loader/>):
            (<Template heading={heading} desc1 = {desc1} desc2 = {desc2} image={image} frame={frame}
            formType="signup" updateLog={props.updateLog}
        />)}
        </>
    );
}

export default SignupPage;