import React from 'react'
import r1 from '../imgs/re1.jpg'
import r2 from '../imgs/re2.jpg'
import r3 from '../imgs/re3.jpg'
import '../global.css'

const Results = () => {
  return (
  <div className=' py-20' id='results'>
  <div className='text-center font-medium text-[60px]'>RESULTS</div>
    <div className='w-full h-[90vh] flex gap-4 p-4 sm:flex-col sm:h-1/2 sm:justify-center sm:items-center'>
     <div className='w-[35%] h-[100%] overflow-hidden sm:w-[90%] '>
        <img src ={r1} alt="" className='object-contain' />
     </div>
     <div className='w-[35%] h-[100%] overflow-hidden sm:w-[90%] '>
        <img src={r2}alt="" className='object-contain' />
     </div>
     <div className='w-[35%] h-[100%] overflow-hidden sm:w-[90%] '>
        <img src={r3}alt="" className='object-contain' />
     </div>
    </div>
    </div>
  )
}

export default Results