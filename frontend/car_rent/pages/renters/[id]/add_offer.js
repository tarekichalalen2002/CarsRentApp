import { React ,useState,useEffect } from 'react';
import {
    BsFillCreditCardFill ,
    BsCashCoin,
    BsPaypal,
} from 'react-icons/bs'
import { SideBar, BoolButton } from '@/components';




export default function Add_Offer() {
    let payment_ways = [
        {
            name: "ccp",
            icon: (<img src="/algerie-poste.png" className='w-[25px] h-[25px] object-cover rounded-full'/>)
        },
        {
            name: "cash",
            icon: (<BsCashCoin />)
        },
        {
            name: "paypal",
            icon: (<BsPaypal />)
        }
    ]
    return (
        <main>
            <section
            className='w-full h-screen flex flex-col items-center
            pt-7 gap-4
            '
            >
                <h1
                className='text-center text-4xl font-bold'
                >
                    Add Offer
                </h1>
                <div
                className='grid grid-cols-2 gap-3 w-full px-10'
                >
                    <div
                    className='flex flex-col gap-1 px-5'
                    >
                        <lable
                        className="font-bold pl-3"
                        >
                            Title: 
                        </lable>
                        <input 
                            type="text"
                            className="border border-black p-2 rounded-lg"
                            placeholder='Title of the offer . . .'
                        />
                    </div>

                    <div
                    className='flex flex-col gap-1 px-5'
                    >
                        <lable
                        className="font-bold pl-3"
                        >
                            Car: 
                        </lable>
                        <select 
                            type="text"
                            className="border border-black p-2 rounded-lg"
                            placeholder='Title of the offer . . .'
                        >
                            <option value="volvo">Volvo</option>
                            <option value="golf">Golf 7</option>
                        </select>
                    </div>

                    <div
                    className='flex flex-col gap-1 px-5'
                    >
                        <lable
                        className="font-bold pl-3"
                        >
                            Price: 
                        </lable>
                        <input 
                            type="number"
                            className="border border-black p-2 rounded-lg"
                            placeholder='Tap your price per day . . .'
                        />
                    </div>

                    <div
                    className='flex flex-col gap-1 px-5'
                    >
                        <lable
                        className="font-bold pl-3"
                        >
                            Payment Ways: 
                        </lable>
                        <div
                        className='flex gap-2'
                        >
                            {payment_ways.map((payment_way,index) => {
                                const [isSelect,setIsSelected] = useState(false)
                                return (
                                    <div 
                                    className={`
                                    flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer font-semibold
                                    ${isSelect ? 'bg-black text-white border border-black' : 'bg-white border border-black'}
                                    `}
                                    key={index}
                                    onClick={() => {setIsSelected(!isSelect)}}
                                    >
                                        {payment_way.name}
                                        {payment_way.icon}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div
                    className='flex flex-col gap-1 px-5'
                    >
                        <lable
                        className="font-bold pl-3"
                        >
                            Duration: 
                        </lable>
                        <input 
                            type="number"
                            className="border border-black p-2 rounded-lg"
                            placeholder='Duration of the rent in days . . .'
                        />
                    </div>

                    <BoolButton label="Active"/>
                    
                    <div
                    className='flex flex-col gap-1 px-5'
                    >
                        <lable
                        className="font-bold pl-3"
                        >
                            Duration: 
                        </lable>
                        <textarea 
                            className="border border-black p-2 rounded-lg min-h-[100px]"
                            placeholder='Description . . .'
                        />
                    </div>

                </div>
                <div
                    className='w-full flex justify-center items-center gap-5 mt-10'
                    >
                        <button
                        className='flex justify-center items-center py-2 px-10 text-xl bg-black text-white rounded-lg font-semibold'
                        >
                            Create
                        </button>
                    </div>
            </section>
            <SideBar />
        </main>
    )
}

// {
//     title: "Seat Leon",
//     image:'/leon.jpg',
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     price: 10000,
//     duration: 7,
//     rate: 4.5,
//     car: {
//       name: "Seat Leon",
//       brand: "Seat",
//       model: "Leon",
//       year: 2019,
//     },
//     payment_ways: [
//       "ccp","cash","paypal"
//     ],
//     owner:"Djaffar",
//     Address:"Alger",
//     isActive: false,
//   }