import React from 'react'
import car1 from '../Assets/Rectangle 33.png'
import car2 from '../Assets/Rectangle 34.png'
import car3 from '../Assets/Rectangle 35.png'
import car4 from '../Assets/Rectangle 38.png'
import car5 from '../Assets/Rectangle 36.png'
import car6 from '../Assets/Rectangle 41.png'
import car7 from '../Assets/Rectangle 40.png'
import car8 from '../Assets/Rectangle 39.png'

const BMWcollection = () => {
  return (
    <div className='text-center space-y-20 h-screen mx-5 my-10' >
        <h className=' my-20 text-5xl text-[#1B3E80] '>BMW Collections</h>
        <div className=''>
        <div className='flex justify-between'>
            <img src={car1} alt=''/>
            <img src={car2} alt=''/>
            <img src={car3} alt=''/>
         
        </div>
        <div className='flex justify-between'>
        <img src={car4} alt=''/>
            <img src={car5} alt=''/>
        </div>
        <div className='flex justify-between'>
            <img src={car6} alt=''/>
            <img src={car7} alt=''/>
            <img src={car8} alt=''/>
         
        </div>
        </div>
      
    </div>
  )
}

export default BMWcollection
