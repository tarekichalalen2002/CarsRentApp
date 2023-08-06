import React,{useEffect, useState} from "react";
import {Navbar ,SearchBox, FilterTag} from "../../components";
import { Inter } from 'next/font/google'
import { recommendedOffers,filterTags } from "@/utils/data";
import { Offer } from "../../components";
import {AiOutlineRight} from "react-icons/ai";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Offers() {
    const [isHover,setIsHover] = useState(false);
    useEffect(() => {
        console.log(isHover);
    }, [isHover])
    let offersCardsAnimationDelay = 0;
    return (
        <main className={`${inter.className} scroll-smooth`}>
            <Navbar />
            <div className="flex justify-center p-4">
                <SearchBox />
            </div>
            <motion.h3
            className="text-[20px] font-semibold text-center"
            >
                Search Tags
            </motion.h3>
            <div
            className="grid grid-cols-12 gap-2 p-5"
            >
                {filterTags.map((tag, index) => (
                    <FilterTag tag={tag} key={index} index={index}/>
                ))}
            </div>
            <section className="p-5">
                <h1
                className="text-[32px] font-semibold text-center"
                >
                    Recomended for you
                </h1>
                <div className="gap-3 grid grid-cols-4">
                    {recommendedOffers.map((offer, index) => {
                        offersCardsAnimationDelay += 0.1
                        return (
                            <Offer offer={offer} offersCardsAnimationDelay={offersCardsAnimationDelay} key={index} size="col-span-1" />
                        )
                    })}
                    <div className="flex gap-2 col-span-1 items-center justify-center">
                        <span className="flex gap-2 font-semibold text-gray-800 cursor-pointer items-center hover:text-black
                        ease-in-out duration-300
                        "
                        onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        >
                            See more
                            <AiOutlineRight className={`${isHover ? "translate-x-3" : "translate-x-0"} text-2xl ease-in-out duration-300`} />
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}