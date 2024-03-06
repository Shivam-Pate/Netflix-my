import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { options } from '../Utils/Constant';
import { addupcoming } from '../Utils/Movieslice';


const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcomingmovie = useSelector((store) => store.movies.upcoming)
 
  const upcoming = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
    const json = await data.json()
    const result = json.results.slice(0,6)
    dispatch(addupcoming(result))
  

  }
  
 useEffect(() =>{
  !upcomingmovie && upcoming();
 },[])

}


export default useUpcoming;