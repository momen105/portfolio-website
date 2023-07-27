import { React, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import Loader2 from '../../../component/Loader/Loader2';

function Navbar({showFoote,setShowFooter}) {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    }
    const handleNavLinkClick = () => {
        setShowFooter(false)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div>
            {
                loading ? <Loader2 /> : []
            }
            <nav className='md:px-12 md:pt-10 md:pb-3 md:sticky md:top-0 md:z-50 md:bg-transparent max-md:hidden '>
                <ul className='flex flex-row justify-between '>
                    <li>
                        <NavLink to='/' className='font-bold hover:text-slate-200'>Momen <a className='text-slate-200'>Tohin</a></NavLink>
                    </li>
                    <li className='hidden font-bold md:block'>
                        <div className='flex gap-10 '>
                            <NavLink to='/' className='text-slate-200'><b>Home</b></NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/skills'>Skills</NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/resume'>Resume</NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/projects'>Projects</NavLink>
                            <NavLink to='/experience'>Experience</NavLink>
                            {/* <NavLink to='/studynote'>Study Note</NavLink> */}
                            {/* <NavLink to='/article'>Article</NavLink> */}
                            <NavLink onClick={handleNavLinkClick} to='/contacts'>Contacts</NavLink>
                        </div>
                    </li>
                    {/* hamburger button */}
                    <li className='md:hidden'>
                        <button type='button' onClick={handleMenu} className='text-[#4bffa5]'> {open === true ? <FaTimes /> : <FaBars />} </button>
                    </li>
                </ul>
            </nav>
            {/* mobile-nav */}
            <nav className={`px-6 pt-10 pb-3 sticky top-0 z-50 w-full md:hidden ${open ? 'bg-black' : 'bg-transparent'}`}>
                <ul className='flex flex-row justify-between'>
                    <li>
                        <NavLink to='/' className='font-bold hover:text-slate-200'>Momen <a className='text-slate-200'>Tohin</a></NavLink>
                    </li>
                    {/* hamburger button */}
                    <li className='md:hidden'>
                        <button type='button' onClick={handleMenu} className='text-[#4bffa5]'> {open === true ? <FaTimes /> : <FaBars />} </button>
                    </li>
                </ul>
                {open ? (
                    <ul className='absolute mobile-menu w-full left-0 p-4 bg-black'>
                        <li className='font-semibold text-center divide-y divide-gray-600'>
                            <NavLink to='/' className='text-slate-200 '><b>Home</b></NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/skills'>Skills</NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/resume'>Resume</NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/projects'>Projects</NavLink>
                            <NavLink onClick={handleNavLinkClick} to='/experience'>Experience</NavLink>
                            {/* <NavLink to='/studynote'>Study Note</NavLink>
                            <NavLink to='/article'>Article</NavLink> */}
                            <NavLink onClick={handleNavLinkClick} to='/contacts'>Contacts</NavLink>
                        </li>
                    </ul>

                ) : null}
            </nav>

        </div >
    )
}

export default Navbar