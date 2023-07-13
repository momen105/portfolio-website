import React, { useEffect } from 'react'
import './loader.css'
// import preLoaderAnim from '../../animations/animation'
function Loader() {
    // useEffect(() => {
    //     preLoaderAnim()
    // })
    return (
        // <div className='loader'>
        <div className='animate-wrapper'>
            <div className='animate-top'>T</div>
            <div className='animate-bottom'> <div>O</div> </div>
            <div className='animate-top'>H</div>
            <div className='animate-bottom'><div>I</div></div>
            <div className='animate-top'>N</div>
        </div>
        // </div>
    )
}

export default Loader