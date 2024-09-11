// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });
  
  const [imageUrl, setImageUrl] = useState('');

  const externalImageUrlComputerDark = 'https://img.freepik.com/premium-photo/word-welcome-isolated-white-background-made-uncial-calligraphy-style_107173-64339.jpg?w=826';
  const externalImageUrlComputerLight = 'https://img.freepik.com/premium-vector/welcome-ready-inscription-template-neon-signboard_110464-103.jpg?w=740';

  const externalImageUrlMobileTabletDark = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTZqO1pgf4LOExXm_FvzlAHopOekof5JppQ&s';
  const externalImageUrlMobileTabletLight = 'https://img.freepik.com/free-vector/welcome-neon-sign-vector_53876-76088.jpg?t=st=1725373247~exp=1725376847~hmac=ebb91d36ee8b7aa3545eb2a5bb87026cc8fef9d6db93614a8b64b4ed2635788a&w=360';

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
    <div>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <div
        className="flex justify-center items-center h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
    </div>
  );
}

export default Welcome;
