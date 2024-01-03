import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import {  BsFolder,BsGrid1X2} from 'react-icons/bs';


const Layout = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    const [show, setShow] = useState(false)
    return (
        <div className='bg-[#18191b] min-h-screen w-full'>
            <div className='bg-[#252627] shadow-md fixed left-0 top-0 w-full z-20'>
                <div className='w-[90%] m-auto py-3'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[80px] h-[48px]'>
                            <img className='w-full h-full ' src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt='canva' />
                        </div>
                        <div className='flex gap-4 justify-center items-center relative'>
                            <button className='py-2 px-6 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[3px] font-medium hover:bg-[#9553f8] '>Createa design</button>


                            <div className='cursor-pointer w-[45px] h-[45px] ' onClick={() => setShow(!show)}>
                                <img className='w-full h-full rounded-full object-cover ' src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR7jjGD20xCcfr-EQ9mJ7Aunnw7wUpVC-O8ryXqsdMopmQKs__EGiIp1qf0wLslx2PxLwzJhnMV4todtKs' alt='profile'  ></img>
                            </div>



                            <div className={`absolute top-[60px] right-0 w-[250px] bg-[#313030] p-3 border-gray-700 transition duration-500 ${show ? "visible opacity-100 " : "invisible opacity-30 "}`}>
                                <div className='px-w pt-2 flex justify-start gap-5 items-center mb-4'>

                                    <img className='w-[45px] h-[45px] rounded-full object-cover ' src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR7jjGD20xCcfr-EQ9mJ7Aunnw7wUpVC-O8ryXqsdMopmQKs__EGiIp1qf0wLslx2PxLwzJhnMV4todtKs' alt='profile'  ></img>

                                    <div className='flex justify-center flex-col items-start'>
                                        <span className='text-[#e0dddd] font-bold text-md'>Ahmad Noor</span>
                                        <span className='text-[#e0dddd] font-bold text-md'>Ahmad@gmail.com</span>
                                    </div>
                                </div>

                                <ul className='text-[#e0dddd] font-semibold'>
                                    <li>
                                        <Link to="/" className='p-2 '>
                                            <span>Setting</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='p-2 cursor-pointer'>
                                            <span>Logout</span>
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-full flex mt-16' >
                <div className='sidebar w-[300px] p-5 h-[calc(100vh - 70px)] fixed' >
                    <div className='px-2 py-2 flex justify-start gap-5 items-center mb-3'>
                        <img className='w-[40px] h-[40px] rounded-full object-cover ' src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR7jjGD20xCcfr-EQ9mJ7Aunnw7wUpVC-O8ryXqsdMopmQKs__EGiIp1qf0wLslx2PxLwzJhnMV4todtKs' alt='profile'  ></img>
                        <div className='flex justify-center flex-col items-start'>
                            <span className='text-[#e0dddd] font-bold text-md'>Ahmad noor</span>
                            <span className='text-[#c4c0c0] text-sm'>Free</span>
                        </div>
                    </div>
                    <ul className='px-4 flex flex-col gap-2'>
                        <li>
                            <Link to="/" className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/' ? 'bg-[#ffffff26]' : ''} rounded-[4px]`}>
                                <span className='text-xl '><FaHome /></span>
                                <span className='font-medium'>Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/projects" className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/projects' ? 'bg-[#ffffff26]' : ''} rounded-[4px]`}>
                                <span className='text-xl '><BsFolder /></span>
                                <span className='font-medium'>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link   to="/templates" className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/templates' ? 'bg-[#ffffff26]' : ''} rounded-[4px]`}>
                                <span className='text-xl '><BsGrid1X2 /></span>
                                <span className='font-medium'>Templates</span>
                            </Link>
                        </li>
                    </ul>
                </div>
<div className='ml-[300px] w-[calc(100%-300px)] '>
    <div className='py-4 pr-4'>
        <Outlet  />
    </div>
</div>
            </div>
        </div>
    )
}

export default Layout