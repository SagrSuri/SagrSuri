// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Toggel from '../Toggel/Toggel';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome';

// eslint-disable-next-line react/prop-types
function Home({ children }) {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        if (drawerSide.length > 0) {
            drawerSide[0].style.width = 'auto';
        }
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        if (element.length > 0) {
            element[0].checked = false;
        }

        const drawerSide = document.getElementsByClassName("drawer-side");
        if (drawerSide.length > 0) {
            drawerSide[0].style.width = '0';
        }
    }

    // Toggle Button
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleChange = () => {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className='w-full min-h-screen flex flex-col relative'> {/* Using flexbox and relative positioning */}
            <div className="drawer md:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu
                            onClick={changeWidth}
                            size={"2rem"}
                            className="font-bold dark:text-white text-black m-4"
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu dark:bg-base-300 bg-slate-300 text-base-content min-h-full w-52 p-4">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <div className='flex flex-col justify-center items-center gap-3 font-bold'>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/Skills">Skills</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/certificates">Certificates</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Toggel darkMode={darkMode} toggelChange={toggleChange} />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='hidden lg:block sticky top-0 z-40 bg-white dark:bg-black'>
                <Navbar />
            </div>
            <div className='flex-grow z-10'> {/* Ensures children are underneath the Navbar */}
                {children ? children : <Welcome/> }
            </div>
            <div> {/* Footer without fixed position */}
                <Footer />
            </div>
        </div>
    );
}

export default Home;
