import { motion } from 'framer-motion'
import React from 'react'
import { Tooltip } from '@mantine/core';

type Props = {

}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg space-y-7 items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
    cursor-pointer overflow-hidden transition-opacity duration-200 '>
       <motion.img
       initial={{
        y: -100,
        opacity: 0,
       }}
       transition={{ duration:1.2}}
       whileInView={{opacity: 1, y:0 }}
       viewport={{ once: true }}
       className="object-center w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] p-3 object-contain border-[#ccc] border bg-white"
       src='./afexLogo.png' />
      <div className='px-0 md:px-10'>
        <h3 className='text-4xl font-light'>Internship Training</h3>
        <p className='text-2xl font-bold mt-1'>AFEX</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src='/html.png'/>
          <img className='h-10 w-10 rounded-full' src='/css.png'/>
          <img className='h-10 w-10 rounded-full' src='/tailwind.png'/>
          <img className='h-10 w-10 rounded-full' src='/javascript.png'/>
          <img className='h-10 w-10 rounded-full' src='/react.png'/>
          <img className='h-10 w-10 rounded-full' src='/nextjs-2.avif'/>
        </div>
        <div className='flex flex-col items-start justify-start space-y-4 text-lg mb-4'>
            <p>Starting Date: <span>May 24th, 2022.</span></p>
            <p>Ending Date: <span>October, 2023.</span></p>
        </div>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Learnt the basis of software development, HTML and CSS </li>
        <li>Learnt JavaScript and TypeScript </li>
        <li>Learnt React, NextJS and TailwindCSS</li>
       
        <li>Collaborated in building the new 
        <Tooltip
          label={"click on this colored texts to take you to the afex tech star website"}
          color="dark"
          withArrow
          arrowSize={6}
          width={200}
          multiline>
          <a href='https://afexats.com' target="_blank" className='text-blue-500'>AFEX Tech Stars</a>
          </Tooltip>
          as the final assessment given to the frontend team </li>
      </ul>    
      </div>
     
    </article>
  )
}
export default ExperienceCard