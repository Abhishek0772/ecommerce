import React from 'react'

function Contact() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">

        <div className='flex items-center flex-col justify-center w-2/3 rounded-md shadow-md shadow-gray-400 h-auto py-5 bg-slate-200 gap-5'>
        <h2 className=' text-2xl'>
        CONTACT US
        </h2>

        <form className='flex items-center flex-col justify-center w-96 ' action="#">
            <input type="text" placeholder='enter name 'className='border-[1px] w-full rounded-sm px-6 py-2 my-2 rounded-md border-black'/>
            <input type="email"  className='border-[1px] w-full py-2 px-6 my-2 rounded-md border-black' placeholder='enter your mail ' />
            <textarea name="" id="" cols="28" rows="10 " className='w-full my-2 rounded-md border-black border-[1px]' placeholder='enter your massages'></textarea>
            <button className='border-[1px] border-black py-3 px-2 my-2 rounded-sm hover:scale-105 delay-150 duration-200'>Submit</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Contact