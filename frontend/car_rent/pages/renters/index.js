import React,{useState,useEffect} from "react";
import { Navbar,Footer } from "@/components";
import {AiOutlineSearch,AiFillStar,AiOutlineStar} from "react-icons/ai";
import { motion } from "framer-motion";
import { bestSellers , usageSteps } from "@/utils/data";
import {BiUserPlus,BiTrendingUp} from "react-icons/bi";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "@/state";




export default function Renters() {
    const [usageStepsIndex, setUsageStepsIndex] = useState(0)
    const [scroll, setScroll] = useState(0)

    const snap = useSnapshot(state)

    useEffect(() => {
        window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
        })
    }
    , [scroll])
    return (
        <main
        className="w-[100%] overflow-x-hidden"
        >
            <div
            className="w-full h-screen flex flex-col items-center"
            >
                <Navbar />
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
                                        <Link href={`/renters/${index}`}>
                                            <button
                                            className="border-2 font-bold border-black rounded-lg p-2 px-4"
                                            onClick={() => state.loggedUserId=index}
                                            >
                                                See Profile
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                className="h-[10px] w-full"
                ></div>

                {/* -------------------------------------------------------------------- WHY US ---------------------------------------------------------- */}
                {
                    scroll > 0 && (
                        <section
                        className="w-full h-screen flex flex-col items-center p-5 gap-2"
                        >
                            <motion.h1
                            className="text-[40px] font-bold text-center w-[100vw] p-2"
                            initial={{opacity: 0, y: -100}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            >
                                Why Us ?
                            </motion.h1>

                            <div
                            className="grid grid-cols-2 ml-10"
                            >
                                <div
                                className="flex flex-col col-span-1"
                                >
                                    <div
                                    className="flex gap-10 items-center w-full p-5"
                                    >
                                        <motion.div
                                        className=""
                                        initial={{opacity: 0, x: -100}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5}}
                                        >
                                            <BiUserPlus className="text-[70px] text-black"/>
                                        </motion.div>
                                        <div
                                        className="flex flex-col gap-2 items-start w-2/3"
                                        >
                                            <motion.h3
                                            className="flex text-[25px] font-bold text-start"
                                            initial={{opacity: 0, x: -100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                            >
                                                Get More Customers
                                            </motion.h3>
                                            <motion.p
                                            initial={{opacity: 0, x: -100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5, delay: 0.2}}
                                            >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                                            </motion.p>
                                        </div>
                                    </div>

                                    <div
                                    className="flex gap-10 items-center w-full p-5"
                                    >
                                        <motion.div
                                        className=""
                                        initial={{opacity: 0, x: -100}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5}}
                                        >
                                            <AiOutlineStar className="text-[70px] text-black"/>
                                        </motion.div>
                                        <div
                                        className="flex flex-col gap-2 items-start w-2/3"
                                        >
                                            <motion.h3
                                            className="flex text-[25px] font-bold text-start"
                                            initial={{opacity: 0, x: -100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                            >
                                                More Relevent Feedback
                                            </motion.h3>
                                            <motion.p
                                            initial={{opacity: 0, x: -100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5, delay: 0.2}}
                                            >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                                            </motion.p>
                                        </div>
                                    </div>

                                    <div
                                    className="flex gap-10 items-center w-full p-5"
                                    >
                                        <motion.div
                                        className=""
                                        initial={{opacity: 0, x: -100}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5}}
                                        >
                                            <BiTrendingUp className="text-[70px] text-black"/>
                                        </motion.div>
                                        <div
                                        className="flex flex-col gap-2 items-start w-2/3"
                                        >
                                            <motion.h3
                                            className="flex text-[25px] font-bold text-start"
                                            initial={{opacity: 0, x: -100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                            >
                                                Scale Your Business
                                            </motion.h3>
                                            <motion.p
                                            initial={{opacity: 0, x: -100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5, delay: 0.2}}
                                            >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                className="col-span-1 flex items-center justify-center w-full h-full"
                                >
                                    <motion.img 
                                    src="/golf7.png"
                                    className="object-cover"
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.5}}
                                    />
                                </div>
                            </div>
                        </section>
                    )
                }
                <section className="h-screen">
                    { scroll >600 && (
                        <div
                        className={`
                        w-full flex-col gap-5 mt-5 px-8 h-full py-5 flex
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
                                            className="pl-3 text-[20px]"
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
                                            className="pl-3 text-[20px]"
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
                                            className="pl-3 text-[20px]"
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
                                            className="pl-3 text-[20px]"
                                            >
                                                {usageSteps[3].content}
                                            </motion.p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                        </div>
                    )}

                </section>

                

            <Footer />
        </main>
    )
}