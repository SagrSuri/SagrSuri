// eslint-disable-next-line no-unused-vars
import React from 'react'

const Print = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <button 
        onClick={handlePrint} 
        className="px-4 py-[2px] bg-transparent fill-left-to-right border-[1px] border-black dark:border-white rounded-full"
      >
        Print
      </button>
    </div>
  )
}

export default Print;