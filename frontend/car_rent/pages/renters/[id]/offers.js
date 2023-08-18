import React,{useState,useEffect} from "react";
import { DashboardHeader,Offer,SideBar } from "@/components";
import {motion} from "framer-motion";
import {AiOutlineSearch , AiFillStar,AiOutlineEdit,AiOutlinePlusCircle} from "react-icons/ai";
import { useRouter } from "next/router";
import { recommendedOffers } from "@/utils/data";
import Link from "next/link";


export default function Offers() {
    const [renterId, setRenterid] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const { id } = router.query;
        setRenterid(id);
    }, []);
    
    return (
        <main
        >
            <DashboardHeader />
            <section
                className="w-full min-h-screen flex flex-col py-[100px] px-4"
            >
                <div
                className="flex justify-center w-full"
                >
                    <div
                        className="mt-4 flex gap-5 relative "
                        >
                            <motion.input 
                            className="border border-black rounded-full p-2 pl-12 w-[350px]"
                            placeholder="Search in your rent offers . . ."
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
                            <AiOutlineSearch className="absolute text-gray-500 top-[7px] left-3 text-2xl"/>
                    </div>
                </div>
                <h1
                className="w-full text-center text-4xl font-bold mt-10"
                >
                    Your Rent Offers
                </h1>

                <div
                className="w-full grid grid-cols-4 gap-4 mt-7"
                >
                    {recommendedOffers.map((offer, index) => (
                        <div
                        className="px-3 pb-7 pt-1 shadow-xl rounded-xl flex flex-col items-center gap-2"
                        >
                            <img 
                            src={offer.image}
                            className="w-full h-[200px] object-cover rounded-xl"
                            />
                            <h1 className="font-bold ">
                                {offer.title}
                            </h1>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Car: </p>
                                <p>{offer.car.name}</p>
                            </span>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Price: </p>
                                <p>{offer.price} DA/Day</p>
                            </span>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Duration: </p>
                                <p>{offer.duration} {offer.duration === 1 ? "Day" : "Days"}</p>
                            </span>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Avg rate: </p>
                                <p>{offer.rate}</p> <AiFillStar className="text-xl text-yellow-500"/>
                            </span>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Address: </p>
                                <p>{offer.Address}</p>
                            </span>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Payment ways: </p>
                                <p>{offer.payment_ways.map((payment,index) => {
                                    return (
                                        <span>{payment}{index !== offer.payment_ways.length - 1 ? "," : " "}</span>
                                    )
                                })}</p>
                            </span>
                            <span
                            className="flex gap-2 items-center w-full"
                            >
                                <p
                                className="font-bold"
                                >Status: </p>
                                <p>{offer.isActive ? "Active":"Not active"}</p> 
                                <div className={`
                                w-3 h-3 rounded-full
                                ${offer.isActive ? "bg-green-500" : "bg-red-600"}
                                `}></div>
                            </span>

                            <div
                            className="w-full flex justify-end gap-2 mt-5"
                            >
                                <button className="flex bg-black text-white rounded-full px-4 py-2 items-center">
                                    Edit <AiOutlineEdit className="text-xl ml-2"/>
                                </button>
                            </div>
                        </div>
                    ))}
                    <Link href={`/renters/${renterId}/add_offer`}>
                        <div
                        className="h-full flex justify-center items-center 
                        px-3 pb-7 pt-1 shadow-xl rounded-xl font-bold gap-2 cursor-pointer
                        hover:bg-gray-300 ease-in-out duration-300
                        "
                        >
                            Add new offer <AiOutlinePlusCircle className="text-4xl ml-2"/>
                        </div>
                    </Link>
                </div>

            </section>

            <SideBar />
        </main>
    )
}