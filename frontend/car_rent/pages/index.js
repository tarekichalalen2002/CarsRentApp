import { Inter } from 'next/font/google'
import { 
  Navbar, 
  SmoothScrollLink, 
  Slider,
  Testomonial,
  Offer,
  Footer,
} from '@/components'
import CarModel from '@/canvas'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import {AiOutlineArrowDown, AiOutlineArrowUp,AiFillStar} from 'react-icons/ai'
import { useState,useEffect } from 'react'
import { bestOffers,bestRenters,testimonials } from '@/utils/data'
import CountUp from 'react-countup'
import { FaUserAlt } from 'react-icons/fa'
import { IoCarSport } from 'react-icons/io5'
import {MdLocalOffer} from 'react-icons/md'
import {BsArrowReturnRight} from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isSeeMoreHover, setIsSeeMoreHover] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  }
  , [scroll])
  let offersCardsAnimationDelay = 0
  return (
    <main
      className={`${inter.className} scroll-smooth w-[100%] overflow-x-hidden`}
    >
      <header className='h-[200vh] w-full p-5'
      id="header"
      >

        <Canvas 
        className='absolute top-0 left-0 bottom-0 z-[-1]'
        >
          <ambientLight intensity={2} />
          <directionalLight color="white" intensity={2} position={[5, 10, 5]} />
          <motion.mesh
            initial={{ opacity: 0, y: -100 , rotation: [0, 0, 0] }}
            animate={{ opacity: 1, y: 0, rotation: [1.3, 1.4, 1] }}
          >
            <CarModel />
          </motion.mesh>
          
        </Canvas>
        <span className="absolute top-0 left-0 w-full">
          <Navbar />
        </span>
        <div className='absolute left-[100px] top-[150px]'>
          <motion.h1 className='text-[60px] font-extrabold  w-1/2'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Car Rent in Algeria
          </motion.h1>
          <motion.p
            className='text-[20px] font-bold w-[60%] text-gray-900 mt-10 leading-10'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <SmoothScrollLink href='#see-more'>
            <motion.div
              className='flex items-center gap-5 mt-12 justify-end w-[40%] cursor-pointer'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              onHoverStart={() => setIsSeeMoreHover(true)} 
              onHoverEnd={() => setIsSeeMoreHover(false)} 
            >
              <p className='font-bold text-xl'>See more</p>
              <button
                className={` text-white p-4 rounded-full
                ${isSeeMoreHover ? 'bg-black translate-y-2' : 'bg-gray-900 translate-y-0'}
                ease-in-out duration-300
                `}
              >
                <AiOutlineArrowDown className='text-2xl' />
              </button>
            </motion.div>
          </SmoothScrollLink>
        </div>
        <div
        id="see-more"
        className={`
        absolute left-[40%] top-[100vh] py-10
        `}
        >
          {scroll > 400 && (
            <div
            className='flex flex-col gap-5'
            >
              <motion.h1 className='text-[42px] font-extrabold'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Services
              </motion.h1>
              <motion.p
              className='text-[20px] font-semibold text-gray-900 leading-10'
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 , delay:0.2}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>
              <div 
              className='flex gap-5 items-center'
              >
                <SmoothScrollLink href='#best-offers'>
                  <motion.button
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6}}
                  className='bg-black w-[200px] h-[50px] text-white rounded-full font-bold text-xl mt-4'
                  >
                    See Offers
                  </motion.button>
                </SmoothScrollLink>
                <motion.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6}}
                className='w-[200px] h-[50px] rounded-full border-2 border-black font-bold text-xl mt-4'
                >
                  Rent Cars
                </motion.button>
              </div>
            </div>
          )}
        </div>
        {
            scroll >300 && (
              <SmoothScrollLink href='#header'>
                <motion.button
                className={`
                fixed top-[25px] left-[50px] bg-gray-800 w-[50px] h-[50px] text-white rounded-full font-bold text-xl flex items-center justify-center
                ${scroll > 1 ? 'opacity-100' : 'opacity-0'}
                hover:bg-black hover:translate-y-[-10px]
                ease-in-out duration-500
                `}
                >
                  <AiOutlineArrowUp className='text-2xl' />
                </motion.button>
              </SmoothScrollLink>
            )

          }
      </header>

      <section
      className='h-[20vh] w-full grid grid-cols-3 px-10 py-5 bg-black text-white  '
      >
        <div className='flex items-center justify-center'>
          <span className=' flex gap-3 text-3xl items-center'
          >
            <FaUserAlt className='text-4xl' />
            <CountUp
            start={100}
            end={1562}
            duration={3}
            > 
            {({ countUpRef, start }) => {
              scroll == 800 && start()
              return (
                <span ref={countUpRef}/>
              )
            }}

            </CountUp>
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <span className=' flex gap-3 text-3xl items-center'
          >
            <IoCarSport className='text-4xl' />
            <CountUp
            start={100}
            end={2381}
            duration={3}
            > 
            {({ countUpRef, start }) => {
              scroll == 800 && start()
              return (
                <span ref={countUpRef}/>
              )
            }}

            </CountUp>
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <span className=' flex gap-3 text-3xl items-center'
          >
            <MdLocalOffer className='text-4xl' />
            <CountUp
            start={100}
            end={5134}
            duration={3}
            > 
            {({ countUpRef, start }) => {
              scroll == 800 && start()
              return (
                <span ref={countUpRef}/>
              )
            }}

            </CountUp>
          </span>
        </div>
      </section>

      <section
          className='h-[100vh] w-full flex flex-col p-10 items-center'
          id="best-offers"
          > 
      {scroll > 800 && (
        <>
          
          <motion.h1
            className='text-[42px] font-extrabold'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
          >
            Best Offers
          </motion.h1>
        
          <div
          className='flex items-center justify-between w-full px-10'
          >
            {bestOffers.map((offer, index) => {
              offersCardsAnimationDelay += 0.2
              return (
                <Offer offer={offer} key={index} offersCardsAnimationDelay={offersCardsAnimationDelay} size="w-[300px] h-[350px]"/>
                )
            })}
          </div>
          <motion.button className='mt-10 w-[350px] text-[20px] font-semibold ease-in-out duration-300 flex justify-center items-center gap-2 hover:text-blue-900'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          >
            See More Offers <span className=''><BsArrowReturnRight /></span>
          </motion.button>
        </>
        )
      }
      </section>

      <section
      className='h-[100vh] w-full flex flex-col p-10 items-center bg-black'
      id="best-renters"
      >
        {scroll > 1600 && (
          <div className='w-full flex flex-col gap-5'>
            <motion.h1
              className='text-[42px] font-extrabold text-white text-center'
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5}}
            >
              Best Renters
            </motion.h1>
            <Slider data={bestRenters}/>
          </div>
        )}
      </section>

      <section
      className='h-[100vh] w-full flex flex-col p-10 items-center'
      id="testimonials"
      >
        {scroll > 2200 && (
          <>  
            <motion.h1 className='text-[42px] font-extrabold'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
            >
              Testimonials
            </motion.h1>
            <div className='flex gap-4 w-full px-10'>
              {testimonials.map((testimonial, index) => (
                <Testomonial key={index} testomonial={testimonial} index={index} />
              ))}
            </div>
            <motion.button className='mt-16 w-[350px] text-[20px] font-semibold ease-in-out duration-300 flex justify-center items-center gap-2 hover:text-blue-900'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            >
              Try it Yourself<span className=''><BsArrowReturnRight /></span>
            </motion.button>
          </>
        )}
      </section>

      <Footer />
      

      
    </main>
  )
}
