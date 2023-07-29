import React from 'react'
import productFiltering from '../../assests/images/projects/productFiltering.png'
import searchEngine from '../../assests/images/projects/searchEngine.jpg'
import dms from '../../assests/images/projects/dms.jpg'
import bdNote from '../../assests/images/projects/bd_note.jpg'
import ecommerce from '../../assests/images/projects/ecommerce.jpg'
import photoShare from '../../assests/images/projects/photosShare.jpg'
import {FaGithub } from 'react-icons/fa';

function PersonalProjects() {
    return (
        <div className='content-animate flex h-[450px] border  border-gray-800 bg-body overflow-y-auto '>
            <div className='w-3/5'>
                <div className='relative group transition-all p-10 border-r border-b border-gray-800 overflow-hidden'>
                    <img className='h-[50vh] w-full filter brightness-[0.2]' src={productFiltering}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Product Filtering</p>
                    </div>
                    <div className='absolute flex flex-col items-center gap-2 text-justify -left-full -bottom-full h-full w-full p-8  bg-primary group-hover:bottom-0 group-hover:left-0 transition-all duration-1000 text-body '>
                        <p className='text-sm'> <span className='text-base font-bold'>Description:</span> It is an ecommerce product category page. At your backend, you can create unlimited Filtering Options with Unlimited values for each one. 
                            Like, Categories, Brands, Warranty, Sellers etc. You can create a product as well if you feel necessary.</p>
                        <p className='text-sm '> <span className='text-base font-bold'>Technology use: </span>Python, Django , Django Rest Framework, HTML, CSS, Bootstrap </p>
                        <a href='https://github.com/momen105/SearchEngine' className='text-body text-2xl border border-gray-800 p-1 rounded-[50%] '><FaGithub /></a>
                    </div>
                </div>
                <div className='relative p-10 group border-r border-b transition-all border-gray-800 overflow-hidden'>
                    <img className='h-[50vh] w-full filter brightness-[0.2]' src={bdNote}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>BankNote Detaction</p>
                    </div>
                    <div className='absolute gap-2 text-justify -left-full -bottom-full h-full w-full p-8  bg-primary group-hover:bottom-0 group-hover:left-0 transition-all duration-1000 text-body '>
                        <p className='text-sm'> <span className='text-base font-bold'>Description:</span>  I completed Bangladesh banknote Detection using deep learning techniques from the banknote
                        image. Also, using the concept of transfer learning Inceptionv3. On this project, I able to train the model and achieve the best accuracy of train, test, and validation dataset.</p>
                        <p className='text-sm '> <span className='text-base font-bold'>Technology use: </span>TensorFlow, Keras, CNN Model, Matplotlib </p>
                        <a href='https://github.com/momen105/Bangladesh-BankNote-Detection' className='text-body text-2xl flex flex-col items-center pt-4'><FaGithub /></a>
                    </div>
                </div>

            </div>
            <div className='w-2/5'>
                <div className='relative h-[40vh] p-10 border-b border-gray-800 overflow-hidden group transition-all'>
                    <img className='w-full h-full filter brightness-[0.2]' src={searchEngine}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Search Engine</p>
                    </div>
                    <div className='absolute flex flex-col items-center gap-2 text-justify -left-full -bottom-full h-full w-full p-4  bg-primary group-hover:bottom-0 group-hover:left-0 transition-all duration-1000 text-body '>
                        <p className='text-sm'> <span className='text-base font-bold'>Description:</span> It is a simple search engine like Google. Everything will be stored in the database when the user searches in this search engine like, search keyword, searched time, username, email user search. As, we
                         mean by search history.</p>
                        <p className='text-sm '> <span className='text-base font-bold'>Technology use:</span>Python, Django, HTML, CSS, Bootstrap </p>
                        <a href=': https://github.com/momen105/SearchEngine' className='text-body text-2xl border border-gray-800 p-1 rounded-[50%] '><FaGithub /></a>
                    </div>
                </div>
                <div className='relative h-[40vh] p-10 border-b- border-gray-800 overflow-hidden group transition-all'>
                    <img className='w-full h-full filter brightness-[0.2]' src={photoShare}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Photo Sharing Web App</p>
                    </div>
                    <div className='absolute flex flex-col items-center gap-2 text-justify -left-full -bottom-full h-full w-full p-4  bg-primary group-hover:bottom-0 group-hover:left-0 transition-all duration-1000 text-body '>
                        <p className='text-sm'> <span className='text-base font-bold'>Description:</span>This is a web application that allows users to create photo albums, upload photos, and share
                            photo albums with others. Allow Private and public photo post.</p>
                        <p className='text-sm '> <span className='text-base font-bold'>Technology use:</span>Python, Django, HTML, CSS, Bootstrap</p>
                        <a href='https://github.com/momen105/Photo_Sharing_WebApp' className='text-body text-2xl border border-gray-800 p-1 rounded-[50%] '><FaGithub /></a>
                    </div>
                </div>
                <div className='relative h-[40vh] p-10 border-b border-gray-800 overflow-hidden group transition-all'>
                    <img className='w-full h-full filter brightness-[0.2]' src={dms}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Delivery Management System</p>
                    </div>
                    <div className='absolute flex flex-col items-center gap-2 text-justify -left-full -bottom-full h-full w-full p-4  bg-primary group-hover:bottom-0 group-hover:left-0 transition-all duration-1000 text-body '>
                        <p className='text-sm'> <span className='text-base font-bold'>Description:</span>Delivery management system project Where have three panels for users. Admin panel, Seller panel, and Employee panel.</p>
                        <p className='text-sm '> <span className='text-base font-bold'>Technology use:</span>Python, Django, HTML, CSS, Bootstrap, sslcommerz payment gateway </p>
                        <a href='https://github.com/momen105/DMS' className='text-body text-2xl border border-gray-800 p-1 rounded-[50%] '><FaGithub /></a>
                    </div>
                </div>
                <div className='relative h-[40vh] p-10 border-l border-gray-800 overflow-hidden group transition-all'>
                    <img className='w-full h-full filter brightness-[0.2]' src={ecommerce}></img>
                    <div className='absolute max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-lg text-[#4bffa5]'>Ecommerce Project</p>
                    </div>
                    <div className='absolute flex flex-col items-center gap-2 text-justify -left-full -bottom-full h-full w-full p-4  bg-primary group-hover:bottom-0 group-hover:left-0 transition-all duration-1000 text-body '>
                        <p className='text-sm'> <span className='text-base font-bold'>Description:</span>This is a e-commerce project. All personal information of users & purchased product history
                            will be recorded on their profile which they can access anytime. From here users can buy the products of
                            their choices. Users can add products to the Cart by their own choices.</p>
                        <p className='text-sm '> <span className='text-base font-bold'>Technology use:</span>Python, Django, HTML, CSS, Bootstrap, sslcommerz payment gateway </p>
                        <a href='https://github.com/momen105/Ecommerce__Project' className='text-body text-2xl border border-gray-800 p-1 rounded-[50%] '><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProjects