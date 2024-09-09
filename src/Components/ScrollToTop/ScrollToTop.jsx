/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTop = ({
  color = 'bg-blue-500',
  hoverColor = 'hover:bg-blue-700',
  darkColor = 'dark:bg-gray-700',
  darkHoverColor = 'dark:hover:bg-gray-900',
  size = 'h-14 w-14',
  textColor = 'text-white',
  darkTextColor = 'dark:text-gray-200',
  scrollThreshold = 200,
  borderRadius = 'rounded-full',
  // eslint-disable-next-line no-unused-vars
  smoothScrollDuration = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to calculate scroll progress
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  // Scroll event to handle visibility of the button and update scroll progress
  const handleScroll = () => {
    calculateScrollProgress();
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className={`${color} ${hoverColor} ${darkColor} ${darkHoverColor} ${size} ${borderRadius} ${textColor} ${darkTextColor} fixed bottom-8 right-8 flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-500 transform hover:scale-110 active:scale-95 z-50`}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: `conic-gradient(
            #3b82f6 ${scrollProgress}%, 
            transparent ${scrollProgress}%
          )`,
          borderRadius: '50%',
          padding: '0.5rem',
          transition: 'background 0.3s ease',
        }}
        title="Scroll to top"
      >
        {/* Up Arrow Icon */}
        <div
          className={`relative ${size} ${borderRadius} flex items-center justify-center ${textColor} ${darkTextColor}`}
          style={{ backgroundColor: 'inherit' }}
        >
          <FaArrowAltCircleUp size={'2rem'} className='text-black p-1 dark:text-white' />

        </div>
      </div>
    )
  );
};

export default ScrollToTop;
