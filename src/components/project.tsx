import React from 'react'

type Props = {};

const Projects = (props: Props) => {
    const project = [
        {
            image: "",
            name: 'Project 1',
            
        }
    ]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly m-auto items-center z-0'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>Projects</h3> 
        <div className='relative w-full flex overflow-x-scroll overflow-'>
            {/* projects */}
             {/* projects */}
              {/* projects */}
        </div>
       <div className=' w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12'>

       </div>
    </div>
  )
}

export default Projects