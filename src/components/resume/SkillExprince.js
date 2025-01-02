import React from 'react'
import { motion } from 'framer-motion'

function SkillExprince() {
  return (
    
    <div className='mt-14 w-full flex flex-col gap-6 '>
    <div className='overflow-x-hidden'>
     <p className='text-sm uppercase font-medium'>photoshot</p>
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
  )
}

export default SkillExprince