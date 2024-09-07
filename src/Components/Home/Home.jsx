// src/Components/Home/Home.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome';
import Navbar from '../Navbar/Navbar';
import PopupImage from './PopupImage'; // Import the PopupImage component
import './Drawer.css';
import oneDesktop from './popImage/oneDesktop.png';
import twoDesktop from './popImage/twoDesktop.webp';
import oneMobile from './popImage/oneMobile.png';
import twoMobile from './popImage/twoMobile.png';

// List of images for mobile and desktop
const mobileImages = [
    { url: oneMobile, link: 'https://example.com/mobile-link1' },
    { url: twoMobile, link: 'https://example.com/mobile-link2' },
    // Add more mobile images as needed
];

const desktopImages = [
    { url: oneDesktop, link: 'https://example.com/desktop-link1' },
    { url: twoDesktop, link: 'https://example.com/desktop-link2' },
    // Add more desktop images as needed
];

// eslint-disable-next-line react/prop-types
function Home({ children }) {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupImage, setPopupImage] = useState({ url: '', link: '' });

    useEffect(() => {
        const popupShown = localStorage.getItem('popupShown');
        const lastShownTime = localStorage.getItem('lastShownTime');
        const currentTime = new Date().getTime();

        // Time interval (30 minutes in milliseconds)
        const interval = 30 * 60 * 1000;

        // Determine which set of images to use based on screen size
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const images = isMobile ? mobileImages : desktopImages;

        if (!popupShown || (lastShownTime && (currentTime - lastShownTime) > interval)) {
            // Select a random image from the appropriate array
            const randomImage = images[Math.floor(Math.random() * images.length)];

            setPopupImage(randomImage);
            setPopupVisible(true);

            // Update local storage
            localStorage.setItem('popupShown', 'true');
            localStorage.setItem('lastShownTime', currentTime.toString());
        }
    }, []);

    const hidePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className='w-full min-h-screen flex flex-col relative'>
            {/* **********************This BG is For STICKY************** */}
            <div className='sticky top-0 z-40'>
                <Navbar />
            </div>

            <div className='flex-grow z-10'>
                {children ? children : <Welcome />}
            </div>

            <div className='relative'>
                <Footer />
            </div>

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
