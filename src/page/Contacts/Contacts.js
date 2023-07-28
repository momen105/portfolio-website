import React from 'react'
import './contacts.css'
import {FiMail} from 'react-icons/fi'
import {FaLocationArrow,FaPhone,FaUserClock} from 'react-icons/fa'
function Contacts() {
    return (
        <div className='md:flex m-auto mt-8 h-[62vh] bg-transparent w-[70vw] border border-gray-800 overflow-y-auto'>
            <div className='md:w-1/2 md:border-r md:border-gray-800 md:flex md:flex-col md:justify-between max-md:bg-body'>
                <div className='flex md:justify-between max-md:flex-col max-md:items-center max-md:gap-2 max-md:pt-2'>
                    <div className='h-[150px] w-[200px] md:border-r md:border-b max-md:border contacts-context'>
                        <p className='icon'><FiMail /></p>
                        <span className='text-sm'>
                            <p>momentohin02@gmail.com</p>
                            <p>momentohin105@gmail.com</p>
                        </span>
                    </div>
                    <div className='h-[150px] w-[200px] md:border-l md:border-b max-md:border contacts-context'>
                        <p className='icon'><FaLocationArrow /></p>
                        <p className='text-sm'>House:23, Road-3, Nikunja-2, Dhaka, Bangladesh</p>
                        </div>
                </div>
                <div className='flex md:justify-between max-md:flex-col max-md:items-center max-md:gap-2 max-md:pt-2'>
                    <div className='h-[150px] w-[200px] md:border-t md:border-r max-md:border contacts-context'>
                        <p className='icon'><FaPhone /></p>
                        <spna className="text-sm">
                            <p>+8801777305810</p>
                            <p>+8801515233688</p>
                        </spna>
                        </div>
                    <div className='h-[150px] w-[200px] md:border-t md:border-l max-md:border  contacts-context'>
                        <p className='icon'>< FaUserClock/> </p>
                        <p className='text-sm text-justify'>I am available for full-time/part-time job hire.</p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 bg-body p-10 max-md:pt-5'>
                <form>
                    <div className='name'>
                        <input type="text" id="name" name="name" className='input'></input>
                        <label for="name" className='lable'>Name</label>
                    </div>
                    <div className='email'>
                        <input type="text" id="email" name="email" className='input'></input>
                        <label for="email" className='lable'>Email</label>
                    </div>
                    <div className='message'>
                        <input type="text" id="message" name="message" className='input h-[20vh]'></input>
                        <label for="message" className='lable'>Message</label>
                    </div>
                    <button type='button' className='bg-primary w-1/2 block m-auto rounded-sm text-xl text-black' >Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts