import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white  snap-y snap-mandatory overflow-scroll z-0 h-screen'>
      <Head> 
        <title>OLATOY | Home</title>
      </Head>
        <Header />
        <section id='hero' className='snap-center'>
            <Hero />
        </section>
        <About />
     {/* Experience */}

     {/* Skills */}

     {/* Projects */}

     {/* Contadt Me */}
    </div> 
  )
}

export default index