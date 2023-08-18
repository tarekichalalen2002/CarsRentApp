import React ,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'

import {bestRenters,bestOffers,cars} from '../../../utils/data'
import { Navbar, SmoothScrollLink,SideBar } from '@/components'
import { motion } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'
import { 
    AiOutlineRight , 
    AiOutlineLeft,
    AiOutlineEdit ,
    AiOutlineFieldTime ,
    AiOutlinePlusSquare,
} from 'react-icons/ai'
import { MdAirlineSeatReclineExtra,MdOutlineLocalOffer } from 'react-icons/md'
import { GiEntryDoor } from 'react-icons/gi'
import { FaHorse,FaHandshake } from 'react-icons/fa'
import CountUp from 'react-countup'
import { IoCarSport } from 'react-icons/io5'

export default function Renter() {
    const [renter, setRenter] = useState(null)
    const [currentWidget, setCurrentWidget] = useState(0)
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [previousCarIndex, setPreviousCarIndex] = useState(cars.length-1);
    const [nextCarIndex, setNextCarIndex] = useState(1);
    const [loggedIn, setLoggedIn] = useState(true)
    const [imageHovered, setImageHovered] = useState(false)


    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        const { id } = router.query
        if (bestRenters[id]){
            setRenter(bestRenters[id])
        }
    }, [router])
    const Stars = []
    if (renter !== null) {
        
        for (let i = 0; i < parseInt(renter.rate); i++) {
            Stars.push(<AiFillStar key={i} />)
        }
    }

    const handleNext = () => {
        setCurrentCarIndex(nextCarIndex)
        setPreviousCarIndex(currentCarIndex)
        setNextCarIndex((nextCarIndex+1) % (cars.length))
    }
    const handlePrevious = () => {
        setCurrentCarIndex(previousCarIndex)
        setNextCarIndex(currentCarIndex)
        setPreviousCarIndex((previousCarIndex-1+cars.length) % (cars.length))
    }


    // console.log(nb);

    
    return (
        <main className='w-full p-0 max-w-[100vw] overflow-x-hidden'>
            {!loggedIn ? (
                <>
                    <section
                    className='h-screen relative flex flex-col items-center'
                    >
                        <Navbar />
                        {
                            renter && (
                                <div className='flex flex-col items-center'>      
                                    <div
                                    className='flex justify-center py-5'
                                    >
                                        <motion.img 
                                            src={renter.image}
                                            className="w-[250px] h-[250px] rounded-full object-cover shadow-lg"
                                            initial={{ opacity: 0, y: -100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                        />
                                    </div>
                                    <div
                                    className='flex flex-col gap-3 items-center w-1/3'
                                    >
                                        <motion.h1 className='text-2xl font-bold'
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20
                                        }}
                                        >
                                            {renter.name}
                                        </motion.h1>
                                        <motion.p className='text-center'
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1
                                        }}
                                        >
                                            {renter.description}
                                        </motion.p>
                                        <motion.div className='flex gap-1 text-yellow-500 text-3xl'
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.2
                                        }}
                                        >
                                            { Stars.map((star) => star)}
                                        </motion.div>
                                    </div>
                                </div>
                            )
                        }
                        <div
                        className='w-1/2 h-[3px] bg-black my-5'
                        >

                        </div>
                        <div
                        className='h-[75px] w-1/2 absolute bottom-0 grid grid-cols-3 gap-2'
                        >
                            <div
                            className={`flex items-center justify-center w-full text-xl font-semibold cursor-pointer
                            hover:text-orange-700 ease-in-out duration-300 ${currentWidget === 0 ? 'text-orange-700' : 'text-black'}`}
                            onClick={() => setCurrentWidget(0)}
                            >
                                <SmoothScrollLink href="#body">Offers</SmoothScrollLink>
                            </div>
                            <div
                            className={`flex items-center justify-center w-full text-xl font-semibold cursor-pointer
                            hover:text-orange-700 ease-in-out duration-300 ${currentWidget === 1 ? 'text-orange-700' : 'text-black'}`}
                            onClick={() => setCurrentWidget(1)}
                            >
                                <SmoothScrollLink href="#body">Cars</SmoothScrollLink>
                            </div>
                            <div
                            className={`flex items-center justify-center w-full text-xl font-semibold cursor-pointer
                            hover:text-orange-700 ease-in-out duration-300 ${currentWidget === 2 ? 'text-orange-700' : 'text-black'}`}
                            onClick={() => setCurrentWidget(2)}
                            >
                                <SmoothScrollLink href="#body">About</SmoothScrollLink>
                            </div>
                        </div>
                    </section>
                    <section
                        id="body"
                        className='w-full min-h-screen'
                    >
                        {currentWidget === 0 && (
                            <div
                            className='flex flex-col items-center gap-[100px] p-5 '
                            >
                                {bestOffers.map((offer) => (
                                    <div 
                                    className='w-full flex gap-5 items-center px-[100px] relative shadow-lg py-5'
                                    >
                                        <motion.button className='absolute right-[100px] bottom-5 px-4 text-white bg-black font-bold rounded-xl p-2'
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.35
                                            }}
                                        >
                                            Purchase
                                        </motion.button>
                                        <motion.img src={offer.image} className='w-[400px] h-[250px] rounded-lg object-cover shadow-lg' 
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                            }}
                                        />
                                        <div 
                                        className='flex flex-col gap-1 justify-start h-[250px]'
                                        >

                                            <motion.span className='flex gap-2'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.05
                                            }}
                                            >
                                                <motion.h1 className='font-bold'>
                                                    Title: 
                                                </motion.h1>
                                                <motion.p className=''>
                                                    {offer.title}
                                                </motion.p>
                                            </motion.span>

                                            <motion.span className='flex gap-2'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1
                                            }}
                                            >
                                                <motion.h1 className='font-bold'>
                                                    Description: 
                                                </motion.h1>
                                                <motion.p className=''>
                                                    {offer.description}
                                                </motion.p>
                                            </motion.span>

                                            <motion.span className='flex gap-2'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.15
                                            }}
                                            >
                                                <motion.h1 className='font-bold'>
                                                    Price: 
                                                </motion.h1>
                                                <motion.p className=''>
                                                    {offer.price} DA / {offer.duration} Days
                                                </motion.p>
                                            </motion.span>

                                            <motion.span className='flex gap-2'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.2
                                            }}
                                            >
                                                <motion.h1 className='font-bold'>
                                                    Car: 
                                                </motion.h1>
                                                <motion.p className=''>
                                                    {offer.car.name} {offer.car.brand} {offer.car.year} 
                                                </motion.p>
                                            </motion.span>

                                            <motion.span className='flex gap-2'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.25
                                            }}
                                            >
                                                <motion.h1 className='font-bold'>
                                                    Paying Methods: 
                                                </motion.h1>
                                                <motion.p className=''>
                                                    {offer.payment_ways.map((method) => (method+' '))}
                                                </motion.p>
                                            </motion.span>

                                            <motion.span className='flex gap-2'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.3
                                            }}
                                            >
                                                <motion.h1 className='font-bold'>
                                                    Avg Rate: 
                                                </motion.h1>
                                                <motion.p className='flex gap-1'>
                                                    {offer.rate} <AiFillStar className='text-2xl text-yellow-500'/>
                                                </motion.p>
                                            </motion.span>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {currentWidget === 1 && (
                            <motion.div
                            className='h-screen relative'
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            >
                                <div
                                className='flex px-10 py-5 justify-center gap-10'
                                >
                                    {cars.map((car,index) => (
                                    <>
                                        <motion.img 
                                        key={index}
                                        src={car.image}
                                        className={`w-[400px] h-[250px] object-cover absolute rounded-xl
                                        ${index === nextCarIndex && "translate-x-[450px] scale-50 opacity-100"}
                                        ${index === previousCarIndex && "translate-x-[-450px] scale-50 opacity-100"}
                                        ${index === currentCarIndex && "translate-x-[0px] scale-100 z-40 opacity-100"}
                                        ${(index !== currentCarIndex & index !== nextCarIndex & index !== previousCarIndex ) && "z-0 opacity-0"}
                                        ease-in-out duration-500
                                        `}
                                        />
                                        {index === currentCarIndex && (
                                            <div
                                            className='absolute w-full h-[250px] bottom-28 flex flex-col gap-3 items-center'
                                            >
                                                <motion.h1 className='text-2xl font-bold w-full text-center'>
                                                    {cars[currentCarIndex].name}
                                                </motion.h1>
                                                <div
                                                className='grid grid-cols-2 gap-[100px] w-1/2 text-xl mt-[20px]'
                                                >

                                                    <div
                                                    className='flex flex-col gap-2 items-center w-full'
                                                    >
                                                        <motion.span className='flex gap-2 items-center'
                                                        initial={{ opacity: 0, x: -100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.05
                                                        }}
                                                        end={{ opacity: 0, x: -100 }}
                                                        >
                                                            <h1 className='font-bold text-3xl'><MdAirlineSeatReclineExtra /> </h1> {cars[currentCarIndex].number_of_seats}
                                                        </motion.span>

                                                        <motion.span className='flex gap-2 items-center'
                                                        initial={{ opacity: 0, x: -100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.05
                                                        }}
                                                        end={{ opacity: 0, x: -100 }}
                                                        >
                                                            <h1 className='font-bold text-3xl'><GiEntryDoor /> </h1> {cars[currentCarIndex].number_of_doors}
                                                        </motion.span>

                                                        <motion.span className='flex gap-2 items-center'
                                                        initial={{ opacity: 0, x: -100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.05
                                                        }}
                                                        end={{ opacity: 0, x: -100 }}
                                                        >
                                                            <h1 className='font-bold text-3xl'><FaHorse /> </h1> {cars[currentCarIndex].horse_power}
                                                        </motion.span>

                                                    </div>

                                                    <div
                                                    className='flex flex-col gap-2 items-center w-full'
                                                    >
                                                        <motion.span className='flex gap-2 items-center'
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.05
                                                        }}
                                                        end={{ opacity: 0, x: -100 }}
                                                        >
                                                            <h1 className='font-bold'>Brand :</h1> {cars[currentCarIndex].brand} <img src={cars[currentCarIndex].brand_image} className='w-7'/>
                                                        </motion.span>

                                                        <motion.span className='flex gap-2 items-center'
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.05
                                                        }}
                                                        end={{ opacity: 0, x: -100 }}
                                                        >
                                                            <h1 className='font-bold'>Model :</h1> {cars[currentCarIndex].model}
                                                        </motion.span>

                                                        <motion.span className='flex gap-2 items-center'
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.05
                                                        }}
                                                        end={{ opacity: 0, x: -100 }}
                                                        >
                                                            <h1 className='font-bold'>Year :</h1> {cars[currentCarIndex].year}
                                                        </motion.span>
                                                    </div>
                                                </div>
                                                <div
                                                className='flex gap-3 items-center w-full justify-center mt-[50px]'
                                                >
                                                    {cars.map((car,i) =>(
                                                        <div
                                                        className={`
                                                        w-2 h-2 rounded-full
                                                        ${i !== currentCarIndex ? "bg-white border border-black" : "bg-black"}
                                                        cursor-pointer
                                                        `}
                                                        onClick={() => {
                                                            setCurrentCarIndex(i)
                                                            setPreviousCarIndex((i-1+cars.length) % (cars.length))
                                                            setNextCarIndex((i+1) % (cars.length))
                                                        }}
                                                        >

                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>))}
                                    
                                    <button
                                    onClick={handlePrevious}
                                    className="absolute bottom-10 left-1/3 flex items-center gap-1 text-lg font-bold border border-black rounded-xl py-2 w-28
                                    hover:bg-black hover:text-white ease-in-out duration-300 justify-center
                                    "
                                    >
                                        <AiOutlineLeft /> Previous 
                                    </button>
                                    <button 
                                    onClick={handleNext}
                                    className="absolute bottom-10 right-1/3 flex items-center gap-1 text-lg font-bold border border-black rounded-xl py-2 w-28
                                    hover:bg-black hover:text-white ease-in-out duration-300 justify-center
                                    "
                                    >
                                        Next <AiOutlineRight />
                                    </button>
                                </div>
                                
                            </motion.div>
                            
                        )}
                        
                    </section>
                </>
            ) : (
                <>
                    <section
                    className='flex flex-col gap-4 p-5'
                    >
                        {renter && (
                            <div
                            className=''
                            >
                                <div
                                className='grid grid-cols-12 gap-2'
                                >
                                    <div
                                    className='relative cursor-pointer rounded-full col-span-2'
                                    onMouseEnter={() => setImageHovered(true)}
                                    onMouseLeave={() => setImageHovered(false)}
                                    >
                                        <img src={renter.image}
                                        className="w-[200px] h-[200px] rounded-full object-cover shadow-lg"
                                        />
                                        {imageHovered && (
                                            <>
                                                <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duraation: 0.5
                                                }}
                                                className='w-[200px] h-[200px] rounded-full absolute
                                                top-0 inset-0 backdrop-blur-lg backdrop-opacity-100'
                                                ></motion.div>
                                                <div
                                                className='w-[200px] h-[200px] rounded-full absolute
                                                top-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'
                                                >
                                                    <button className='text-white font-bold flex gap-3 items-center'>
                                                        update picture <AiOutlineEdit className='text-2xl'/>
                                                    </button>
                                                </div>
                                            </>
                                            )
                                        }
                                    </div>

                                    <div
                                    className='col-span-5 flex flex-col gap-2'
                                    >
                                        <div
                                        className='grid grid-cols-12 border border-black shadow-sm rounded-lg p-2'
                                        >
                                            <div
                                            className='col-span-3 flex flex-col gap-1 px-1 font-bold'
                                            >
                                                <h3>Name: </h3>
                                            </div>

                                            <div
                                            className='col-span-8 flex flex-col gap-1 px-1'
                                            >
                                                <p>{renter.name}</p>
                                            </div>

                                            <div
                                            className='text-2xl flex justify-center cursor-pointer'
                                            >
                                                <AiOutlineEdit />
                                            </div>
                                        </div>

                                        <div
                                        className='grid grid-cols-12 border border-black shadow-sm rounded-lg p-2'
                                        >
                                            <div
                                            className='col-span-3 flex flex-col gap-1 px-1 font-bold'
                                            >
                                                <h3>Bio: </h3>
                                            </div>

                                            <div
                                            className='col-span-8 flex flex-col gap-1 px-1'
                                            >
                                                <p>{renter.description}</p>
                                            </div>

                                            <div
                                            className='text-2xl flex justify-center cursor-pointer'
                                            >
                                                <AiOutlineEdit />
                                            </div>
                                        </div>

                                        <div
                                        className='grid grid-cols-12 border border-black shadow-sm rounded-lg p-2'
                                        >
                                            <div
                                            className='col-span-3 flex flex-col gap-1 px-1 font-bold'
                                            >
                                                <h3>Avg rate: </h3>
                                            </div>

                                            <div
                                            className='col-span-8 flex gap-2 px-1'
                                            >
                                                <p>{renter.rate}</p> <AiFillStar className='text-xl text-yellow-500'/>
                                            </div>
                                        </div>


                                    </div>

                                    <div
                                    className='col-span-5 flex flex-col gap-2'
                                    >
                                        <div
                                        className='grid grid-cols-12 border border-black shadow-sm rounded-lg p-2'
                                        >
                                            <div
                                            className='col-span-3 flex flex-col gap-1 px-1 font-bold'
                                            >
                                                <h3>Address: </h3>
                                            </div>

                                            <div
                                            className='col-span-8 flex flex-col gap-1 px-1'
                                            >
                                                <p>{renter.address}</p>
                                            </div>

                                            <div
                                            className='text-2xl flex justify-center cursor-pointer'
                                            >
                                                <AiOutlineEdit />
                                            </div>
                                        </div>

                                        <div
                                        className='grid grid-cols-12 border border-black shadow-sm rounded-lg p-2'
                                        >
                                            <div
                                            className='col-span-3 flex flex-col gap-1 px-1 font-bold'
                                            >
                                                <h3>Email: </h3>
                                            </div>

                                            <div
                                            className='col-span-8 flex flex-col gap-1 px-1'
                                            >
                                                <p>{renter.email}</p>
                                            </div>

                                            <div
                                            className='text-2xl flex justify-center cursor-pointer'
                                            >
                                                <AiOutlineEdit />
                                            </div>
                                        </div>

                                        <div
                                        className='grid grid-cols-12 border border-black shadow-sm rounded-lg p-2'
                                        >
                                            <div
                                            className='col-span-3 flex flex-col gap-1 px-1 font-bold'
                                            >
                                                <h3>Phone : </h3>
                                            </div>

                                            <div
                                            className='col-span-8 flex gap-2 px-1'
                                            >
                                                <p>{renter.phone}</p>
                                            </div>

                                            <div
                                            className='text-2xl flex justify-center cursor-pointer'
                                            >
                                                <AiOutlineEdit />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                className='grid grid-cols-3 gap-4 w-full mt-[50px]'
                                >
                                    <div
                                    className='flex flex-col gap-4 items-center justify-center col-span-1 p-10'
                                    >
                                        <IoCarSport className='text-[70px]'/>
                                        <CountUp end={7} duration={3} className='text-5xl font-bold'/>
                                        <button
                                        className='bg-black text-white py-2 px-4 font-bold rounded-xl flex gap-2 items-center'
                                        >Add Car <AiOutlinePlusSquare className='text-2xl'/></button>
                                    </div>
                                    <div
                                    className='flex flex-col gap-4 items-center justify-center col-span-1 p-10'
                                    >
                                        <MdOutlineLocalOffer className='text-[70px]'/>
                                        <CountUp end={16} duration={3} className='text-5xl font-bold'/>
                                        <button
                                        className='bg-black text-white py-2 px-4 font-bold rounded-xl flex gap-2 items-center'
                                        >Add Offere <AiOutlinePlusSquare className='text-2xl'/></button>
                                    </div>
                                    <div
                                    className='flex flex-col gap-4 items-center justify-center col-span-1 p-10'
                                    >
                                        <FaHandshake className='text-[70px]'/>
                                        <CountUp end={103} duration={3} className='text-5xl font-bold'/>
                                        <button
                                        className='bg-black text-white py-2 px-4 font-bold rounded-xl flex gap-2 items-center'
                                        >See History <AiOutlineFieldTime className='text-2xl'/></button>
                                    </div>
                                </div>
                                
                            </div>
                        )}
                        
                        <SideBar userId={id}/>
                       
                    </section>
                </>
            ) }  
            
        </main>
    )
}