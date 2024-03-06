import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies = []}) => {
  
  if(!movies) return null
    
  return (
   
      <div className='px-10 '>
       <h1 className='text-3xl md:text-5xl text-white font-bold py-4 '>{title}</h1>
       
    
     <div className='flex md:pt-2 '>
    <div className='flex '>
    
       {movies.length > 0 &&
        movies.map((movie) => (
            <Moviecard key={movie.id} poster={movie.poster_path}/>
        ))
       }
    </div>
    </div>
    </div>
    
    
  )
}

export default Movielist