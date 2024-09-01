// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
function Toggel ({darkMode ,toggelChange }) {


    return (
         <button
        onClick={toggelChange}
        className={` flex justify-center items-center align-middle ${
          darkMode ? " text-white" : " text-black"
        }`}
      >
        {darkMode ? 
        <IoSunnySharp/> :  <IoMoonSharp />}
      </button>
    )
}

export default Toggel;