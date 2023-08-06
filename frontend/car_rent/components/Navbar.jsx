import React from 'react'

function Navbar() {
  return (
    <nav className='flex py-2 px-5 items-center justify-between'>
        <img src="/logo.svg" alt="logo" className='w-[80px] h-[60px] cursor-pointer'/>

        <ul className='w-full flex gap-[10%] font-semibold justify-center'>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'>Home</li>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'>Offers</li>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'>Our Parteners</li>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'>About us</li>
        </ul>

        <ul className='flex gap-[50px] font-semibold items-center mr-5'>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'>Login</li>
            <li className='cursor-pointer bg-black text-white px-5 rounded-xl py-2 hover:text-orange-300 ease-in-out duration-300'>Register</li>
            
        </ul>
    </nav>
  )
}

export default Navbar 