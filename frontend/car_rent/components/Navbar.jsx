import React from 'react'
import Link from 'next/link'
import Logo from './Logo'


function Navbar() {
  return (
    <nav className='flex py-2 px-5 items-center justify-between w-[100vw]'>
        <Logo />

        <ul className='w-full flex gap-[10%] font-semibold justify-center'>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'><Link href="/">Home</Link></li>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'><Link href="/offers">Offers</Link></li>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'><Link href='/renters'>Our Parteners</Link></li>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'>About us</li>
        </ul>

        <ul className='flex gap-[50px] font-semibold items-center mr-5'>
            <li className='cursor-pointer hover:text-orange-700 ease-in-out duration-300'><Link href='/authentication/login'>Login</Link></li>
            <li className='cursor-pointer bg-black text-white px-5 rounded-xl py-2 hover:text-orange-300 ease-in-out duration-300'>Register</li>
            
        </ul>
    </nav>
  )
}

export default Navbar 