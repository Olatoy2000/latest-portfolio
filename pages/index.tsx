import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/project'
import Skills from '@/components/skills'
import WorkExperience from '@/components/workExperience'
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
        <section id='hero' className='snap-start'>
            <Hero />
        </section>
        <section id='about' className='snap-center'>
          <About />
        </section>
       <section className='snap-center' id='experience'>
        <WorkExperience />
       </section>
      <section className='snap-center' id='skills'>
        <Skills />
      </section>
      <section className='snap-start' id='projects'>
        <Projects />
      </section>

     {/* Contadt Me */}
    </div> 
  )
}

export default index