import React from 'react'
import New from './New.jpg'
import {AiFillStar} from 'react-icons/ai'
function Card(props) {
  // console.log(values)
  return (
    <>
        <div className='w-56 h-80 bg-slate-100 rounded-md'>
          <img src={props.image} className="w-full h-44 object-cover rounded-sm" alt="" />
          <h3 className='px-2'>{props.title} </h3>
          <div className='flex justify-star items-center gap-4 my-3 px-2'>
            
            <div className='flex justify-star items-center bg-slate-400 rounded-lg px-2 py-1 bg-opacity-40' > <AiFillStar className='text-yellow-400'/>{props.rate}</div>
            <p className='bg-slate-400 bg-opacity-40 px-2 py-1 rounded-lg'>{props.price}</p>
          </div>
          <button className='border-[1px] border-black px-3 rounded-md py-1 mx-2'>buy</button>
        </div>
    
    </>
  )
}

export default Card