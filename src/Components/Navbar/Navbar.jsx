// eslint-disable-next-line no-unused-vars
import React from 'react';
import Toggel from '../Toggel/Toggel';
import { NavLink } from 'react-router-dom';
import { FaHandshake } from 'react-icons/fa';
import { links } from '../Home/linkData.js'
// eslint-disable-next-line react/prop-types
function Navbar({ darkMode, toggelChange }) {

    return (
        <div className='h-14 flex justify-between px-6 items-center align-middle text-black dark:text-white border-[1px] dark:border-slate-700 shadow-sm'>
            <div>
                <h1 className='font-bold text-2xl flex justify-center items-center gap-1 gradient-text'>
                    <NavLink to='/profile'>
                        <FaHandshake className='text-4xl text-pink-600 dark:text-orange-500 cursor-pointer' />
                    </NavLink>
                    Portfolio
                </h1>
            </div>
            <ul className='flex justify-center items-center gap-5 p-2 font-bold'>
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        className={({ isActive }) => (
                            `fill-left-to-right font-serif font-normal py-[1px] px-3 border-[1px] border-black dark:border-white rounded-full ${isActive
                                ? darkMode
                                    ? 'bg-[#0400ff] text-white'
                                    : 'bg-[#0af899dc] text-black'
                                : 'bg-white dark:bg-black text-black dark:text-white'
                            }`
                        )}
                    >
                        <li>
                            {link.label}
                        </li>
                    </NavLink>
                ))}
            </ul>
            <div className='text-xl'>
                <Toggel darkMode={darkMode} toggelChange={toggelChange} />
            </div>
        </div>
    );
}

export default Navbar;
