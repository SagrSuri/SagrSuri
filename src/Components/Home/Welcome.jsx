// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ToggleDark from '../../OwnedComponents/ToggleDark'
import { Link } from 'react-router-dom';
function Welcome() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });
  
  const [imageUrl, setImageUrl] = useState('');

  const externalImageUrlComputerDark = 'https://img.freepik.com/premium-photo/word-welcome-isolated-white-background-made-uncial-calligraphy-style_107173-64339.jpg?w=826';
  const externalImageUrlComputerLight = 'https://img.freepik.com/premium-vector/welcome-ready-inscription-template-neon-signboard_110464-103.jpg?w=740';

  const externalImageUrlMobileTabletDark = 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=400';
  const externalImageUrlMobileTabletLight = 'https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=400';

  useEffect(() => {
    const updateBackgroundImage = () => {
      const isMobileOrTablet = window.innerWidth < 768;
      let selectedImageUrl;

      if (isMobileOrTablet) {
        selectedImageUrl = darkMode ? externalImageUrlMobileTabletDark : externalImageUrlMobileTabletLight;
      } else {
        selectedImageUrl = darkMode ? externalImageUrlComputerDark : externalImageUrlComputerLight;
      }

      setImageUrl(selectedImageUrl);
    };

    // Update background image on mode change or window resize
    updateBackgroundImage();

    window.addEventListener('resize', updateBackgroundImage);
    return () => window.removeEventListener('resize', updateBackgroundImage);

  }, [darkMode]); // Dependency on darkMode ensures update on mode change

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div className='bg-slate-950 p-2 '>
      <div className='w-full h-10 flex justify-between px-8 gap-2 items-center align-middle m-2 '>
        <div><ToggleDark onClick={toggleDarkMode} /></div>
        <div><Link className=' dark:border-white fill-left-to-right border-[1px] py-1 px-3 rounded-lg text-white' to={'/profile'}>Start</Link></div>
      </div>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      <div className='flex justify-center items-center text-xl font-bold align-middle h-10 text-white'>
        Explore To Click Start 👆 !
      </div>
    </div>
  );
}

export default Welcome;
