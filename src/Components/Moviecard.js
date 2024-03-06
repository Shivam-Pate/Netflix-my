import React from 'react'
import {cdn} from '../Utils/Constant'

const Moviecard = ({poster}) => {
  if (!poster) return
  return (
    <div className=" md:pl-8 md:h-[400px]   pr-4 ">
        <img className='rounded-lg  md:min-w-[250px] object-cover md:h-[300px]  min-w-[85px] hover:scale-110 min-h-[140px]' src={cdn + poster} alt="" />
    </div>
  )
}

export default Moviecard