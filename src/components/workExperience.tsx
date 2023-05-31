import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './experienceCard'
import GraduateIntern from './graduateIntern'

type Props = {}

const workExperience = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24 uppercase text-2xl text-gray-500 tracking-[20px]'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x p-10 snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
        '>
          <ExperienceCard />
          <GraduateIntern />
        </div>
    </motion.div>
  )
}

export default workExperience