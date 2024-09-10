// eslint-disable-next-line no-unused-vars
import React from "react";
import Toggle from 'vite-dark'
const ToggleDark = () => {
  return (
    <div>
      <Toggle
        buttonClass="p-2 rounded-full flex flex-col w-8 h-8 m-auto justify-center item-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 shadow-sm shadow-black dark:shadow-white"
        buttonIconClass="text-[1rem] dark:text-white"
        lightButtonClass="bg-gray-400 dark:bg-gray-800"
        darkButtonClass="bg-gray-400 dark:bg-gray-800"
        lightIconClass="text-black dark:text-white"
        darkIconClass="text-black dark:text-white"
      />
    </div>
  );
};

export default ToggleDark;