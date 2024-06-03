import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img2 from '../Assets/image 5.png'

const Ourcars = () => {
  return (
    <div className='flex items-center justify-center'>
     <div className=''>
     <h className='text-7xl font-bold text-[#1B3E80]'>OUR</h><br/>
      <h className='text-7xl font-bold ml-20 '>CARS</h>
   <div className='space-x-3 ml-16 mt-6'>
   <button className='bg-[#1B3E80] rounded-full size-10 text-white p-3'><FaArrowLeft /></button>
      <button className='bg-[#1B3E80] rounded-full size-10 text-white p-3'><FaArrowRight /></button>
   </div>
     </div>
      <img src={img2} alt=''/>
    </div>
  )
}

export default Ourcars
