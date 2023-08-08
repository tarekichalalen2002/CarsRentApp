import React,{useState,useEffect} from "react";
import { Navbar } from "@/components";
import {AiOutlineSearch,AiFillStar} from "react-icons/ai";
import { motion } from "framer-motion";
import { bestSellers , usageSteps } from "@/utils/data";



export default function Renters() {
    const [usageStepsIndex, setUsageStepsIndex] = useState(0)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
        })
    }
    , [scroll])
    return (
        <main
        className="w-full"
        >
            <div
            className="w-full h-screen flex flex-col items-center"
            >
                <Navbar />
                {/* <div
                className="w-full flex flex-col items-center"
                > */}
                    <motion.div
                    className="mt-4 flex gap-5 relative "
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    >
                        <input 
                        className="border border-black rounded-full p-2 pl-12 w-[350px]"
                        placeholder="Search for renters . . ."
                        />
                        <button
                        className="p-2 px-4 bg-gray-950 text-white rounded-full
                        hover:bg-black ease-in-out duration-300 font-semibold
                        "
                        >
                            Seacrh Now
                        </button>
                        <AiOutlineSearch className="absolute text-gray-500 top-[10px] left-3 text-2xl"/>
                    </motion.div>
                    <div
                    className="w-full flex flex-col items-center gap-2 p-5"
                    >
                        <motion.h1
                        className="text-[32px] font-bold text-center w-[100vw] p-2"
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        >
                            Our Best Renters
                        </motion.h1>
                        <div
                        className="w-full grid grid-cols-3 gap-2"
                        >
                            {bestSellers.map((item,index) => (
                                <motion.div
                                className="flex flex-col gap-3 items-center w-full p-2"
                                key={index}
                                initial={{opacity: 0, x: -100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.5, delay: 0.3 + index * 0.1}}
                                >
                                    <img 
                                    src={item.image}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                    />
                                    <div
                                    className="flex flex-col gap-2 items-center"
                                    >
                                        <motion.h4
                                        className="text-center font-bold"
                                        >
                                            {item.name}
                                        </motion.h4>
                                        <span className="flex gap-2 font-bold">
                                            {item.rate} <AiFillStar className="text-yellow-500 text-2xl"/>
                                        </span>
                                        <button
                                        className="border-2 font-bold border-black rounded-lg p-2 px-4"
                                        >
                                            See Profile
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                className="h-[10px] w-full"
                ></div>
                { scroll > 0 && (
                    <div
                    className={`
                    w-full flex-col gap-5 mt-5 px-8 h-screen py-5 flex
                    `}
                    >
                        <div
                        className="flex flex-col gap-1 items-center w-1/2 self-center"
                        >
                            <motion.h1
                            className="text-[40px] font-bold ml-5 text-center"
                            initial={{opacity: 0, y: -100}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            >
                            How it works ?
                            </motion.h1>
                            <motion.p className="text-center"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: 0.2}}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            </motion.p>
                        </div>
                        <div
                        className="flex gap-2 items-center"
                        >
                            <motion.img 
                            src="/jeep.png"
                            className="w-1/2"
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            />
                            <motion.div
                            className="relative rounded-full w-[10px] h-[300px] bg-black"
                            initial={{opacity: 0, y: -100}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            >
                                <div
                                className={`absolute rounded-full bg-black text-white
                                flex items-center justify-center font-bold
                                cursor-pointer  hover:text-[25px]
                                hover:w-[40px] hover:h-[40px] hover:top-[-5px] hover:right-[-15px]
                                ease-in-out duration-300
                                ${usageStepsIndex === 0 ? "w-[40px] h-[40px] top-[-5px] right-[-15px] text-[25px]" : "top-0 w-[30px] right-[-10px] h-[30px] text-[20px]"}
                                `}
                                onClick={() => setUsageStepsIndex(0)}
                                >
                                    1
                                </div>
                                <div
                                className={`absolute rounded-full bg-black text-white
                                flex items-center justify-center font-bold
                                cursor-pointer  hover:text-[25px]
                                hover:w-[40px] hover:h-[40px] hover:top-[95px] hover:right-[-15px]
                                ease-in-out duration-300
                                ${usageStepsIndex === 1 ? "w-[40px] h-[40px] top-[95px] right-[-15px] text-[25px]" : "top-[100px] w-[30px] right-[-10px] h-[30px] text-[20px]"}
                                `}
                                onClick={() => setUsageStepsIndex(1)}
                                >
                                    2
                                </div>
                                <div
                                className={`absolute rounded-full bg-black text-white
                                flex items-center justify-center font-bold
                                cursor-pointer  hover:text-[25px]
                                hover:w-[40px] hover:h-[40px] hover:top-[195px] hover:right-[-15px]
                                ease-in-out duration-300
                                ${usageStepsIndex === 2 ? "w-[40px] h-[40px] top-[195px] right-[-15px] text-[25px]" : "top-[200px] w-[30px] right-[-10px] h-[30px] text-[20px]"}
                                `}
                                onClick={() => setUsageStepsIndex(2)}
                                >
                                    3
                                </div>
                                <div
                                className={`absolute rounded-full bg-black text-white
                                flex items-center justify-center font-bold
                                cursor-pointer  hover:text-[25px]
                                hover:w-[40px] hover:h-[40px] hover:top-[285px] hover:right-[-15px]
                                ease-in-out duration-300
                                ${usageStepsIndex === 3 ? "w-[40px] h-[40px] top-[285px] right-[-15px] text-[25px]" : "top-[290px] w-[30px] right-[-10px] h-[30px] text-[20px]"}
                                `}
                                onClick={() => setUsageStepsIndex(3)}
                                >
                                    4
                                </div>
                            </motion.div>
                            <div
                            className="h-full felx felx-col p-5"
                            >
                                {usageStepsIndex === 0 && (
                                    <div className="flex flex-col gap-7">
                                        <motion.h1
                                            className="text-[25px] font-bold pl-3"
                                            initial={{opacity: 0, x: 100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                        >
                                            {usageSteps[0].title}
                                        </motion.h1>
                                        <motion.p
                                        initial={{opacity:0,x:100}}
                                        animate={{opacity:1,x:0}}
                                        transition={{duration:0.5,delay:0.2}}
                                        className="pl-3"
                                        >
                                            {usageSteps[0].content}
                                        </motion.p>
                                    </div>
                                )}
                                {usageStepsIndex === 1 && (
                                    <div className="flex flex-col gap-7">
                                        <motion.h1
                                            className="text-[25px] font-bold pl-3"
                                            initial={{opacity: 0, x: 100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                        >
                                            {usageSteps[1].title}
                                        </motion.h1>
                                        <motion.p
                                        initial={{opacity:0,x:100}}
                                        animate={{opacity:1,x:0}}
                                        transition={{duration:0.5,delay:0.2}}
                                        className="pl-3"
                                        >
                                            {usageSteps[1].content}
                                        </motion.p>
                                    </div>
                                )}
                                {usageStepsIndex === 2 && (
                                    <div className="flex flex-col gap-7">
                                        <motion.h1
                                            className="text-[25px] font-bold pl-3"
                                            initial={{opacity: 0, x: 100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                        >
                                            {usageSteps[2].title}
                                        </motion.h1>
                                        <motion.p
                                        initial={{opacity:0,x:100}}
                                        animate={{opacity:1,x:0}}
                                        transition={{duration:0.5,delay:0.2}}
                                        className="pl-3"
                                        >
                                            {usageSteps[2].content}
                                        </motion.p>
                                    </div>
                                )}
                                {usageStepsIndex === 3 && (
                                    <div className="flex flex-col gap-7">
                                        <motion.h1
                                            className="text-[25px] font-bold pl-3"
                                            initial={{opacity: 0, x: 100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                        >
                                            {usageSteps[3].title}
                                        </motion.h1>
                                        <motion.p
                                        initial={{opacity:0,x:100}}
                                        animate={{opacity:1,x:0}}
                                        transition={{duration:0.5,delay:0.2}}
                                        className="pl-3"
                                        >
                                            {usageSteps[3].content}
                                        </motion.p>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                )}
            {/* </div> */}
        </main>
    )
}