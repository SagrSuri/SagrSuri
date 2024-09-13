// Components/ProgressBar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import { useLocation } from 'react-router-dom';
import './ProgressBar.css';

NProgress.configure({ showSpinner: false }); // Optional: Disable spinner

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    // Start the progress bar on route change
    NProgress.start();

    // Function to stop the progress bar
    const handleStop = () => {
      NProgress.done();
    };

    // Handle page load completion
    const handleLoad = () => {
      handleStop();
    };

    // Add event listener for page load
    window.addEventListener('load', handleLoad);

    // Clean up event listeners and ensure progress bar stops if component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
      NProgress.done(); // Ensure progress bar stops
    };
  }, [location]);

  return null; // The ProgressBar does not need to render anything
};

export default ProgressBar;
