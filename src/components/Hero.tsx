import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';


type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hello, My Name is Toyyib Oladejo",
            "Guy-who-loves-research",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        {/* <Icon icon="mdi:person-circle" width="100" height="100" />        */}
        <img src='/toyyib-profile1.png' alt='' className='w-[200px] h-[200px] mx-auto rounded-full object-cover relative' />
        <div className='z-20'>
            <h2 className='text-sm text-gray-500 pb-2 tracking-[15px]'>Frontend Developer</h2>
            <h1 className='text-5xl font-semibold lg:text-6xl pb-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero