import React, { useState } from 'react'
import Title from '../layout/Title'
import Education from './Education'
import Skills from './Skills'
import Acheivement from './Acheivement'
import Experince from './Experince'


function Resume({title,subtitle,result,des}) {
  const [educationData,seteducationData] = useState(true)
  const [skillData,setSkillData] = useState(false)
  const [acheivementData,setacheivementData] = useState(false)
  const [experinceData,setexperinceData] = useState(false)
  return (
    <section
    id='resume'
    className='w-full p-8 border-b-[1px] border-b-black'>

<div className='flex justify-center items-center text-center'>
        <Title
        title='Over 5+ Years of Experience'
        des='My Resume'
        />
    </div>
    <div>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lgl:grid-cols-4 gap-4"'>
            <li className={`${educationData ? 'border-designColor rounded-r-lg' : 'border-transparent'} resumli`} 
            onClick={() => 
              seteducationData(true) &
              setSkillData(false) &
              setacheivementData(false) &
              setexperinceData(false)
            }
            
              >Education</li>
            <li className={`${skillData ? 'border-designColor rounded-r-lg' : 'border-transparent'} resumli`}
            onClick={() => 
              seteducationData(false) &
              setSkillData(true) &
              setacheivementData(false) &
              setexperinceData(false)
            }>Professional Skill</li>
            <li className={`${experinceData ? 'border-designColor rounded-r-lg' : 'border-transparent'} resumli`}  
            onClick={() => 
              seteducationData(false) &
              setSkillData(false) &
              setacheivementData(false) &
              setexperinceData(true)
            }>Experince</li>
            <li className={`${acheivementData ? 'border-designColor rounded-r-lg' : 'border-transparent'} resumli`} 
            onClick={() => 
              seteducationData(false) &
              setSkillData(false) &
              setacheivementData(true) &
              setexperinceData(false)
            }>Achievement</li>
        </ul>
    </div>
    { educationData && <Education/>}
    { skillData && <Skills/>}
    { acheivementData && <Acheivement/>}
    { experinceData && <Experince/>}


    </section>
 
  )
}

export default Resume