import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import boozesticksImg from '../public/assets/projects/boozesticks.jpg'


const boozesticks = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={boozesticksImg} alt='' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white' >
            <h2 className='py-2'>Booze and Sticks</h2>
            <h3>React Js / Commerce Js</h3>
        </div>
      </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p className='col-span-4'>
               An E Commerce website consisting of a simple storefront linked to  Commerce Js, which is a flexible commerce engine for businesses. 
                 </p> 
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                 <button className='px-8 py-2 mt-4'>Github Link</button>  
        </div> 
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 '>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/>React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/>Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/>Commerce JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/>Chec API
                            </p>
                </div>
            </div>
            
            </div> 
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
    </div>
</div>
    
  )
}

export default boozesticks
