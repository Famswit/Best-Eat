import React from 'react'

const HeadlineCards = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Cards */}
        <div className='rounded-xl relative'>
            {/*Overlay */}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out, Japa Now</p>
                <p className='px-2'>Through 8/26</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4' >Order now</button>
            </div>
            <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
        {/*Cards */}
        <div className='rounded-xl relative'>
            {/*Overlay */}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>New Restaurant</p>
                <p className='px-2'>Through 8/26</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4' >Order now</button>
            </div>
            <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3620233/pexels-photo-3620233.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </div>
        {/*Cards */}
        <div className='rounded-xl relative'>
            {/*Overlay */}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>New Spicy, Tasty</p>
                <p className='px-2'>Enjoy it </p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4' >Order now</button>
            </div>
            <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2345975/pexels-photo-2345975.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </div>
        
    </div>
  )
}

export default HeadlineCards