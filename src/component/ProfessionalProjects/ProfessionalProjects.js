import React from 'react'

import school from '../../assests/images/projects/school.jpg'
import hrm from '../../assests/images/projects/hrm.jpg'
import hrm2 from '../../assests/images/projects/hrm-2.jpg'
import menu from '../../assests/images/projects/menu.jpg'
import door from '../../assests/images/projects/door.jpg'
import restro from '../../assests/images/projects/restro.webp'
import office from '../../assests/images/projects/office.jpg'

function ProfessionalProjects() {
    return (
        <div className='content-animate md:flex h-[450px] border  border-gray-800 bg-body overflow-y-auto'>
            <div className='md:w-2/5 w-full'>
                <div className='relative h-[40vh] p-10 border-b border-gray-800 overflow-hidden group transition-all'>
                <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all duration-500'>
                </div>
                    <img className='w-full h-full filter brightness-[0.2]' src={school}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>School Management System</p>
                    </div>
                </div>

                <div className='relative h-[40vh] p-10 border-b border-gray-800 overflow-hidden group transition-all'>
                <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all duration-500'>

                </div>
                    <img className='w-full h-full filter brightness-[0.2]' src={door}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Automated Door Open System</p>
                    </div>

                </div>
                <div className='relative h-[40vh] p-10 border-b border-gray-800 overflow-hidden group transition-all'>                
                    <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all duration-500'>

                    </div>
                    <img className='w-full h-full filter brightness-[0.2]' src={restro}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Restaurant Website</p>
                    </div>
                </div>
                <div className='relative h-[40vh] p-10 border-b border-gray-800 overflow-hidden group transition-all'>
                <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all duration-500'>

                    </div>
                    <img className='w-full h-full filter brightness-[0.2]' src={office}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Corporate Website</p>
                    </div>
                
                </div>
            </div>
            <div className='md:w-3/5 w-full '>
                <div className='relative p-10 border-b border-l border-gray-800 overflow-hidden group transition-all'>
                <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all duration-500'>

                    </div>
                    <img className='md:h-[50vh] h-[30vh] w-full filter brightness-[0.2]' src={hrm}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Human Resource Management One</p>
                    </div>

                </div>
                <div className='relative p-10 border-b border-l border-gray-800 overflow-hidden group transition-all'>
                    <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all duration-500'>

                    </div>
                    <img className='md:h-[50vh] h-[30vh] w-full filter brightness-[0.2]' src={hrm2}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Human Resource Management Two</p>
                    </div>
                </div>

                <div className='relative p-10 border-l border-gray-800 overflow-hidden group transition-all'>
                    <div className='top-0 left-0 w-full h-0 bg-primary group-hover:h-4 transition-all'>

                </div>
                    <img className='md:h-[50vh] h-[30vh] w-full filter brightness-[0.2]' src={menu}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Digital Menu</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default ProfessionalProjects