import React, { useState } from 'react'
import Header from '../components/Header'
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs'
import { FaShapes, FaCloudUploadAlt } from 'react-icons/fa'
import { RxTransparencyGrid } from 'react-icons/rx'
import { TfiText } from 'react-icons/tfi'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import TemplateDesign from '../components/main/TemplateDesign'





const Main = () => {
    const [state, setState] = useState("")
    const [show, setShow] = useState({
        status: true,
        name: ""
    })

    const setElements = (type,name)=>{
        console.log("workind")
    setState(type)
    console.log("workind",state)
    setShow({
    status: false,
    name
    })
 

    
    }
    console.log("workind", show)
    return (

        <div className='min-w-screen h-screen bg-black '>
            <Header />
            <div className='flex h-[calc(100%-60px)] w-screen '>
                <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto '>

                    <div onClick={() => setElements("design", "design")} className={` ${show.name === "design" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsGrid1X2 /></span>
                        <span className='text-xs font-medium'>Design</span>
                    </div>

                    <div onClick={() => setElements("shape", "shape")} className={` ${show.name === "shape" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaShapes /></span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>


                    <div onClick={() => setElements("image", "uploadImage")} className={` ${show.name === "uploadImage" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='text-xs font-medium'>Upload</span>
                    </div>


                    <div onClick={() => setElements("text", "text")} className={`${show.name === "text" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><TfiText /></span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>



                    <div onClick={() => setElements("project", "projects")} className={`${show.name === "projects" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsFolder /></span>
                        <span className='text-xs font-medium'>Project</span>
                    </div>

                    <div onClick={() => setElements("initImage", "images")} className={` ${show.name === "images" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsFillImageFill /></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>

                    <div onClick={() => setElements("background", "baackground")} className={`${show.name === "baackground" ? 'bg-[#252627]' : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><RxTransparencyGrid /></span>
                        <span className='text-xs font-medium'>Background</span>
                    </div>

                </div>


                <div className='h-full w-[100%-75px] '>
                    <div className={`${show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                   <div onClick={()=>setShow({name:"" ,status:true})} className='flex absolute justify-center items-center bg-[#252627]  w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full '> <MdKeyboardArrowLeft /> </div>
                  
                   {
                    state === "design" &&  <div>
                        <div className='grid grid-cols-2 gap-2 '>
                            <TemplateDesign />
                            </div>
                    </div>
                   }
                   {
                    state === "shape" &&  <div>
                        shape
                    </div>
                   }
                   {
                    state === "image" &&  <div>
                        image
                    </div>
                   }
                   {
                    state === "text" &&  <div>
                        text
                    </div>
                   }
                   {
                    state === "project" &&  <div>
                        project
                    </div>
                   }
                   {
                    state === "initImage" &&  <div>
                        initImage
                    </div>
                   }
                   {
                    state === "background" &&  <div>
                        background
                    </div>
                   }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Main