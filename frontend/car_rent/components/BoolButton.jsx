import React,{useState} from 'react'

function BoolButton({label}) {
    const [isActive, setIsActive] = useState(false)
  return (
    <div
    className='flex gap-5 mt-5 items-center'
    >
        <label className='font-semibold pl-4'>{label}: </label>
        <div
        className={`
        w-[55px] h-[15px]  rounded-full relative cursor-pointer
        ${isActive ? "bg-blue-300" : "bg-gray-400"}
        `}
        onClick={()=>setIsActive(!isActive)}
        >
            <div
            className={`
            w-[25px] h-[25px] absolute bottom-[-40%] rounded-full leftt-0
            ${isActive ? "translate-x-[30px] bg-blue-600" : "translate-x-0 left-0 bg-gray-600"}
            ease-in-out duration-300
            `}
            ></div>
        </div>
    </div>
  )
}

export default BoolButton