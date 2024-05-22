import React from 'react'
import Hexagon from 'react-hexagon'
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div className='hexagon' id='hexagon ' style={{ width:'100%'}}>
              <img src={technology.icon}/>
          </div>
  
        </div>
      ))}

    </div>
  )
}

export default Tech