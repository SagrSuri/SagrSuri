// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';


function Toggle( ) {


    //**********************DarK MODE********************* */
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
  
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  //*******************************Dark End******************* */


    return (
        <div className='h-auto w-auto justify-center items-center align-middle'>
            <button
                onClick={toggleDarkMode}
                className={`flex justify-center items-center align-middle p-2 rounded-full ${darkMode ? "text-white" : "text-black"
                    }`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} >
                {darkMode ? <IoSunnySharp /> : <IoMoonSharp />}
            </button>
        </div>
    );
}


export default Toggle;
