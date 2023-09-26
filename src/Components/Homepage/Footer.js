import React from "react";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {FooterLink2} from '../../data/footer-links'

export default function Footer(){
    // console.log("hello")
    // console.log(FooterLink2)
    return (
        <div className="w-full flex py-[3.25rem] px-[7.5rem] flex-col justify-center items-center gap-[2rem]
        bg-richblack-800 border-t-[1px] border-richblack-600">

            {/*Main Box*/}
            <div className="flex items-start gap-[3.25rem] self-stretch text-richblack-400
            text-sm font-medium font-inter h-fit">

                {/*Left box*/}
                <div className="flex gap-[0.75rem] flex-1 ">
                    <div className="flex flex-col gap-[0.75rem] flex-1 ">
                        <img src={logo} alt="StudyNotion logo"/>
                        <h4 className="text-base font-semibold text-richblack-100">Company</h4>
                        <p className="flex flex-col gap-[0.5rem]">
                            <Link to={'/about'}>About</Link>
                            <Link to={'/careers'}>Careers</Link>
                            <Link to={'/affliates'}>Affiliates</Link>
                        </p>

                        <div className="flex gap-[0.75rem]">
                            <a href="facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.75 11.9999C21.7469 14.3828 20.8726 16.6824 19.2917 18.4655C17.7109 20.2485 15.5326 21.392 13.1671 21.6805C13.1145 21.6864 13.0611 21.6812 13.0107 21.665C12.9602 21.6489 12.9137 21.6222 12.8743 21.5868C12.8348 21.5513 12.8034 21.5079 12.782 21.4594C12.7605 21.411 12.7496 21.3585 12.75 21.3055V14.2499H15C15.1028 14.2501 15.2045 14.2292 15.2989 14.1884C15.3933 14.1476 15.4783 14.0879 15.5487 14.0129C15.619 13.9379 15.6732 13.8493 15.7078 13.7525C15.7424 13.6557 15.7568 13.5528 15.75 13.4502C15.7334 13.2573 15.6444 13.0779 15.5009 12.9479C15.3574 12.818 15.1701 12.7472 14.9765 12.7499H12.75V10.4999C12.75 10.102 12.908 9.7205 13.1893 9.43919C13.4706 9.15789 13.8521 8.99985 14.25 8.99985H15.75C15.8528 9.00008 15.9545 8.97916 16.0489 8.9384C16.1433 8.89764 16.2283 8.83791 16.2987 8.76292C16.369 8.68792 16.4232 8.59927 16.4578 8.50246C16.4924 8.40565 16.5068 8.30276 16.5 8.20017C16.4834 8.00698 16.3941 7.82727 16.2502 7.6973C16.1063 7.56733 15.9185 7.49677 15.7246 7.49985H14.25C13.4543 7.49985 12.6912 7.81592 12.1286 8.37853C11.566 8.94114 11.25 9.70421 11.25 10.4999V12.7499H8.99996C8.89714 12.7496 8.79538 12.7705 8.70099 12.8113C8.60659 12.8521 8.52159 12.9118 8.45126 12.9868C8.38092 13.0618 8.32676 13.1504 8.29213 13.2472C8.2575 13.3441 8.24315 13.447 8.24996 13.5495C8.26655 13.7427 8.35579 13.9224 8.49968 14.0524C8.64357 14.1824 8.8314 14.2529 9.02527 14.2499H11.25V21.3074C11.2503 21.3603 11.2394 21.4127 11.218 21.4611C11.1967 21.5095 11.1653 21.5528 11.126 21.5882C11.0866 21.6237 11.0403 21.6504 10.9899 21.6666C10.9395 21.6828 10.8863 21.6882 10.8337 21.6824C8.40498 21.3866 6.1758 20.1898 4.5874 18.3288C2.99901 16.4678 2.16716 14.0783 2.25652 11.6333C2.44402 6.57079 6.54464 2.45517 11.6109 2.25829C12.9225 2.20748 14.231 2.42175 15.4579 2.88826C16.6848 3.35477 17.8051 4.06395 18.7516 4.97338C19.6981 5.88281 20.4515 6.97381 20.9667 8.18111C21.4819 9.38842 21.7483 10.6872 21.75 11.9999Z" fill="#6E727F"/>
</svg></a>
                            <a href="google.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.75 9.41414 20.7228 6.93419 18.8943 5.10571C17.0658 3.27723 14.5859 2.25 12 2.25ZM12 19.5C10.7843 19.4999 9.58689 19.2042 8.51084 18.6385C7.43479 18.0729 6.51238 17.2541 5.82306 16.2527C5.13373 15.2514 4.69815 14.0975 4.55383 12.8904C4.40951 11.6833 4.56077 10.4592 4.9946 9.32357C5.42842 8.18793 6.1318 7.17476 7.04416 6.37134C7.95651 5.56791 9.05049 4.99831 10.2319 4.71159C11.4133 4.42486 12.6466 4.42961 13.8258 4.72543C15.0049 5.02124 16.0945 5.59926 17.0006 6.40969C17.1452 6.54329 17.2314 6.72837 17.2407 6.925C17.2501 7.12163 17.1817 7.31403 17.0504 7.4607C16.9191 7.60737 16.7354 7.69655 16.539 7.70899C16.3425 7.72142 16.1491 7.65613 16.0003 7.52719C15.0004 6.63282 13.7296 6.09936 12.3909 6.01202C11.0522 5.92468 9.72288 6.2885 8.61523 7.04536C7.50758 7.80222 6.68554 8.90845 6.28041 10.1874C5.87528 11.4663 5.91044 12.844 6.38027 14.1006C6.85011 15.3572 7.72751 16.4201 8.87232 17.1194C10.0171 17.8188 11.3633 18.1144 12.6958 17.9588C14.0283 17.8033 15.2702 17.2057 16.2232 16.2615C17.1762 15.3173 17.7853 14.081 17.9531 12.75H12C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25H18.75C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.4978 13.9884 18.7069 15.8948 17.3008 17.3008C15.8948 18.7069 13.9884 19.4978 12 19.5Z" fill="#6E727F"/>
</svg></a>
                            <a href="twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M23.0298 7.28105L20.2267 10.0842C19.6604 16.6485 14.1245 21.7504 7.49919 21.7504C6.13794 21.7504 5.01575 21.5348 4.16357 21.1092C3.47638 20.7651 3.19513 20.3967 3.12482 20.2917C3.06212 20.1977 3.02148 20.0907 3.00594 19.9787C2.9904 19.8668 3.00035 19.7528 3.03506 19.6453C3.06977 19.5377 3.12833 19.4394 3.20638 19.3577C3.28442 19.2759 3.37992 19.2129 3.48575 19.1732C3.51013 19.1639 5.75826 18.3004 7.18607 16.657C6.39424 16.006 5.70302 15.2414 5.13482 14.3882C3.97232 12.6623 2.67107 9.66417 3.07232 5.18386C3.08504 5.0415 3.13817 4.90573 3.22546 4.79256C3.31275 4.67938 3.43057 4.5935 3.56503 4.54503C3.69949 4.49657 3.845 4.48753 3.98443 4.51899C4.12385 4.55045 4.25138 4.6211 4.352 4.72261C4.38482 4.75542 7.472 7.82574 11.2464 8.82136V8.25042C11.2449 7.65173 11.3633 7.0588 11.5945 6.50655C11.8257 5.9543 12.1651 5.4539 12.5926 5.0348C13.0078 4.62017 13.5019 4.2929 14.0457 4.07231C14.5894 3.85172 15.1718 3.74227 15.7586 3.75042C16.5457 3.75819 17.3173 3.96947 17.9986 4.36374C18.6799 4.75801 19.2475 5.32184 19.6464 6.00042H22.4992C22.6476 6.00031 22.7927 6.04423 22.9162 6.12663C23.0396 6.20904 23.1358 6.32621 23.1927 6.46333C23.2495 6.60045 23.2643 6.75134 23.2353 6.8969C23.2064 7.04247 23.1348 7.17616 23.0298 7.28105Z" fill="#6E727F"/>
</svg></a>
                            
                            <a href='youtube.com'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM15.2081 12.3122L10.7081 15.3122C10.6516 15.3499 10.586 15.3715 10.5181 15.3748C10.4503 15.3781 10.3829 15.3629 10.323 15.3309C10.2631 15.2988 10.2131 15.2511 10.1782 15.1928C10.1434 15.1346 10.125 15.0679 10.125 15V9C10.125 8.9321 10.1434 8.86545 10.1782 8.80718C10.2131 8.74892 10.2631 8.70121 10.323 8.66916C10.3829 8.63711 10.4503 8.62191 10.5181 8.6252C10.586 8.62849 10.6516 8.65013 10.7081 8.68782L15.2081 11.6878C15.2596 11.722 15.3017 11.7685 15.3309 11.8229C15.3601 11.8774 15.3754 11.9382 15.3754 12C15.3754 12.0618 15.3601 12.1226 15.3309 12.1771C15.3017 12.2315 15.2596 12.278 15.2081 12.3122Z" fill="#6E727F"/>
</svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-[2.25rem]">
                        <div className="flex flex-col gap-[0.75rem]">
                            <h4 className="text-base font-semibold text-richblack-100">Resources</h4>
                            <p className="flex flex-col gap-[0.5rem]">
                                <Link to={'/resources/articles'}>Articles</Link>
                                <Link to={'/resources/blogs'}>Blogs</Link>
                                <Link to={'/resources/chartsheet'}>Chart Sheet</Link>
                                <Link to={'/resources/codechallenges'}>Code challenges</Link>
                                <Link to={'/resources/docs'}>Docs</Link>
                                <Link to={'/resources/projects'}>Projects</Link>
                                <Link to={'/resources/videos'}>Videos</Link>
                                <Link to={'/resources/workspaces'}>Workspaces</Link>
                            </p>
                        </div>

                        <div className="flex flex-col gap-[0.75rem]">
                            <h4 className="text-base font-semibold text-richblack-100">Support</h4>
                            <Link to={'/support/helpcenter'}>Help Center</Link>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-[2.25rem]">
                        <div className="flex flex-col gap-[0.75rem]">
                            <h4 className="text-base font-semibold text-richblack-100">Plans</h4>
                            <p className="flex flex-col gap-[0.5rem]">
                                <Link to={'/plans/paidmemberships'}>Paid Memberships</Link>
                                <Link to={'/plans/forstudents'}>For Students</Link>
                                <Link to={'/businesssolutions'}>Business Solutions</Link>
                            </p>
                        </div>
                        <div className="flex flex-col gap-[0.75rem]">
                            <h4 className="text-base font-semibold text-richblack-100">Community</h4>
                            <p className="flex flex-col gap-[0.5rem]">
                                <Link to={'/community/forums'}>Community Forums</Link>
                                <Link to={'/community/chapters'}>Chapters</Link>
                                <Link to={'/community/events'}>Events</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[2px] bg-richblue-700 self-stretch"></div>

                {/*Right box*/}
                <div className="flex-1 flex flex-row gap-[0.75rem]">
                    
                    {
                        FooterLink2.map((obj, index)=>{
                            return (<div key={index} className="flex flex-1 flex-col gap-[0.75rem]">
                                <h4 className="text-base font-semibold text-richblack-100">{obj.title}</h4>
                                <p className="flex flex-col gap-[0.5rem]">
                                    {
                                        obj.links.map((ptr, index)=>{
                                            return (<Link key={index} to={ptr.link}>{ptr.title}</Link>)
                                        })
                                    }
                                </p>
                            </div>)
                        })
                    }
                </div>

            </div>

            {/*lower box*/}
            <div className="flex gap-[0.75rem] justify-between text-sm text-richblack-300 w-full">
                <div className="flex gap-[1rem] items-center justify-start">
                    <Link to={'/privacypolicy'}>Privacy Policy</Link>
                    <Link to={'/cookiepolicy'}>Cookie Policy</Link>
                    <Link to={'/terms'}>Terms</Link>
                </div>

                <div className="flex items-center">
                    Made with &nbsp;<BsFillSuitHeartFill className="inline text-pink-200"/>&nbsp; Aditya 
                    &nbsp;<BiCopyright className="inline"/>2023 StudyNotion
                </div>
            </div>

        </div>
    )
}