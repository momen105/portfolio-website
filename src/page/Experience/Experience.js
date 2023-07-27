import React from 'react'
import './experience.css'
import { BiSolidTimeFive } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';
import { HiBuildingOffice } from 'react-icons/hi2';
function Experience() {
    return (
        <div className='w-full mt-8'>
            <div className='relative experience-container w-full'>
                <div className='m-auto border border-[#9D9D9D] w-fit p-2'>
                    <p className='text-base text-[#4bffa5]'>1 Year 6 Months Experience</p>
                </div>
                <span className='block m-auto h-[10vh] w-[0.1vw] bg-[#9D9D9D]'></span>
                <span class="circle"></span>
                <div className='absolute md:w-[25vw] md:h-[13vh] p-3 top-[25%] left-[51%] bg-body border border-gray-800'>
                    <span className='flex gap-2'><p className='logo'><BiSolidTimeFive /></p><p className='date'> 12/02/2023 - present</p></span>
                    <span className='flex gap-2'><p className='logo'><FaUserTie /> </p><p className='designation'>Software Engineer (Backend)</p></span>
                    <span className='flex gap-2'><p className='logo'>< HiBuildingOffice /> </p> <p className='company'>Nexa Global Holdings Limited</p></span>
                </div>
                <span className='block m-auto h-[15vh] w-[0.1vw] bg-[#9D9D9D]'></span>
                <span class="circle"></span>
                <div className='absolute md:w-[25vw] md:h-[13vh] p-3 top-[50%] right-[51%] bg-body border border-gray-800 '>
                    <span className='flex gap-2'><p className='logo'><BiSolidTimeFive /></p><p className='date'> 08/05/2022 - 09/02/2023 </p></span>
                    <span className='flex gap-2'><p className='logo'><FaUserTie /> </p><p className='designation'>Backend Developer (Django)</p></span>
                    <span className='flex gap-2'><p className='logo'>< HiBuildingOffice /> </p> <p className='company'>Nexis Limited</p></span>
                </div>
                <span className='block m-auto h-[15vh] w-[0.1vw] bg-[#9D9D9D]'></span>
                <span class="circle"></span>
                <div className='absolute md:w-[25vw] md:h-[13vh] p-3 top-[75%] left-[51%] bg-body border border-gray-800 '>
                    <span className='flex gap-2'><p className='logo'><BiSolidTimeFive /></p><p className='date'> 01/01/2022 - 31/04/2022 </p></span>
                    <span className='flex gap-2'><p className='logo'><FaUserTie /> </p><p className='designation'>Django Developer (Intern)</p></span>
                    <span className='flex gap-2'><p className='logo'>< HiBuildingOffice /> </p> <p className='company'>Mechanic koi PVT.LTD</p></span>
                </div>
                <span className='block m-auto h-[15vh] w-[0.1vw] bg-[#9D9D9D]'></span>
            </div>
        </div>
    )
}

export default Experience