// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Toggel from '../Toggel/Toggel';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome';
import { FaHandshake } from 'react-icons/fa';
import './Drawer.css';

// eslint-disable-next-line react/prop-types
function Home({ children }) {

    //*******************DARK MODE************** */
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);
    
    const toggleChange = () => {
        setDarkMode(!darkMode);
      };
   //*********************DARK MODE END******************* */

   

    // Function to adjust the width of the drawer
    function changeWidth() {
        const drawerSide = document.querySelector(".drawer-side");
        if (drawerSide) {
            drawerSide.style.width = 'auto';
        }
    }
    // Function to hide the drawer
    function hideDrawer() {
        const element = document.querySelector(".drawer-toggle");
        if (element) {
            element.checked = false;
        }

        const drawerSide = document.querySelector(".drawer-side");
        if (drawerSide) {
            drawerSide.style.width = '0';
        }
    }

    return (
        <div className='w-full min-h-screen flex flex-col relative'> {/* Using flexbox and relative positioning */}
            <div className='flex justify-center items-center align-middle pr-4 xl:hidden lg:hidden'>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className='btn-primary drawer-button'>
                            <FiMenu
                                onClick={changeWidth}
                                size={"2rem"}
                                className="font-bold dark:text-white text-black m-4 cursor-pointer"
                            />
                        </label>
                    </div>
                    
                    <div onClick={hideDrawer} className="drawer-side z-50"> {/* Ensure drawer is above content */}
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={hideDrawer}></label>
                        <ul className="menu dark:bg-base-200 bg-slate-200 text-base-content min-h-full w-40 p-4">
                            <li className="w-fit mb-4">
                                <button onClick={hideDrawer} className="absolute right-2 z-50">
                                    <AiFillCloseCircle size={24} />
                                </button>
                            </li>
                            <div className='flex flex-col justify-center items-center gap-3 font-bold text-black dark:text-white costomization'>
                                <li>
                                    <Link to={'/SagrSuri/profile'} onClick={hideDrawer}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/SagrSuri/Skills"} onClick={hideDrawer}>Skills</Link>
                                </li>
                                <li>
                                    <Link to={"/SagrSuri/projects"} onClick={hideDrawer}>Projects</Link>
                                </li>
                                <li>
                                    <Link to={"/SagrSuri/certificates"} onClick={hideDrawer}>Certificates</Link>
                                </li>
                                <li>
                                    <Link to={"/SagrSuri/contact"} onClick={hideDrawer}>Contact</Link>
                                </li>
                                <li onClick={hideDrawer} className='text-2xl'>
                                    <Toggel darkMode={darkMode} toggelChange={toggleChange} />
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-2xl flex justify-center items-center gap-1'>
                        <Link to={'/SagrSuri/'}>
                            <FaHandshake className='text-4xl text-pink-600 dark:text-orange-500 cursor-pointer' />
                        </Link>
                        Portfolio
                    </h1>
                </div>
            </div>
            <div className='hidden lg:block sticky top-0 z-40 bg-white dark:bg-black'>
                <Navbar darkMode={darkMode} toggelChange={toggleChange} />
            </div>
            <div className='flex-grow z-10'>  {/* Ensures children are underneath the Navbar */}
                {children ? children : <Welcome/> }
            </div>
            <div className='relative'> {/* Ensures footer is on top of the main content */}
                <Footer />
            </div>
        </div>
    );
}

export default Home;
