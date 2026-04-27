import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import "../index.css"

const NotFoundPage = () => {
  return (
    <>
    <DotLottieReact
      src="https://lottie.host/c2e142eb-3d43-48d0-a2d6-b0c5b45771f3/xiHkm69XKG.lottie"
      loop
      autoplay
      className='anim'
      
      
    />
   <div className='mb-6 flex justify-center'>
     <Link 
    to={"/"}
    className="w-max  bg-emerald-500   text-white px-6 py-2  rounded-full font-medium text-sm hover:bg-emerald-600 transition "
    >Go Back Home</Link>
   </div>
    </>
  )
}

export default NotFoundPage