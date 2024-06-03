import React from 'react'


const Navbar = () => {
  return (
    <div className="App">
     <nav className='bg-black text-white flex items-center justify-between px-20 h-20'>
      <div>
        <button className='bg-[#1B3E80] text-white px-6 py-2 '>BMW</button>

      </div>
      <div>
        <ul className='flex items-ceneter space-x-10 '>
          <li className='hover:border cursor-pointer border-[#D9D9D9] p-3 hover:text-blue-500'>Home</li>
          <li className='hover:border cursor-pointer  border-[#D9D9D9] p-3 hover:text-blue-500'>About Us</li>
          <li className='hover:border cursor-pointer  border-[#D9D9D9] p-3 hover:text-blue-500'>Designs</li>
          <li className='hover:border cursor-pointer  border-[#D9D9D9] p-3 hover:text-blue-500'>Pricing</li>
        </ul>
        </div>
      </nav>
      </div>
  )
}

export default Navbar
