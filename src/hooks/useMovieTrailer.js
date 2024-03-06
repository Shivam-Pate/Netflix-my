import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {options} from '../Utils/Constant'
import { addtrailervideo } from "../Utils/Movieslice";


 const MovieTrailer = (id) => {
  
    const dispatch = useDispatch()
        const trailer = useSelector((store) => store.movies.trailervideo)
    const getmovietrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'
        +id+ 
        '/videos?language=en-US', options
        );
        const json = await data.json()
        
      
        const trailers = json.results.filter((video) => video.type === 'Trailer');
        const trailer = trailers.length ? trailers[0] : json.results[0];
        dispatch(addtrailervideo(trailer))
       }
      
       useEffect (() => {
       !trailer && getmovietrailer()
       },[])
 } ;

 export default MovieTrailer;