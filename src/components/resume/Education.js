import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{durration:.5}}} className='w-full flex gap-20'>
 <div>
  <div className='font-titleFont pt-10'>
        <p className='text-sm text-designColor tracking-[4px]'>2023-2024</p>
        <h2 className='text-4xl font-bold'>EDUCATION</h2>

    </div>
    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
            title="Software Development"
            subtitle="3MTT Program (Sept 2024 - Nov 2024)"
            result="5.00/5"
             des="Created a full-stack application using JavaScript and Node.js."
          />
     <ResumeCard
            title="Frontend Web Development"
            subtitle="Utiva (Aug 2022 - Dec 2022)"
            result="4.00/5"
            des="Focused on web structure, styling, interactivity, and dynamic content."
          />
       <ResumeCard
            title="Frontend Web Development"
            subtitle="Utiva (Aug 2022 - Dec 2022)"
            result="4.00/5"
            des="Focused on web structure, styling, interactivity, and dynamic content."
          />
    </div>
  </div>

  <div>
  <div className='font-titleFont pt-10'>
        <p className='text-sm text-designColor tracking-[4px]'>2023-2024</p>
        <h2 className='text-4xl font-bold'>Professional Journey</h2>

    </div>
    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
            title="TechPem Internship"
            subtitle="Frontend Developer"
            result="5.00/5"
            des="Collaborated with senior developers and contributed to real-world projects."
          />
      <ResumeCard
            title="ISONG Technologies Internship"
            subtitle="Software Development Intern"
            result="5.00/5"
            des="Assisted in software tasks, participated in team meetings, and learned project management methodologies."
          />
      
      <ResumeCard
            title="ISONG Technologies Internship"
            subtitle="Software Development Intern"
            result="5.00/5"
            des="Assisted in software tasks, participated in team meetings, and learned project management methodologies."
          />
    </div>
  </div>
  
 </motion.div>
  )
}

export default Education