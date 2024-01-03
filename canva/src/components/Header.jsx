import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const saveImages =()=>{

  }
  const downloadImages =()=>{
    
  }
  return (
    <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[rgb(42,43,44)] w-full'>
        <div className='flex justify-between px-10 items-center text-gray-300  h-full' >
          <Link to="/">
          <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt='canva'  /> 
          </Link>

          <span className='text-xl'>Mini Canva</span>
          <div className='flex justify-center items-center gap-2 text-gray-300 '>
        <button onClick={saveImages} className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm '> Save</button>
        <button onClick={downloadImages} className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm '> Download </button>

          </div>
        </div>
    </div>
  )
}

export default Header