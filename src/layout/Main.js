import React from 'react'
import Navbar from '../page/Shared/Navbar/Navbar'
import Footer from '../page/Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>

    )
}

export default Main