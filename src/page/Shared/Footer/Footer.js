import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className='fixed md:bottom-16 bottom-6 md:left-12 left-6 md:text-base'>
                <ul className='text-[#9D9D9D] text-[13px]'>
                    <li><a>E: momentohin02@gmail.com</a></li>
                    <li><a>T: +8801777305810</a></li>

                </ul>
            </div>
            <div className='relative md:fixed md:top-48 md:right-16'>
                <ul className='md:space-y-6' >
                    <li><p className='hidden [writing-mode:vertical-lr] text-[#9D9D9D] text-lg md:block'>Follow Me</p></li>
                    <li className='hidden md:flex md:justify-center'>
                        <span className='block mr-2 h-16 w-px bg-[#9D9D9D]'></span>
                    </li>
                    <ul className='space-y-6 fixed md:absolute md:left-0 right-4 max-md:top-[700px]'>
                        <li><a href='#' className='text-[#9D9D9D] text-xl'><FaLinkedinIn /></a></li>
                        <li><a href='#' className='text-[#9D9D9D] text-xl'><FaFacebookF /></a></li>
                        <li><a href='#' className='text-[#9D9D9D] text-xl'><FaGithub /></a></li>
                    </ul>
                </ul>
            </div >

        </div>

    )
}

export default Footer