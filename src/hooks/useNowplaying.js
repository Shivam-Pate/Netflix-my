import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { options } from '../Utils/Constant';
import { addnowplayingmovies } from '../Utils/Movieslice';


const useNowplaying = () => {
    const dispatch = useDispatch();

 
 
  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
    const json = await data.json()

    const result = json.results.slice(0,6)
    dispatch(addnowplayingmovies(result))
    
   
    
    

  }
  
 useEffect(() =>{
   nowPlayingMovies();
 },[])

}


export default useNowplaying;