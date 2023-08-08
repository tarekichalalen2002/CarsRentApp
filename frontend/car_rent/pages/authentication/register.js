import React,{useState} from "react";
import Link from "next/link";
import {AiOutlineMail,AiOutlinePhone,AiOutlineUser,AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai";
import {SlLocationPin} from "react-icons/sl";
import {MdOutlinePayment} from "react-icons/md";
import {BsFillImageFill,BsKey} from "react-icons/bs";
import { Logo } from "@/components";


export default function Register(){
    const [pageIndex,setPageIndex] = useState(0)
    return(
        <main
        className="w-[100vw] h-screen flex flex-col gap-1 items-center overflow-x-hidden"
        >
            <div className="absolute top-[20px] left-[20px]">
            <Logo />
            </div>
            <h1
            className="text-[32px] font-bold text-center"
            >Create your AutoLoc account</h1>
            <p className="text-center">
                Bocome a renter and start earning money with your car!
            </p>
            <div
            className="grid grid-cols-2 items-center"
            >
                {pageIndex === 1 &&(
                    <button 
                    className="absolute top-[100px] left-[50px] bg-gray-900 hover:bg-black ease-in-out duration-300 w-[50px] h-[50px] flex justify-center items-center rounded-full "
                    onClick={() => setPageIndex(0)}
                    >
                        <AiOutlineArrowLeft className="text-3xl hover:translate-x-[-5px] text-white ease-in-out duration-300 font-bold"/>
                    </button>
                )}
                
                <div
                className={`col-span-1 
                w-[100vw] grid grid-cols-2 gap-x-12 gap-y-3 p-8
                ${pageIndex === 0 ? "translate-x-0 opacity-100" : "-translate-x-[100vw] opacity-0"}
                ease-in-out duration-1000 justify-center items-center
                `}
                >
                    <div
                    className="flex flex-col gap-2 relative col-span-1"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Email:
                        </label>
                        <input 
                        type="email" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="example@ . . ."
                        />
                        <AiOutlineMail className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Phone:
                        </label>
                        <input 
                        type="text" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Phone number . . ."
                        />
                        <AiOutlinePhone className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            First name:
                        </label>
                        <input 
                        type="text" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Your first name . . ."
                        />
                        <AiOutlineUser className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Last name:
                        </label>
                        <input 
                        type="text" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Your last name . . ."
                        />
                        <AiOutlineUser className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Wilaya:
                        </label>
                        <select
                        type="text" 
                        className="p-2 border border-black rounded-lg pl-12"
                        ></select>
                        <SlLocationPin className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Address:
                        </label>
                        <input
                        type="text" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Your address . . ."
                        />
                        <SlLocationPin className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            CCP:
                        </label>
                        <input
                        type="text" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Your CCP number . . ."
                        />
                        <MdOutlinePayment className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>

                    <div
                    className="flex flex-col gap-2 relative"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Image:
                        </label>
                        <input
                        type="file" 
                        className="p-2 border border-black rounded-lg pl-12"
                        // placeholder="Your CCP number . . ."
                        />
                        <BsFillImageFill className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>
                </div>

            {/* -------------------------------------------------------------- PASSWORD PAGE ------------------------------------------------------------------------------------------ */}

                <div 
                className={`
                col-span-1 justify-center items-center
                w-[100vw]
                ${pageIndex === 1 ? "-translate-x-[100vh] opacity-100" : "translate-x-[100vw] opacity-0"}
                ease-in-out duration-1000 flex flex-col gap-2 items-center 
                `}
                >
                    <div
                    className="flex flex-col gap-2 relative w-1/2"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Password:
                        </label>
                        <input 
                        type="password" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Your Password . . ."
                        />
                        <BsKey className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>
                    <div
                    className="flex flex-col gap-2 relative w-1/2"
                    >
                        <label
                        className="text-[15px] font-bold pl-2"
                        >
                            Confirm Password:
                        </label>
                        <input 
                        type="password" 
                        className="p-2 border border-black rounded-lg pl-12"
                        placeholder="Confirm Your Password . . ."
                        />
                        <BsKey className="absolute text-gray-800 top-[40px] left-3 text-2xl"/>
                    </div>
                </div>
                
                
            </div>
            <div
                className="flex flex-col items-center gap-2"
                >
                    <button
                    className="text-xl bg-gray-950 text-white p-2 rounded-full w-[400px] 
                    flex items-center justify-center gap-2 font-bold
                    hover:bg-black ease-in-out duration-300 
                    "
                    onClick={() => setPageIndex(1)}
                    >
                        {pageIndex === 0 ? "Continue" : "Register"}
                        {pageIndex === 0 && <AiOutlineArrowRight />}
                    </button>
                    <Link href="/authentication/login">
                        <button
                        className="text-xl  p-2 rounded-full w-[400px] 
                        flex items-center justify-center gap-2 font-bold
                        border border-black
                        "
                        >
                            Already have an account?
                        </button>
                    </Link>
                </div>
        </main>
    )
}