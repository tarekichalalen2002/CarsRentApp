import React,{useState} from 'react'
import { motion } from 'framer-motion'

function FilterTag({tag, index}) {
    const [selected, setSelected] = useState(tag.selected)

  return (
    <motion.div className={`
    bg-gray-200 rounded-xl p-1 font-semibold w-auto cursor-pointer
    ${selected ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}
    ease-in-out duration-200 flex pl-2 items-center overflow-hidden hover:overflow-visible hover:z-30
    `}
    onClick={() => setSelected(!selected)}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.4,delay: index*0.05}}
    >
        <p className='truncate hover:overflow-visible'>{tag.tag}</p>
    </motion.div>
  )
}

export default FilterTag