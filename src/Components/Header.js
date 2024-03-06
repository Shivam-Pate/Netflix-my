import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { adduser,removeuser } from '../Utils/Slice'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import {logo,supported_lang} from '../Utils/Constant'
import { auth } from "../Utils/Firebase";
import { togglegpt,showgpt,showbar, togglebar} from '../Utils/Gptslice';
import { changelang } from '../Utils/Configslice'


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) =>store.user);
  const dispatch = useDispatch();
  const showgptsearch = useSelector((store) => store.gpt.showgpt);
  const welcomebar = useSelector((store) => store.gpt.showbar)

  const signoutHandler = () => {
    
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }  

   useEffect(() => {
  
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,password,displayName, photoURL} = user;
      dispatch(adduser({uid:uid,email:email,password:password,displayName:displayName, photoURL: photoURL}))
      
      navigate('/browse')
    } else {
      // User is signed out
      // ...
      dispatch(removeuser());
      navigate('/')
    }
  });
   return () => unsubscribe();
  },[]);

  const gptclickHandler = () => {
   dispatch(togglegpt())
  }

  const langHandler = (e) => {
    dispatch(changelang(e.target.value))
  }

  const barHandler = () => {
    dispatch(togglebar())
  }

  return (
    <div className=''>
   <div className="absolute w-full  px-3 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className='w-[250px] mx-auto md:mx-0' src={logo} alt="" srcSet="" />
    {user &&
   
      
    <div className='flex justify-between md:items-center md:p-5 md:gap-5'>
      { showgptsearch &&
        <select className='p-2 bg-gray-900 text-white m-2' onChange={langHandler}>
        {
          supported_lang.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
        }
        
      </select>}
      <div>
   
   <button onClick={gptclickHandler} className='bg-[#333333] border p-2 md:py-2 md:px-4 rounded-md text-white font-bold md:text-2xl'>
    {showgptsearch  ? 'Home Page' : 'GPT Search'}
   </button>
    </div>

    <div onClick={barHandler}>
    <img className='w-10 h-10 ' src={user?.photoURL} alt=""/>
    {welcomebar ? 
     <div class="absolute bg-white rounded right-2 top-[155px] md:top-[100px] md:right-6  p-2 shadow-md ">
     <div class="w-4 h-4 bg-white rotate-45 absolute -top-2 right-2 "></div><h4>Welcome! {user?.displayName}</h4>
   <hr class="mb-1 mt-2"/><span onClick={signoutHandler} class="text-red-500 cursor-pointer inline-block">Sign Out</span></div>
   : <></>  
  }
    
  
   </div>
   </div>
   
   }
   </div>
   </div>
  
  )
}




export default Header;