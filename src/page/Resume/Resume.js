import React from 'react'
import './resume.css'
import OwnImage from '../../assests/images/test.jpg';
export const Resume = () => {
    return (
        <div className='resume md:flex border border-gray-800 w-2/3 md:h-[350px] max-md:h-[390px] md:mt-16 md:pt-12  max-md:mt-6 m-auto bg-body'>
            <img className='max-md:absolute max-md:top-[117px] max-md:left-24 resumeimage md:h-[300px] md:w-[330px] h-[250px] ' src={OwnImage} />
            <div className=''>
                <p className='text-[#9D9D9D] w-80 text-justify md:w-11/12 md:p-0 p-4 max-md:absolute  max-md:bottom-40 max-md:text-[13px]'>
                    This is Md. Nur-Ul Momen Tohin. I’m very proficient in programming language Python. I will be able to utilize my
                    knowledge and handles complex project management & coordinate work very efficiently to deliver results.
                </p>
                <div className='hidden md:flex justify-between text-[15px] text-[#9D9D9D]  w-11/12 pt-10'>
                    <div className='w-1/2'>
                        <p ><span>Phone : </span> +8801777305810</p>
                        <p ><span>Email : </span> momentohin02@gmail.com</p>
                    </div>
                    <div className='w-1/2'>
                        <p><span>Address : </span>Nikunja-2, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <button class="rounded-none w-40 p-2 mt-14 border-solid border-2 border-[#4bffa5] text-[#4bffa5] hover:bg-[#4bffa5] hover:text-black max-md:absolute  max-md:right-[170px] max-md:bottom-28">Download CV</button>
            </div>
        </div>
    )
}
export default Resume