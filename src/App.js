import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Navbar from "./Components/Comman/Navbar";
import ForgotPassword from "./Pages/ForgotPassword";
import CheckEmail from "./Components/Login&Signup/CheckEmail";
import ResetPassword from "./Components/Login&Signup/ResetPassword";
import OtpPage from "./Components/Login&Signup/OtpPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/Dashboard/MyProfile";
import Settings from "./Components/Dashboard/Settings/Settings";
import EnrolledCourse from "./Components/Dashboard/EnrolledCourse/Index";
import Wishlist from "./Components/Dashboard/Wishlist/Index";
import CreateCourse from "./Components/Dashboard/CreateCourse/Index";



function App() {

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex justify-center ">
      <div className="w-full">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path="/checkemail" element={<CheckEmail/>}/>
          <Route path="/reset-password/:token" element={<ResetPassword/>}/>
          <Route path="/verifyemail" element={<OtpPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route element={<Dashboard/>} >
            <Route element={<MyProfile/>} path="/dashboard"/>
            <Route element={<MyProfile/>} path="/dashboard/my-profile"/>
            <Route element={<Settings/>} path="/dashboard/settings"/>
            <Route element={<EnrolledCourse/>} path="/dashboard/enrolled-courses" />
            <Route element={<Wishlist/>} path="/dashboard/wishlist"/>
            <Route element={<CreateCourse/>} path="/dashboard/add-course" />
          </Route>

          
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
