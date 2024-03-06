import useMovieTrailer from '../hooks/useMovieTrailer'
import {  useSelector } from 'react-redux'

const Videobackground = ({id}) => {
  const trailervideo = useSelector(store => store.movies?.trailervideo)

 useMovieTrailer(id)  ;
 
  return (
    <div className='w-full '>
      <iframe className='w-full  aspect-video'
      src={"https://www.youtube.com/embed/"+trailervideo?.key + '?&autoplay=1&mute=1'} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
    </div>
  )
}

export default Videobackground