import React from 'react'

type Props = {}

const workExperience = (props: Props) => {
  return (
    <div className='h-screen relative flex overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24 uppercase text-2xl text-gray-500 tracking-[20px]'>
            Experience
        </h3>
    </div>
  )
}

export default workExperience