import axios from 'axios'
import React,{useEffect ,useState} from 'react'
import Card from './Card'

function Fetured() {
    const [category ,setcategory] = useState([])
    const [displaycat , setdisplaycat] =useState([])
useEffect(() => {
    const getcategory=()=>{

        axios.get('https://fakestoreapi.com/products/categories').then((res)=>{setcategory(res.data)})
        // console.log(category)
    }
    getcategory()
}, [])
const displaycategory =(value)=>{

    axios.get(`https://fakestoreapi.com/products/category/${value}`).then((res)=>{setdisplaycat(res.data)})
}

  return (
    <>
        <section className='w-full h-full flex flex-col justify-start items-center gap-7   bg-slate-200 bg-opacity-20 mt-6'>
            <h1 className='text-center text-2xl w-full my-3'>
                FEATURE ITEMS
            </h1>
            <div className='flex justify-center items-center gap-3 flex-wrap w-4/5 mx-auto'>
                {
                   category.map((val)=>{
                    return(
                        <div onClick={()=>{displaycategory(val)}} className="py-4 px-2 bg-orange-600 bg-opacity-20 backdrop-blur-2xl flex justify-center items-center gap-3 flex-auto uppercase text-2xl shadow-md shadow-gray-200 rounded-md hover:scale-105 duration-200 delay-100">
                            <p className='text-lg' key={val}  >
                                {val}
                                </p>
                        </div>
                    )
                   })
                }
            </div>

            {/* diplay cards */}
            <div className="flex justify-center items-center flex-wrap gap-3">

            {displaycat.map((as)=>{return(<><Card title={as.title} price={as.price} image={as.image} rate={as.rate} /></>)})}
            </div>

        </section>
    
    </>
  )
}

export default Fetured