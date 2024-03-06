import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsuggestion from './Gptmoviesuggestion'
import { bg_url } from '../Utils/Constant'

const GptSearch = () => {
  return (
    <div className=''> 
        <div  className='fixed   -z-10'>
     <img className=' h-screen object-cover w-screen' src={bg_url} alt="" />
     </div>
     <div>
    <Gptsearchbar/>
    <Gptsuggestion/>
    </div>
     </div>
  )
}

export default GptSearch