import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
const Header = () => {
  return (
    <div className=' absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black '>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" />
      <div className='flex items-center'>
        <IoIosArrowDropdown size="24px" color='white'/>
       <h6 className='text-lg font-medium text-white'>Ananya Kumari</h6>
        <div className='ml-4 '>
          <button className='bg-red-800 text-black px-4 py-2' >Logout</button>
          <button  className='bg-red-800 text-black px-4 py-2 ml-2'>Search Movie</button>
        </div>

      </div>
    </div>
  )
}

export default Header