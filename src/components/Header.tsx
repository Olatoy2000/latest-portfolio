import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex  items-start xl:items-center z-20 p-5 justify-between mx-auto max-w-screen-2xl'>
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.5,
                x: -500
            }}

            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1.5}}
        >
             <SocialIcon url="https://www.linkedin.com/in/toyyib-oladejo-8161bb203" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://github.com/Olatoy2000" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon className='' url="https://www.youtube.com/@oladejotoyyibolalekan9129" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="oladejotoyyibolalekan@gmail.com" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://twitter.com/oladejo_toyyib" 
            fgColor='gray'
            bgColor='transparent'
            />
           
            <SocialIcon url="https://www.facebook.com/oladejo.toyyibolalekan" 
            fgColor='gray'
            bgColor='transparent'
            />
            
            
        </motion.div>
        <motion.div 
            initial={{
                opacity: 0,
                scale: 0.5,
                x: 500
            }}

            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1.5}}
        className='flex cursor-pointer items-center text-gray-300'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
    </header>
  )
}

export default Header