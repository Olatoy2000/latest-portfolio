import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <motion.section
        initial= {{
            opacity: 0,
        }}
        animate = {{
            scale: [1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,0.1],
            borderRadius: ["20%","20%","50%","80%","20%"]
        }}
        transition = {{
            duration: 2.5,
        }}

    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] w-[200px] h-[200px] rounded-full animate-ping mt-52' />       
        <div className='absolute border border-[#333333] w-[300px] h-[300px] rounded-full  mt-52'/>
        <div className='absolute border border-[#333333] w-[500px] h-[500px] rounded-full  mt-52'/>
        <div className='absolute border border-[#F7AB0A] w-[650px] h-[650px] rounded-full opacity-20 animate-pulse mt-52'/>
        <div className='absolute border border-[#333333] w-[800px] h-[800px] rounded-full  mt-52'/>
    </motion.section>
  )
}

export default BackgroundCircle