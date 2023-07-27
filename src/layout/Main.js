import { React, useEffect, useState } from 'react'
import Navbar from '../page/Shared/Navbar/Navbar'
import Footer from '../page/Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
    // const [showFooter, setShowFooter] = useState(false);
    // useEffect(() => {
    //     const showFooterTimeout = setTimeout(() => {
    //         setShowFooter(true);
    //     }, 2000);
    //     return () => clearTimeout(showFooterTimeout);
    // }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            {/* {console.log(props.data)} */}
        </div>

    )
}

export default Main