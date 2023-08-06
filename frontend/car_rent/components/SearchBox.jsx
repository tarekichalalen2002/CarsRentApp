import React from 'react'
import {AiOutlineSearch,AiFillCar} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'
import { motion } from 'framer-motion'

function SearchBox() {
  return (
    <motion.div
    className='border border-black w-[70vw] rounded-xl grid grid-cols-7 p-3'
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
        <div
        className='col-span-2 flex flex-col gap-1 px-2 relative'
        >
            <label htmlFor="search" className='text-[10px] font-bold'>Search</label>
            <AiOutlineSearch className='absolute top-[35px] left-3 transform -translate-y-1/2 text-[20px] text-gray-400'/>
            <input  className='w-auto border border-black p-2 rounded-lg text-[12px] pl-7'
            placeholder='Search for a car'
            />
        </div>

        <div
        className='col-span-2 flex flex-col gap-1 px-2 relative'
        >
            <label htmlFor="city" className='text-[10px] font-bold'>City</label>
            <MdLocationPin className='absolute top-[35px] left-3 transform -translate-y-1/2 text-[20px] text-gray-400'/>
            <select className='w-auto border border-black p-2 rounded-lg text-[12px] pl-7' placeholder='Choose a city'>

            </select>
        </div>

        <div
        className='col-span-2 flex flex-col gap-1 px-2 relative'
        >
            <label htmlFor="car-type" className='text-[10px] font-bold'>Car Type</label>
            <AiFillCar className='absolute top-[35px] left-3 transform -translate-y-1/2 text-[20px] text-gray-400'/>
            <select className='w-auto border border-black p-2 rounded-lg text-[12px] pl-7' placeholder='Choose a car type'>

            </select>
        </div>

        <div className=' w-full h-full flex items-end justify-center'>
            <button className='bg-black text-white px-5 rounded-xl py-2 
            '>Search Now</button>
        </div>
    </motion.div>
  )
}

export default SearchBox