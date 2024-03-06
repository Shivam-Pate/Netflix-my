import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {

 const movies = useSelector ((store) => store.movies)

 









  return (
    
    <div className='bg-black  w-full'>
      <div className='mt-0 md:-mt-50 pl-4 md:pl-12 relative z-20 h-[900px] md:h-full'>
      <Movielist title={'Now Playing Movies'} movies={movies.nowplayingmovies}/>
      <Movielist title={'Top Rated Movies'} movies={movies.toprated }/>
      <Movielist title={'Upcoming Movies'} movies={movies.upcoming }/>
      <Movielist title={'Top Rated Movies'} movies={movies.toprated}/>
      </div>
    </div>
    )
  
}

export default Secondarycontainer