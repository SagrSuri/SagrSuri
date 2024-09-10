// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProfileCv = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button 
        onClick={handlePrint} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Print
      </button>
      {/* Your existing content goes here */}
    </div>
  );
};

export default ProfileCv;
