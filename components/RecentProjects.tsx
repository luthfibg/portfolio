import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}	
        <span className='dark:text-purple text-purple-600'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-16 md:gap-y-10 mt-10'>
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className='sm:h-[30rem] h-[25rem] lg:min-h-[29rem] flex item-center justify-center sm:w-[200px] w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-full sm:h-[30vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden rounded-md lg:rounded-xl bg-[#13162d]'>
                  <img src='/bg.png' alt='bg-img'/>
                </div>
                <img 
                  src={img} alt={title}
                  className='z-10 absolute bottom-2 md:bottom-5'
                />
              </div>
              <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className="flex items-center justify-between mt-4 h-fit">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-5 flex justify-center items-center" style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className="p-1" />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                  <FaLocationArrow className='ms-3' color='#CBACF9'/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects