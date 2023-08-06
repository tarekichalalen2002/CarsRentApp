import React from 'react'
import {motion} from 'framer-motion'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

function Testomonial({testomonial , index}) {
  return (
    <motion.div
    className='w-full max-w-[300px] h-[300px] rounded-xl border border-black mt-10 p-3 bg-gray-200 shadow-lg'
    initial={{opacity:0, y:-100}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5, delay:index*0.2}}
    >
        <div
        className='flex gap-2 items-center'
        >
            <img src={testomonial.image}
            className="object-cover w-[40px] h-[40px] rounded-full shadow-lg"
            />
            <h4 className='text-[15px] font-semibold'>
                {testomonial.name}
            </h4>
        </div>
        <div className='block mt-3'>
            <FaQuoteLeft/>
            <p>{testomonial.content} </p>
            <FaQuoteRight/>
        </div>
    </motion.div>
  )
}

export default Testomonial