import React from 'react'
import './home.css'
import ReactTyped from 'react-typed';
import OwnImage from '../../assests/images/test.jpg';

function Home() {
    return (
        <div>
            <div className='md:pl-12'>
                <img className='ownimage absolute top-0 md:w-[760px] ' src={OwnImage} />
            </div>
            <div className='absolute md:w-[400px] w-[350px] md:left-1/2 left-6 bottom-36'><h1 className='text-slate-200 text-lg'> Hello, I'm <span className='text-[#4bffa5]'>Md.Nur-ul Momen Tohin</span>, Software Engineer and Backend Developer based in Python.</h1></div>

            <div className='absolute left-6  md:left-1/2 md:-translate-x-1/2 md:bottom-16 bottom-24'>

                <p className='text-slate-200 text-4xl md:text-6xl font-semibold'>
                    <ReactTyped
                        strings={[
                            "I'm a <span style='color:#4bffa5;'>Software Engineer</span>",
                            "I Love <span style='color: #4bffa5;'>Python</span>",
                        ]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        cursorChar=" "
                        showCursor={true}
                        contentType="html"
                    />
                </p>
            </div>
        </div>
    )
}

export default Home