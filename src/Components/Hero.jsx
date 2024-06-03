import React from 'react'
import img1 from '../Assets/image 6.png'

const Hero = () => {
  return (
    <div  className='flex mt-72'>
      
      <div>
        <img src={img1} alt=''/>
      </div>

      <div>
      <div className='text-9xl text-[#1B3E80] -mt-36 -ml-28 font-bold '>
        BMW
      </div>
      <div className='font-bold text-9xl'>DESIGN</div>
      </div>
    </div>
  )
}

export default Hero
