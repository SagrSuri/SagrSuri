// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
function Welcome({ darkMode }) {
  const [imageUrl, setImageUrl] = useState('');

  const externalImageUrlComputerDark = 'https://img.freepik.com/premium-photo/word-welcome-isolated-white-background-made-uncial-calligraphy-style_107173-64339.jpg?w=826';
  const externalImageUrlComputerLight = 'https://img.freepik.com/premium-vector/welcome-ready-inscription-template-neon-signboard_110464-103.jpg?w=740';

  const externalImageUrlMobileTabletDark = 'https://img.freepik.com/premium-photo/colorful-welcome-sign-that-says-welcome_1282156-6862.jpg?w=740';
  const externalImageUrlMobileTabletLight = 'https://img.freepik.com/free-vector/welcome-neon-sign-vector_53876-76088.jpg?t=st=1725373247~exp=1725376847~hmac=ebb91d36ee8b7aa3545eb2a5bb87026cc8fef9d6db93614a8b64b4ed2635788a&w=360';

  useEffect(() => {
    const updateBackgroundImage = () => {
      const isMobileOrTablet = window.innerWidth < 768; // Adjust this width as needed

      let selectedImageUrl;

      if (isMobileOrTablet) {
        selectedImageUrl = darkMode ? externalImageUrlMobileTabletDark : externalImageUrlMobileTabletLight;
      } else {
        selectedImageUrl = darkMode ? externalImageUrlComputerDark : externalImageUrlComputerLight;
      }

      setImageUrl(selectedImageUrl);
    };

    updateBackgroundImage();

    // Listen for changes in the window's size
    window.addEventListener('resize', updateBackgroundImage);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, [darkMode]); // Include darkMode in the dependency array

  return (
    <div
      className="flex justify-center items-center align-middle h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
    </div>
  );
}

export default Welcome;
