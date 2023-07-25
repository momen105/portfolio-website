import React from 'react'
import productFiltering from '../../assests/images/projects/productFiltering.png'
import searchEngine from '../../assests/images/projects/searchEngine.jpg'
import dms from '../../assests/images/projects/dms.jpg'
import bdNote from '../../assests/images/projects/bd_note.jpg'

function PersonalProjects() {
    return (
        <div className='content-animate flex h-[450px] bg-body overflow-y-auto '>
            <div className='w-3/5'>
                <div className='relative p-10 border border-gray-800'>
                    <img className='h-[50vh] w-full filter brightness-[0.2]' src={productFiltering}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Product Filtering</p>
                    </div>
                </div>
                <div className='relative p-10 border border-y-0 border-gray-800 border-b-[1px]'>
                    <img className='h-[50vh] w-full filter brightness-[0.2]' src={bdNote}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>BankNote Detaction</p>
                    </div>
                </div>

            </div>
            <div className='w-2/5'>
                <div className='relative h-[40vh] p-10 border border-x-0 border-gray-800'>
                    <img className='w-full h-full filter brightness-[0.2]' src={searchEngine}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Search Engine</p>
                    </div>
                </div>
                <div className='relative h-[40vh] p-10 border-b-[1px] border-gray-800'>
                    <img className='w-full h-full filter brightness-[0.2]' src={dms}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Delivery Management System</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProjects