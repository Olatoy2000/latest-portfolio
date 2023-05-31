import About from '@/components/About'
import Contact from '@/components/contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/project'
import Skills from '@/components/skills'
import WorkExperience from '@/components/workExperience'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
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

     <section className='snap-start' id='contact'>
        <Contact name='name' message='message' email='email' subject='subject'  />
     </section>

     <Link  href="#hero">
      <footer className='sticky bottom-5 w-4 cursor-pointer'>
        <div className=''>
          <img src="./olatoy-website.png" alt="" className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' />
        </div>
      </footer>
     </Link>
    </div> 
  )
}

export default index