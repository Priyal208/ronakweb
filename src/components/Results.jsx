import React from 'react'
import r1 from '../imgs/Res1.avif'
import r2 from '../imgs/Res2.jpg'
import r3 from '../imgs/Cour1.png'
import r4 from '../imgs/Cour3.webp'

const Results = () => {
  return (
  <div className=' bg-pink-900'>
  <div className='text-center font-medium text-[60px]'>RESULTS</div>
    <div className='w-full h-[90vh] flex gap-4 p-4 sm:flex-col sm:h-1/2 sm:justify-center sm:items-center border-2'>
     <div className='w-[35%] h-[100%] border-2 overflow-hidden sm:w-[90%] border-blue-600'>
        <img src ={r1} alt="" className='object-contain' />
     </div>
     <div className='w-[35%] h-[100%] border-2 overflow-hidden sm:w-[90%] border-black'>
        <img src={r2}alt="" className='object-contain' />
     </div>
     <div className='w-[30%] h-[100%] border-2 border-yellow-600 sm:w-[90%] overflow-hidden '>
        <div className='w-[100%] h-1/2 border-2 overflow-hidden '><img src={r3} alt="" className='object-contain' /></div>
        <div className='w-[100%] h-1/2 border-2 mt-2 overflow-hidden'><img src={r4} alt="" className='object-contain'/></div>
     </div>
    </div>
    </div>
  )
}

export default Results