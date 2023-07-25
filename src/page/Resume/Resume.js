import React from 'react'
import './resume.css'
import OwnImage from '../../assests/images/test.jpg';
export const Resume = () => {
    return (
        <div className='resume md:flex border border-gray-800 w-2/3 md:h-[350px] max-md:h-[700px] md:mt-8 md:pt-12  max-md:mt-8 m-auto bg-body'>
            <img className='resumeimage md:h-[300px] md:w-[340px] h-[280px] md:mt-0 mt-10' src={OwnImage} />
            <div>
                <p className='text-[#9D9D9D] text-justify md:w-11/12 md:p-0 p-4 '>
                    This is Md. Nur-Ul Momen Tohin. I’m very proficient in programming language Python. I will be able to utilize my
                    knowledge and handles complex project management & coordinate work very efficiently to deliver results.
                </p>
                <div className='hidden md:flex justify-between text-[14px] text-[#9D9D9D]  w-11/12 pt-10 md:pb-8'>
                    <div className='w-1/2'>
                        <p ><span>Phone : </span> +8801777305810</p>
                        <p ><span>Email : </span> momentohin02@gmail.com</p>
                    </div>
                    <div className='w-1/2'>
                        <p><span>Address : </span>Nikunja-2, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <button class="md:m-0 block m-auto rounded-none w-40 p-2 mt-8 border-solid border-2 border-[#4bffa5] text-[#4bffa5] hover:bg-[#4bffa5] hover:text-black ">Download CV</button>
            </div>
        </div>
    )
}
export default Resume