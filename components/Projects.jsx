import React from 'react'
import ProjectItem from './ProjectItem'
import boozesticksImg from '../public/assets/projects/boozesticks.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
import storefrontImg from '../public/assets/projects/storefront.png'



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] '>
                Projects
                </p>
            <h2 className='py-4'>What I have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
               title='Booze-and-Sticks' 
               backgroundImg={boozesticksImg} 
               projectUrl='/boozesticks'
               />
               <ProjectItem 
               title='Portfolio' 
               backgroundImg={portfolioImg} 
               projectUrl='/portfolio'
               />
                <ProjectItem 
               title='Storefront' 
               backgroundImg={storefrontImg} 
               projectUrl='/storefront'
               />
               
              



            </div>
      </div>
    </div>
  )
}

export default Projects