import React from 'react'
import Image from 'next/image'
import bannerImg from '../public/assets/banner.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen  p-2 flex items-center py-16 pb-100'>
        <div className='max-w-[1240px] m-auto md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4 '>Who I Am</h2>
                <p className='py-2 text-gray-600'>I am a Front End Web developer from Nigeria </p>
                <p className='py-2 text-gray-600'> I’m working as a Software and web Developer contributing to frontend and backend for building web applications.
Currently developing my skills in React.js and other Javascript frameworks.I’m looking to collaborate on Data Science and Cybersecurity.In my free time, I play video games, listen to podcasts and read tech articles.</p>
            </div>
            <div className='w-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={bannerImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About