import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-full overflow-hidden py-2 fixed top-0 flex justify-around items-center bg-slate-200 z-10 bg-opacity-30 backdrop-blur-2xl'>
        <div className='font-bold border-[2px] border-orange-400 p-1 text-black text-2xl'>
        ABHI
        </div>
        <div className='flex justify-center items-center'>
            <ul className='text-md flex justify-center items-center gap-6'>
                <li className='transition  hover:scale-105 hover:text-white delay-150 duration-200'><a href="/">HOME</a>  </li>
                <li className='transition  hover:scale-105 hover:text-white delay-150 duration-200'><a href="">ABOUT</a> </li>
                <li className='transition  hover:scale-105 hover:text-white delay-150 duration-200'><a href="">CONTACT</a> </li>
                <li className='transition  hover:scale-105 hover:text-white delay-150 duration-200'><a href="">PRODUCTS</a> </li>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default Navbar