import Link from 'next/link'
import React from 'react'
import { AiOutlineMail,AiFillFacebook,AiFillLinkedin, AiFillInstagram,AiFillTwitterSquare } from 'react-icons/ai'

function Footer() {
  return (
    <footer
      className='h-[50vh] w-full flex flex-col p-10 items-center bg-black text-gray-300 gap-5'
      >
        <div
        className='flex gap-5 justify-between w-full items-start px-[150px]'
        >
          <Link href="/">
            <img 
            src='logo-white.svg'
            alt='logo'
            className="w-[75px] cursor-pointer"
            />
          </Link>
         
          <div
          className='flex flex-col items-start gap-2'
          >
            <h5
            className='font-semibold text-lg'
            >
              Home
            </h5>
            <ul className='flex flex-col gap-2'>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Our services
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Best deals
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Best renters
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Testimonials
              </li>
            </ul>
          </div>
          <div
          className='flex flex-col items-start gap-2'
          >
            <h5
            className='font-semibold text-lg'
            >
              Offers
            </h5>
            <ul className='flex flex-col gap-2'>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Purchase
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Create offers
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Find offers
              </li>
            </ul>
          </div>
          <div
          className='flex flex-col items-start gap-2'
          >
            <h5
            className='font-semibold text-lg'
            >
              Renters
            </h5>
            <ul className='flex flex-col gap-2'>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Become a renter
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Find renters
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                How it works
              </li>
              <li className='cursor-pointer hover:text-white ease-in-out duration-300'>
                Your dashboard
              </li>
            </ul>
          </div>
        </div>
        <div
        className='flex justify-between w-full items-center px-[150px] mt-[50px]'
        >
          <p className='flex items-center gap-2'>
            <span
            className='font-semibold text-2xl'
            ><AiOutlineMail /></span> autolocccontact@gmail.com
          </p>

          <div
          className='flex gap-5 items-center text-3xl'
          >
            <AiFillFacebook className='cursor-pointer'/>
            <AiFillInstagram className='cursor-pointer'/>
            <AiFillTwitterSquare className='cursor-pointer'/>
            <AiFillLinkedin className='cursor-pointer'/>
          </div>
        </div>
      </footer>
  )
}

export default Footer