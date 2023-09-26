import Template from "../Components/Login&Signup/Template";
import frame from '../assets/Images/frame.png'
import image from '../assets/Images/login.webp'

function LoginPage(props){
    const heading = 'Welcome Back';
    const desc1 = 'Build skills for today, tomorrow, and beyond.';
    const desc2 = 'Education to future-proof your career.' ;

    return (
        <Template heading={heading} desc1 = {desc1} desc2 = {desc2} image={image} frame={frame}
            formType='login' updateLog={props.updateLog}
        />
    );
}

export default LoginPage;