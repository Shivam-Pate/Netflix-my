import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkvalidate } from '../Utils/Validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import { signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser } from '../Utils/Slice';
import {photo} from '../Utils/Constant'
import { bg_url } from '../Utils/Constant';

const Login = () => {
   const [issignin,setissignin] =useState(true)
   const [errormsg,seterrormsg] = useState(null)
   const dispatch = useDispatch();

   const email =useRef(null)
   const password =useRef(null)
   const fullname = useRef(null)

   
  function signupHandler(){
    setissignin(false)
  }

  const Handlevalidate = () =>{
  console.log(email.current.value)
  console.log(password.current.value)

  const msg=checkvalidate(email.current.value,password.current.value)
  seterrormsg(msg)
  if(msg) return

  if(!issignin) {
   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
   .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     updateProfile(user, {
      displayName:fullname.current.value, photoURL:photo 
    }).then(() => {
      // Profile updated!
      const {uid,email,password,displayName, photoURL} = auth.currentUser;
      dispatch(adduser({
        uid:uid,
        email:email,
        password:password,
        displayName:displayName,
        photoURL: photoURL}))
      // ...
    }).catch((error) => {
      // An error occurred
      seterrormsg(error.message)
      // ...
    });
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     seterrormsg(errorCode + ": " + errorMessage)
   });
  }

  else{
   signInWithEmailAndPassword(auth,email.current.value, password.current.value)
   .then((userCredential) => {
    const user = userCredential.user;
     // Signed in 
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     seterrormsg(errorCode + ": " + errorMessage)
   });
 
  }
  }
 

  return (
    <div>
     <Header/>
    
     <div className='flex justify-center items-center h-screen'>
     <div  className='w-screen h-screen absolute '>
     <img className='w-full h-full' src={bg_url} alt="" />
     </div>

     <form className='absolute bg-[#000000BF] w-[450px] h-[500px] p-12 rounded-md' onSubmit={(e)=>e.preventDefault()}  action=""> 
     
     <p className='font-bold text-white text-3xl py-4'>{
         issignin ? 'Sign In' : 'Sign Up'
     }</p>
     
     {!issignin &&
     <input required type="text" ref={fullname} placeholder='Full Name' className='p-5 my-4 w-full bg-[#333333]  rounded-md text-white'/> }
     
     <input required type="text" ref={email} placeholder='Email Address ' className='p-5 my-4 w-full bg-[#333333] rounded-md text-white'/> 
     
     <input required type="password" ref={password} placeholder='Password' className='p-5 my-4  w-full bg-[#333333] rounded-md text-white'/> 
     
     <p className='text-red-500 font-bold text-lg py-2'>{errormsg}</p>
     <button onClick={Handlevalidate} className='p-5 mt-5 bg-red-500 text-white w-full rounded-md'>{
        issignin ? 'Sign In' : 'Sign Up'
     }</button> 
     
     <p onClick={signupHandler} className='text-white py-6  cursor-pointer'>{
      issignin ? 'New to Netflix ? Sign Up Now' : 'Already registered'
     }</p>
     </form>   
     </div>
      </div>
    
     
  )
}

export default Login