import React from "react";
import {cars,bestSellers} from "../../../utils/data";
import { SideBar } from "@/components";
import { useSnapshot } from "valtio";
import state from "../../../state";
import { useRouter } from "next/router";
import {AiOutlinePlusCircle,AiOutlineSearch,AiOutlineEdit } from "react-icons/ai";
import {DashboardHeader} from "@/components";
import {FaHorse} from "react-icons/fa";
import { GiEntryDoor } from 'react-icons/gi'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'
import {motion} from "framer-motion";
import Link from "next/link";


export default function Cars() {
    const router = useRouter();

    const {id} = router.query;

    const snap = useSnapshot(state);

    console.log(snap.loggedUserId);
    return (
        <section
        className="relative"
        >
            <section
            className="flex flex-col p-5 gap-5 pt-[100px]"
            >
                <DashboardHeader />
                <div
                className="flex justify-center w-full"
                >
                    <div
                        className="mt-4 flex gap-5 relative "
                        >
                            <motion.input 
                            className="border border-black rounded-full p-2 pl-12 w-[350px]"
                            placeholder="Search in your cars . . ."
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
                <h1 className="
                px-12 py-4 text-4xl font-bold w-full text-center
                ">Your Cars </h1>
                <div
                className="grid grid-cols-4 gap-7 p-4"
                >
                    {cars.map((car) => {
                        return (
                            <motion.div
                            className="w-[300px]  shadow-2xl rounded-xl
                            flex flex-col gap-2 p-2 py-5
                            "
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.3,delay:0.1}}
                            >
                                <img 
                                src={car.image}
                                alt="car-image"
                                className="w-full h-[200px] object-cover rounded-xl"
                                />
                                <div
                                className="flex flex-col gap-2 w-full"
                                >
                                    <p className="text-center font-semibold">{car.name}</p>
                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Brand: </p> <p>{car.brand}</p> <img src={car.brand_image} alt="brand-image" className="w-8 h-8 object-contain"/>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Model: </p> <p>{car.model}</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Year: </p> <p>{car.year}</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Number of seats: </p> <p>{car.number_of_seats}</p> <MdAirlineSeatReclineExtra className="text-2xl"/>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Number of doors: </p> <p>{car.number_of_doors}</p> <GiEntryDoor className="text-2xl"/>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Horse power: </p> <p>{car.horse_power}</p> <FaHorse className="text-2xl"/>
                                    </span>

                                    <span className='flex gap-3 items-center'>
                                        <p className="font-semibold">Status: </p> <p>{car.isActive ? "Active" :"Not active"}</p>
                                        <div className={`
                                            h-[20px] min-w-[20px] rounded-full
                                            ${car.isActive ? "bg-green-500" :"bg-red-600"}
                                        `}></div>
                                        <span
                                        className="w-full flex justify-end pr-3 font-bold
                                        cursor-pointer text-gray-700 hover:text-black ease-in-out duration-300
                                        "
                                        > . . . Details</span>
                                    </span>

                                    <span
                                    className="w-full flex items-center justify-end gap-3 mt-5"
                                    >
                                        <button
                                        className="flex items-center gap-2 mr-2 px-4 py-2 rounded-full border border-black font-semibold"
                                        >
                                            See Offers 
                                        </button>
                                        <button
                                        className="flex items-center gap-2 mr-2 px-4 py-2 bg-black text-white rounded-full font-semibold"
                                        >
                                            Edit <AiOutlineEdit /> 
                                        </button>
                                    </span>

                                </div>
                            </motion.div>
                        )
                    })}
                    <Link href={`/renters/${id}/add_car`}
                    className="w-[300px]"
                    >
                        <div
                        className=" shadow-xl rounded-xl h-full
                        flex justify-center items-center font-semibold cursor-pointer
                        hover:bg-gray-300 ease-in-out duration-300
                        "
                        >
                            Add another <AiOutlinePlusCircle className="text-2xl"/>
                        </div>
                    </Link>

                </div>
            </section>

            <section>

            </section>

            <SideBar userId= {id}/>
        </section>
    )
}