// src/Components/Home/Home.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Footer from '../Footer/Footer';
import Welcome from './Welcome';
import Navbar from '../Navbar/Navbar';
import PopupImage from './PopupImage'; // Import the PopupImage component
import './Drawer.css';
// import './PopupImage.css'; // Import the PopupImage CSS for styling
import { mobileImages, desktopImages } from './popData'; // Import the image data

// eslint-disable-next-line react/prop-types
function Home({ children }) {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupImage, setPopupImage] = useState({ url: '', link: '' });
    const location = useLocation(); // Get the current route

    useEffect(() => {
        const popupShown = sessionStorage.getItem('popupShown');
        const lastShownTime = localStorage.getItem('lastShownTime');
        const currentTime = new Date().getTime();
    
        // Time interval (10 minutes in milliseconds)
        const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
    
        // Determine which set of images to use based on screen size
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const images = isMobile ? mobileImages : desktopImages;
    
        // Helper function to select a random image
        const getRandomImage = () => images[Math.floor(Math.random() * images.length)];
    
        // Show popup and update the image every 10 minutes
        const showPopup = () => {
            // Set the popup with a new random image
            setPopupImage(getRandomImage());
            setPopupVisible(true);
    
            // Update local storage and session storage
            localStorage.setItem('lastShownTime', new Date().getTime().toString());
            sessionStorage.setItem('popupShown', 'true');
        };
    
        if (!popupShown || (lastShownTime && (currentTime - parseInt(lastShownTime, 10)) > interval)) {
            // Delay the popup by 15 seconds initially
            const timer = setTimeout(() => {
                showPopup();
    
                // Set an interval to update the popup image every 10 minutes
                const intervalId = setInterval(() => {
                    showPopup();
                }, interval); // 10 minutes interval
    
                // Cleanup the interval when the component unmounts
                return () => clearInterval(intervalId);
            }, 15000); // Delay for 15 seconds
    
            // Cleanup timer if the component is unmounted
            return () => clearTimeout(timer);
        }
    }, []);
    

    const hidePopup = () => {
        setPopupVisible(false);
    };

    // Check if the current path is '/'
    const isHomePage = location.pathname === '/';

    return (
        <div className='w-full min-h-screen flex flex-col relative'>
            {/* Conditionally render Navbar */}
            {!isHomePage && (
                <div className='z-50'>
                    <Navbar />
                </div>
            )}

            <div className='flex-grow z-10'>
                {children ? children : <Welcome />}
            </div>

            {/* Conditionally render Footer */}
            {!isHomePage && (
                <div className='relative pt-2'>
                    <Footer />
                </div>
            )}

            {/* Popup Image Component */}
            <PopupImage
                isVisible={isPopupVisible}
                onClose={hidePopup}
                imageUrl={popupImage.url}
                linkUrl={popupImage.link}
            />
        </div>
    );
}

export default Home;
