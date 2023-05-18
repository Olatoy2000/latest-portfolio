import { motion } from 'framer-motion';
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
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>
    </div>
  )
}

export default Hero