// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './CrazyArchLoader.css'; // Import the CSS file
import Back from '../../Back'


const CrazyArch = () => {
  useEffect(() => {
    // No JavaScript needed as animations are handled purely through CSS
  }, []);

  return (
   <div className='body'>
    <Back/>
     <div className="content">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
   </div>
  );
};

export default CrazyArch;
