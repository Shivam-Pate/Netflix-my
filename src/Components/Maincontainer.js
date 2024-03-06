import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'


const Maincontainer = () => {
  
    
    const movie = useSelector((store) => store.movies?.nowplayingmovies)
    
    
    if (!movie) return;
 
    

    const mainmovie = movie[0]
   
    

    const{ original_title , overview , id} = mainmovie;


  return (
    <div className='pt-[40%] bg-black md:pt-0 w-full'>
    <Videotitle title={original_title} overview={overview}/>
    <Videobackground id={id}/>
    </div>
  )
}

export default Maincontainer


