// Components/ProgressBar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import { useLocation } from 'react-router-dom';
import './ProgressBar.css'

NProgress.configure({ showSpinner: false }); // Optional: Disable spinner

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start(); // Start the progress bar when location changes

    // Stop the progress bar when navigation ends
    const handleStop = () => {
      NProgress.done();
    };

    // Set a timeout to ensure it appears for a short time
    const timer = setTimeout(handleStop, 200); // Adjust timeout for quick visibility

    return () => {
      clearTimeout(timer);
      NProgress.done(); // Ensure progress bar stops if component unmounts
    };
  }, [location]);

  return null;
};

export default ProgressBar;
