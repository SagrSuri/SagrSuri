// eslint-disable-next-line no-unused-vars
import React from 'react'
import Toggle from 'vitetoggle'

function ToggleO() {
    return (
        <div className='mx-5'>
             <Toggle
        buttonClass="p-2 relative rounded-full flex flex-col w-8 h-8 m-auto justify-center item-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 shadow-sm shadow-black dark:shadow-white"
        buttonIconClass="text-[1rem] dark:text-white"
        dropdownClass="bg-slate-100 absolute dark:bg-slate-950 transition ease-out p-2 space-y-2 rounded-sm m-auto my-2 shadow-sm shadow-slate-400 "
        dropdownItemClass="flex w-full p-1 justify-center item-center rounded-md"
        dropdownHoverClass="hover:bg-slate-200 dark:hover:bg-slate-950"
        lightButtonClass="bg-gray-300 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        darkButtonClass="bg-gray-300 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        systemButtonClass="bg-gray-300 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        lightIconClass="text-black self-center dark:text-white"
        darkIconClass="text-black self-center dark:text-white"
        systemIconClass="text-black self-center dark:text-white"
      />
        </div>
    )
}

export default ToggleO;