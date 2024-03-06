import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:block w-[700px] text-lg py-6'>{overview}</p>
        <div className='flex gap-3'>
            <button className='bg-white text-black p-1  md:px-12  md:py-2 hover:opacity-80 md:text-2xl  text-[12px] rounded-md flex md:justify-center items-center'> <div>
                <img src="https://img.icons8.com/?size=26&id=397&format=png" alt="" /></div> Play</button>
            <button className='bg-gray-500 bg-opacity-60 p-1 text-white text-[12px] md:text-2xl md:px-6 md:py-2 hover:opacity-80 text-3xl rounded-md flex justify-center items-center gap-2'>
              <div><img className='w-10' src="https://cdn-icons-png.flaticon.com/128/545/545674.png" alt="" /></div>
              More Info</button>
        </div>
    </div>
  )
}

export default Videotitle