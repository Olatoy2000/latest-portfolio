import { motion } from 'framer-motion'
import React from 'react'
import SecondSkill from './html'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='relative flex flex-col text-center md:text-left xl:px-10 min-h-screen xl:space-y-0  xl:flex-row max-w-full justify-center items-center mx-auto'>
        <h3 className='absolute top-24 uppercase text-2xl text-gray-500 tracking-[20px]'>Skills</h3>
        <h3 className="absolute top-36 uppercase text-sm tracking-[3px] text-gray-500">Hover over a skill for currency proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill src='/new-sanity.png' skill={100}/>
            <Skill src='/html.png' skill={100}/>
            <Skill src='/css.png' skill={100}/>
            <Skill src='/javascript.png' skill={80}/>
            <Skill src='/react.png' skill={90}/>
            <Skill src='/nextjs.png' skill={90}/>
            <Skill src='/tailwind.png' skill={100}/>
            <Skill src='/typscript-logo.png' skill={80}/>
            <Skill src='/mantine-logo.png' skill={90}/>
            
        </div>
    </motion.div>
  )
}
export default Skills