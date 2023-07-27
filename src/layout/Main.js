import { React, useEffect, useState } from 'react'
import Navbar from '../page/Shared/Navbar/Navbar'
import Footer from '../page/Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
    const [showFooter, setShowFooter] = useState(true);
    useEffect(() => {
        let timeoutId;
        console.log(showFooter)
        if (!showFooter) {
          timeoutId = setTimeout(() => {
            setShowFooter(true);
          }, 2000);
        }
    
        return () => clearTimeout(timeoutId);
      }, [showFooter]);
    return (
        <div>
            <Navbar showFooter={showFooter} setShowFooter={setShowFooter}/>
            <Outlet />
            {showFooter && <Footer />}
           
        </div>

    )
}

export default Main