import React,{useState} from "react";
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai";
import {BsKey} from "react-icons/bs";
import Link from "next/link";
import { Logo } from "@/components";

export default function Login() {
    const [isEmailAuth, setIsEmailAuth] = useState(false);
    return (
        <main
        className="w-full h-screen items-center pt-12 flex flex-col gap-7"
        >
            <div className="absolute top-[20px] left-[20px]">
            <Logo />
            </div>
            <h1
            className="text-[32px] font-semibold text-center"
            >Welcome Again !</h1>
            <form
            className="flex flex-col gap-3 w-1/3 items-center"
            >
                {isEmailAuth ? (
                    <div
                    className="flex flex-col gap-2 w-full relative"
                    >
                        <lable className="font-semibold">Email:</lable>
                        <input type="email" placeholder="Your email . . ."
                        className="p-2 border border-black rounded-md pl-12"
                        />
                        <AiOutlineMail className="absolute top-[52px] left-3 transform -translate-y-1/2 text-2xl text-gray-700" />
                    </div>
                ) : (
                    <div
                    className="flex flex-col gap-2 w-full relative"
                    >
                        <lable className="font-semibold">Phone:</lable>
                        <input type="phone" placeholder="Your phone number . . ."
                        className="p-2 border border-black rounded-md pl-12"
                        />
                        <AiOutlinePhone className="absolute top-[52px] left-3 transform -translate-y-1/2 text-2xl text-gray-700" />
                    </div>
                )}

                <div
                className="flex flex-col gap-2 w-full relative"
                >
                    <lable className="font-semibold">Password:</lable>
                    <input type="password" placeholder="Your password . . ."
                    className="p-2 border border-black rounded-md pl-12"
                    />
                    <BsKey className="absolute top-[52px] left-3 transform -translate-y-1/2 text-2xl text-gray-700" />
                </div>
                <div className="flex flex-col gap-3 w-full items-center mt-3">
                    {isEmailAuth ? (
                        <p>To sign in with your phone number <span className="font-semibold text-blue-700 cursor-pointer" onClick={()=>setIsEmailAuth(false)}>Click here</span></p>
                    )
                    : (
                        <p>To sign in with your email <span className="font-semibold text-blue-700 cursor-pointer" onClick={()=>setIsEmailAuth(true)}>Click here</span></p>
                    )}
                    <p>Forgot your password ? <span className="font-semibold text-blue-700 cursor-pointer">Click here</span></p>
                </div>
                <button
                className="text-white bg-black font-semibold p-2 w-[300px] rounded-xl text-[20px] mt-8"
                type="submit"
                >
                    Login
                </button>
                <Link href="/authentication/register">  
                    <button
                    className="border border-black font-semibold p-2 w-[300px] rounded-xl text-[20px]"
                    type="button"
                    >
                        Create an account
                    </button>
                </Link>
            </form>
        </main>
    )
}