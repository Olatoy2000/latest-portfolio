import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean
    src?: string
    skill?: number
}

const Skill = ({ directionLeft, src, skill }: Props) => {
  return (
    <div className='group flex cursor-pointer relative'>
        <motion.img
        src={src}
        initial={{
            x: directionLeft ? -200: 200,
            opacity: 0,
        }}
        transition={{duration: 1, opacity:1}}
        whileInView={{opacity: 1, x: 0}}
        className='rounded-full object-cover border border-gray-500 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration:300 ease-in-out'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 group-hover:bg-white'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>{skill}%</p>
        </div>
    </div>
    </div>
   
  )
}

export default Skill