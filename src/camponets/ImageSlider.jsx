import React from 'react'
import Bike from "./sofa.jpg"

function ImageSlider() {
  return (
    <>
      <div className=' w-full h-screen overflow-hidden'>
        <div className="slider w-full before:h-screen before:bg-slate-800 before:bg-opacity-25 before:w-full  before: content-[''] before:absolute">

      <img className='w-full overflow-hidden sm:bg-center h-screen bg-fixed' src={Bike} alt="no" />
        </div>
      <div className='absolute top-32 w-full text-center my-6 text-white  z-10 '>
      <h1 className='text-5xl first-letter:text-red-600 text-black font-bold underline-offset-8 animate-bounce delay-75 my-6 mx-1'>
        WELCOME TO ECOMMERCE
      </h1>
      <p className='mx-auto w-10/12 sm:text-lg text-black '>
        Lorem i  adipisicing elit. Totam molestias, maiores, iste laborum quos facere autem officia, corrupti repellendus dicta officiis provident porro beatae ex omnis illum modi commodi reprehenderit?
      </p>
      <button className='border p-2 my-8 hover:bg-white hover:text-black rounded-lg py-2'  >
          SHOP NOW
      </button>
      </div>
      </div>
 

   
    </>
  )
}

export default ImageSlider