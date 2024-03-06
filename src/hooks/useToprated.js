import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { options } from '../Utils/Constant';
import { addtoprated } from '../Utils/Movieslice';


const useToprated = () => {
    const dispatch = useDispatch();

    const top = useSelector((store) => store.movies.toprated)
 
  const toprated = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
    const json = await data.json()
    const result = json.results.slice(0,6)
    dispatch(addtoprated(result))
  

  }
  
 useEffect(() =>{
  !top &&  toprated();
 },[])

}


export default useToprated;