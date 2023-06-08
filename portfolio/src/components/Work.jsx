import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: '2019',
        title: 'Software Engineer',
        duration: '2019 - Present',
        details: 'Software Engineer'
        
    },
    {
        year: '2019',
        title: 'Software Engineer',
        duration: '2019 - Present',
        details: 'Software Engineer'
        
    },
    {
        year: '2019',
        title: 'Software Engineer',
        duration: '2019 - Present',
        details: 'Software Engineer'
        
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'> 
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
    {data.map((item, idx) => (
        <WorkItem
        key={idx}
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}
        />
    ))}
    </div>

  )
}

export default Work