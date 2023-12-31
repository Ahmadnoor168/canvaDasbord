import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import {FaTrash} from "react-icons/fa"
const Home = () => {
    const navigate = useNavigate()
    const [show,setShow] = useState(false)
    const [state ,setState] = useState({
        width:0,
        height:0
    })
    const inputHandel = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mdtablet: {
            breakpoint: { max: 992, min: 464 },
            items: 3
          },

        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4
        }
      };
      const create = () =>{
        navigate("/design/create",{
            state:{
                type: "create",
                width:state.width,
                height: state.height
            }
        })
      }
  return (
    <div className='pt-5 '>
        <div className='w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden '>
            <button className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffab] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] absolute top-3 right-3' onClick={()=>setShow(!show)}>Custom Size</button>
            <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100 ' : 'invisible opacity-50'} transition-all duration-500`}>
               
               
                <div className='grid grid-cols-2 pb-4 gap-3'>
                    
                    
                    <div className='flex gap-2 justify-center items-start flex-col'>
                        <label htmlFor='width'> Width</label>
                        <input type='number' name='width'  onChange={ inputHandel } className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md ' id='width' /> 
                    </div>


                    <div className='flex gap-2 justify-center items-start flex-col'>
                        <label htmlFor='height'> Height</label>
                        <input type='number' name='height' onChange={ inputHandel } className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md ' id='height' /> 
                    </div>

                </div>
<button className='px-4 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dffab] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3]  w-full' onClick={create}>Create new design</button>

                
            </div>

<div className=''>
            <h2 className='text-3xl pb-10 pt-6b font-semibold text-white  '>What Will You Design</h2>
</div>
        </div>
        <div className=''>
                <h2 className='text-xl py-6 font-semibold text-white'>Your resent design </h2>
       
       <div className=''>
<Carousel autoPlay={true} infinite={true} responsive={responsive} transitionDuration={500} >
    {
    [1,2,3,4,5,6,7,8].map((d,i) => <div className='relative group w-full h-[170px] px-2 ' key={i}> 
    <Link className='w-full h-full block bg-[#ffffff12] p-4 rounded-md'>
        <img className='w-full h-full rounded-md' src="http://localhost:5173/Quaid2.png" ></img>
        </Link>
    <div className='absolute hidden cursor-pointer top-1 right-2 text-red-500 p-w translate-all duration-500 group-hover:block  '> 
        <FaTrash />
    </div>
    </div>)
}
</Carousel>
       </div>
        </div>
    </div>
  )
}

export default Home