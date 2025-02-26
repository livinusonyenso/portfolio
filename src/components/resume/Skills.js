import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{durration:.5}}} 
    className='w-full flex flex-col lgl:flex-row items-center gap-10 lgl:gap-20'>
    <div className='w-full lgl:w-1/2'>
     <div className='font-titleFont py-12'>
           <p className='text-sm text-designColor tracking-[4px]'>Features</p>
           <h2 className='text-3xl lgl:text-4xl font-bold'>Design Skill</h2>
   
       </div>
       <div className='mt-14 w-full flex flex-col gap-6 '>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>

          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
          </motion.span>
        </span>
      </div>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Figma</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>90%</span>
          </motion.span>
        </span>
      </div>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Adebo</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Design</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>
     
         
       </div>
     </div>


   
     <div className='w-full lgl:w-1/2'>
     <div className='font-titleFont py-12'>
           <p className='text-sm text-designColor tracking-[4px]'>Features</p>
           <h2 className='text-3xl lgl:text-4xl font-bold'>Development Skills</h2>
   
       </div>
        <div className='mt-14 w-full flex flex-col gap-6 '>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>HTML</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
          </motion.span>
        </span>
      </div>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>CSS</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>90%</span>
          </motion.span>
        </span>
      </div>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>JavaScript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>
       <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>React</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span
          initial={{x:'-100%', opacity : 0}}
          animate={{x: 0,opacity : 1}}
          transition={{durration:0.5,delay:0.5}}
          
          className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
          to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>
     
         
       </div>
     </div>
     
    </motion.div>
  )
}

export default Skills