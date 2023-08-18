import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
    AiOutlineDoubleRight,
    AiOutlineClose,
    AiOutlineUser,
    AiOutlineLineChart,
    AiOutlineSetting,
} from 'react-icons/ai'
import { IoCarSport } from 'react-icons/io5'
import {BiBell} from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSnapshot } from 'valtio'
import state from '@/state'


function SideBar({userId}) {

    const snap = useSnapshot(state)
    const router = useRouter()
    router.query.id = userId

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [isNotified, setIsNotified] = React.useState(true)
    const [notifNumber, setNotifNumber] = React.useState(2)

    if (isSidebarOpen){

        return (
              <>
                  <motion.aside
                  className='fixed left-0 top-0 h-screen w-[400px] bg-white z-40 shadow-lg
                  flex flex-col gap-5 p-5 
                  '
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  transition={{
                      duration: 0.3
                  }}
                  end={{ x: -300 }}
                  >
                      <div
                      className='flex w-full justify-between items-center'
                      >
                          <span className='relative cursor-pointer'>
                              <BiBell className='text-3xl'/>
                              {isNotified && (
                                  <div
                                  className='flex items-center justify-center bg-red-600 rounded-full 
                                  w-[15px] h-[15px] absolute top-[-4px] right-[-4px] text-white text-sm'
                                  >
                                      {notifNumber}
                                  </div>
                              )}
                          </span>
                          <AiOutlineClose className='text-2xl cursor-pointer'
                          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                          />
                      </div>
      
                      <Link href={`/renters/${userId}/cars`}>
                          <span
                          className='w-full py-2 px-4 text-xl font-semibold 
                          cursor-pointer hover:shadow-lg ease-in-out duration-300
                          hover:bg-gray-200 flex gap-3 items-center
                          '
                          >
                              <IoCarSport /> Cars
                          </span>
                      </Link>
                      <Link href={`/renters/${userId}/offers`}>
                          <span
                          className='w-full py-2 px-4 text-xl font-semibold 
                          cursor-pointer hover:shadow-lg ease-in-out duration-300
                          hover:bg-gray-200 flex gap-3 items-center
                          '
                          >
                              <MdOutlineLocalOffer /> Offers
                          </span>
                      </Link>
                      <Link href={`/renters/${userId}/clients`}>
                          <span
                          className='w-full py-2 px-4 text-xl font-semibold 
                          cursor-pointer hover:shadow-lg ease-in-out duration-300
                          hover:bg-gray-200 flex gap-3 items-center
                          '
                          >
                              <AiOutlineUser /> Clients
                          </span>
                      </Link>
                      <Link href={`/renters/${userId}/statistics`}>
                          <span
                          className='w-full py-2 px-4 text-xl font-semibold 
                          cursor-pointer hover:shadow-lg ease-in-out duration-300
                          hover:bg-gray-200 flex gap-3 items-center
                          '
                          >
                              <AiOutlineLineChart /> Statistics
                          </span>
                      </Link>
                      
                          <span
                          className='w-full flex justify-end px-6 py-3 items-center gap-5
                          font-semibold absolute bottom-8 left-0 text-4xl '
                          >
                              <Link href={`/renters/${userId}/settings`} ><AiOutlineSetting className='cursor-pointer'/></Link>
                              <FiLogOut className='cursor-pointer'/>
                          </span>
                  </motion.aside>
      
                  <motion.div
                  className='fixed left-0 top-0 w-full h-screen bg-black bg-opacity-70 z-30'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                      duration: 0.3
                  }}
                  end={{ opacity: 0 }}
                  onClick={() => setIsSidebarOpen(false)}
                  ></motion.div>
              </>
        )
    }
    else {
        return (
              <div
              className={`fixed left-[-10px] top-1/2 transform -translate-y-1/2 flex flex-col 
              gap-5  h-[50px] z-50 rounded-r-full cursor-pointer bg-gray-900 text-gray-100
              hover:bg-black  hover:text-white ease-in-out duration-500 justify-center items-end pr-5
              hover:translate-x-[10px] w-[80px]
              `}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <AiOutlineDoubleRight className='text-3xl'/>
                  {isNotified && (
                      <div
                      className='flex items-center justify-center bg-red-600 rounded-full w-[25px] h-[25px] absolute top-[-4px] right-[-4px]'
                      >
                          {notifNumber}
                      </div>
                  )}
              </div>
        )
    }
}

export default SideBar