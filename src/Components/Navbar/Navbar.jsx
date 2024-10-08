// eslint-disable-next-line no-unused-vars
import React from 'react';
import { links } from '../Home/linkData.js';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import ToggleDark from '../../OwnedComponents/ToggleDark.jsx'
import ToggleO from '../../OwnedComponents/ToggleO.jsx'
import DonateButton from './DonateButton.jsx';
import { NavLink } from 'react-router-dom';

function Navbar() {

    function changeWidth() {
        const drawerSide = document.querySelector(".drawer-side");
        if (drawerSide) {
            drawerSide.style.width = 'auto';
        }
    }

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
        <div>
            {/* **************DRAWER SIDE MENU************** */}
            <div className="flex md:hidden sm:block justify-center items-center align-middle pr-4 xl:hidden lg:hidden bg-transparent sticky top-0 z-40 ">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className='btn-primary drawer-button'>
                            <FiMenu
                                onClick={changeWidth}
                                size={"2rem"}
                                className="font-bold text-black bg-slate-200 dark:bg-black dark:text-white m-4 cursor-pointer fixed right-1"
                            />
                        </label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={hideDrawer}></label>
                        <ul className="menu dark:bg-gray-800 bg-gray-300 text-base-content min-h-full w-64 p-4 relative">
                            <li className="my-3 w-full content-center">
                                <button onClick={hideDrawer} className="text-2xl text-[#00190e] dark:text-blue-500 z-50">
                                    <AiFillCloseCircle size={30} />
                                </button>
                            </li>
                            <div className='flex flex-col justify-center items-center gap-3 font-bold text-black dark:text-white'>
                                {links.map((link, index) => (
                                    <li key={index} className={`fill-left-to-right w-36 py-1 px-4 rounded-full border-[1px] border-black dark:border-white text-center ${window.location.pathname === link.to
                                        ? 'bg-[#0af899dc] text-black dark:bg-[#0400ff] dark:text-white'
                                        : 'text-black dark:text-white'
                                    }`}>
                                        <NavLink
                                            to={link.to}
                                            onClick={hideDrawer}
                                            className="flex justify-center w-full"
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                                
                                <li className='fill-left-to-right'>
                                    <ToggleDark/>
                                </li>
                            </div>
                            <DonateButton/>
                        </ul>
                    </div>

                </div>
            </div>
            {/* ******************NAVBAR FOR LARGE SCREEN********* */}
            <div className='sm:hidden xm:hidden md:block lg:block xl:block'>
                <div className="h-14 flex justify-between px-6 items-center align-middle shadow-sm dark:bg-black bg-white pt-1">
                    <DonateButton/>
             
                    <ul className='flex justify-center items-center gap-5 p-2 font-bold'>
                        {links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className={({ isActive }) => (
                                    `fill-left-to-right font-serif font-normal py-[1px] px-3 border-[1px] border-black dark:border-white rounded-full ${isActive
                                        ? 'bg-[#0af899dc] text-black dark:bg-[#0400ff] dark:text-white'
                                        : 'bg-white text-black dark:bg-black dark:text-white'
                                    }`
                                )}
                            >
                                <li>
                                    {link.label}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                    <div className='relative'>
                        <ToggleO/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
