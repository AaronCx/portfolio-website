import React from 'react'
import ProjectItem  from './ProjectItem'
import images1 from '../assets/images1.jpeg'
import images2 from '../assets/images2.jpeg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py16'> 
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={images1} titlle='test1'/>
        <ProjectItem img={images2} titlle='test2'/>
        <ProjectItem />
        <ProjectItem />
    </div>
    </div>
  )
  
}

export default Projects