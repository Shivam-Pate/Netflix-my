import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../Utils/Languageconstant'
import {addgptresult,addgptname } from '../Utils/Gptslice'
import { options } from '../Utils/Constant'


const Gptsearchbar =  () => {
  const searchtext = useRef(null)
  const dispatch = useDispatch()

  const langkey = useSelector((store) => store.config.lang)  


  const searchmovietmdb = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
    movie +
    '&include_adult=false&language=en-US&page=1', options)
    const json = await data.json();
    
    return json.results.slice(0,5)
    
  }

  const  gptsearchHandler =async () => {
    const moviearr = searchtext.current.value
    const movie = [moviearr]
    

    const data = await searchmovietmdb(movie);
    const result = [data]
    console.log(result)
   
    dispatch(addgptresult({movienames:movie , movieresults:result}));
  }

  return (
    <div className='pt-[50%]  md:pt-[10%] flex md:justify-center'>
        <form action="" className='flex justify-between py-3 w-3/4 md:w-[650px]' 
        onSubmit={(e) => e.preventDefault()}>
            <input ref={searchtext} className='bg-[#333333] px-10 w-[500px] py-4 m-4 text-white rounded-lg' type="text" placeholder={lang[langkey].placeholder} />
            <button className='bg-red-600 text-white px-6 rounded-lg py-1 m-4' onClick={gptsearchHandler}>{lang[langkey].search} </button>
        </form>
    </div>
  )
}

export default Gptsearchbar