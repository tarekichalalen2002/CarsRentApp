import React from 'react'
import { motion } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'

function Offer({offer,offersCardsAnimationDelay,size}) {
  return (
    <motion.div
    className={`
    w-[300px] h-[350px] mt-5 rounded-xl flex flex-col items-center bg-gray-100 shadow-black shadow-sm
    ${size}
    `}
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: offersCardsAnimationDelay }}
    >
        <img src={offer.image} alt={offer.title} className='w-full h-[150px] rounded-t-xl object-cover border-b border-gray-500' />
        <div className='flex flex-col w-full px-2'>
        <h4
        className='font-bold text-center'
        >{offer.title}</h4>
        <p
        ><span className='font-semibold'>Pricing: </span>{offer.price}DA / {offer.duration} Days</p>
        <p
        ><span className='font-semibold'>Owner: </span>{offer.owner}</p>
        <p
        ><span className='font-semibold'>Address: </span>{offer.Address}</p>
        <p className='flex items-center gap-1'
        ><span className='font-semibold'>Avg rate: </span>{offer.rate} <span><AiFillStar/></span></p>
        <p className='flex items-center gap-1'
        ><span className='font-semibold'>Paying Ways: </span>{offer.payment_ways.map((way,index) => (<span>{index < offer.payment_ways.length-1 ? way+" ," :  way}</span>))}</p>
        </div>
        <button className='w-[90%] bg-gray-900 hover:bg-black ease-in-out duration-300 text-white mt-3 rounded-full py-1'>
        Purchase
        </button>
    </motion.div>
  )
}

export default Offer