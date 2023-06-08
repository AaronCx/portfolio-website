import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' 
        src='' 
        alt=''>    
        </img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h2 className='flex sm:text-5xl text-4xl pt-4 text-gray-800'>
        <TypeAnimation
      sequence={[
        'My Name Is Aaron Character', // Types 'One'
        1000, // Waits 1s
        'Im a Full Stack Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'I Love Software Development', // Types 'Three' without deleting 'Two'
        3000, // Waits 3s
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
    </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <FaLinkedin className='cursor-pointer' size={20}/>
          <FaTwitter className='cursor-pointer' size={20}/>
          <FaGithub className='cursor-pointer' size={20}/>
          <FaInstagram className='cursor-pointer' size={20}/>
        </div>
        </div>
        </div>
   </div>
  )
}

export default Main