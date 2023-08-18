import React,{useState} from "react";
import {
    SideBar,
    DashboardHeader,
} from "@/components";
import {motion} from "framer-motion";
import {
    AiOutlineSearch,
    AiOutlineCheck,
    AiOutlineStar,
    AiFillStar,
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineDelete,
    AiOutlineClose,
    AiOutlineFieldTime,
} from "react-icons/ai";
import {clients} from "../../../utils/data";

export default function Clients() {
    return (
        <main>
            <section
            className="w-full min-h-screen flex flex-col items-center py-[70px]"
            >
                <DashboardHeader />
                <h1
                className="text-4xl font-bold w-full text-center"
                >
                    Your Clients List
                </h1>
                <div
                className="flex justify-center w-full mt-7"
                >
                    <div
                        className="mt-4 flex gap-5 relative "
                        >
                            <motion.input 
                            className="border border-black rounded-full p-2 pl-12 w-[350px]"
                            placeholder="Search in your clients . . ."
                            initial={{x: -100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.3}}
                            />
                            <motion.button
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.3}}
                            className="p-2 px-4 bg-gray-950 text-white rounded-full
                            hover:bg-black ease-in-out duration-300 font-semibold
                            "
                            >
                                Seacrh Now
                            </motion.button>
                            <AiOutlineSearch className="absolute text-gray-500 top-[10px] left-3 text-2xl"/>
                    </div>
                </div>
                
                <div
                className="flex flex-col w-full mt-5"
                >
                    {clients.map((client,index) => {
                        const [isSelect,setIsSelected] = useState(false);
                        const [isFavorite,setIsFavorite] = useState(false);
                        const [isDetailsVisible,setIsDetailsVisible] = useState(false);
                        return (
                            <div
                            className={`
                            grid grid-cols-12 px-[100px] py-2 gap-2 hover:shadow-lg cursor-pointer min-h-[50px]
                            ${(isSelect || isDetailsVisible) && "bg-blue-200"}
                            `}
                            key={index}
                            >
                                <div
                                className="col-span-1 flex justify-center items-center gap-2 w-full h-full text-gray-800"
                                >
                                    <div
                                    className="border border-gray-800 w-[15px] h-[15px] flex justify-center items-center"
                                    onClick={() => {setIsSelected(!isSelect)}}
                                    >
                                        {isSelect && <AiOutlineCheck />}
                                        
                                    </div>

                                    <div
                                    className="flex justify-center items-center"
                                    onClick={() => {setIsFavorite(!isFavorite)}}
                                    >
                                        {isFavorite ? <AiFillStar className="text-xl text-yellow-500"/> : <AiOutlineStar className="text-xl "/>}
                                    </div>
                                </div>
                                <div
                                className="col-span-3 flex gap-2 items-center"
                                onClick={() => {setIsDetailsVisible(!isDetailsVisible)}}
                                >
                                    <p>{client.name}</p>
                                </div>

                                <div
                                className="col-span-3 flex gap-2 items-center"
                                onClick={() => {setIsDetailsVisible(!isDetailsVisible)}}
                                >
                                    <AiOutlinePhone className="text-xl"/>
                                    <p>{client.phone}</p>
                                </div>

                                <div
                                className="col-span-3 flex gap-2 items-center"
                                onClick={() => {setIsDetailsVisible(!isDetailsVisible)}}
                                >
                                    <AiOutlineMail className="text-xl"/>
                                    <p>{client.email}</p>
                                </div>

                                <div className="col-span-1 flex gap-2 items-center"></div>
                                <div
                                className="col-span-1 items-center justify-center"
                                >
                                    <AiOutlineDelete className="text-xl"/>
                                </div>

                                {isDetailsVisible && (
                                    <motion.div
                                    className="col-span-12 w-full
                                    
                                    "
                                    initial={{ opacity: 0 , height: 0}}
                                    animate={{ opacity: 1 , height: "auto"}}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                    }}
                                    >
                                        <div
                                        className="flex flex-col w-full"
                                        >
                                            <h1 className="pl-10 font-semibold mt-3 mb-2">Offers Purchased:</h1>
                                            {client.offers.map((offer,index) => (
                                                <div
                                                    className="grid grid-cols-12 hover:shadow-lg pl-10 p-2"
                                                >
                                                    <span
                                                    className="col-span-3 flex items-center gap-2 font-semibold"
                                                    >
                                                        {offer.title}
                                                    </span>
                                                    <span
                                                    className={`
                                                    col-span-5 flex items-center gap-2 font-semibold
                                                    ${offer.status === "Closed" && "text-green-600"}
                                                    ${offer.status === "Cancelled" && "text-red-600"}
                                                    ${offer.status === "Pending" && "text-gray-600"}
                                                    `}
                                                    >
                                                        {offer.status}
                                                        {offer.status === "Closed" && <AiOutlineCheck className="text-xl"/>}
                                                        {offer.status === "Cancelled" && <AiOutlineClose className="text-xl"/>}
                                                        {offer.status === "Pending" && <AiOutlineFieldTime className="text-xl"/>}
                                                    </span>
                                                    <span
                                                    className="col-span-2 cursor-pointer font-semibold text-gray-700 hover:text-black ease-in-out duration-300"
                                                    >
                                                        See details . . .
                                                    </span>
                                                    <span
                                                    className="col-span-2 flex items-center gap-2 font-semibold"
                                                    >
                                                        <AiOutlineDelete />
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                    </motion.div>
                                )}
                            </div>
                        )
                    })}   
                </div>

                <SideBar />

            </section>
        </main>
    )
}