// eslint-disable-next-line no-unused-vars
import React from 'react';
import { socialMediaLinks } from './socialMediaLinks'; // Adjust the path if necessary
import { Link } from 'react-router-dom';

// Utility function to determine if the device is mobile
const isMobile = () => window.innerWidth <= 768;

function Footer() {
    // Set the correct UPI link based on device type
    const getUPILink = () => {
        return isMobile()
            ? 'upi://pay?pa=sagarsuri@paytm&pn=Sagar&cu=INR'
            : 'https://razorpay.me/@sagarsuri';
    };

    // Map through socialMediaLinks and adjust the UPI link
    const linksWithCorrectUPILink = socialMediaLinks.map((link) => ({
        ...link,
        href: link.id === 'UPI' ? getUPILink() : link.href
    }));

    return (
        <footer className="w-full bg-gray-300 dark:bg-slate-950 dark:text-gray-200 py-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row justify-center gap-3 items-center px-6 space-y-6 sm:space-y-4 md:space-y-0">

                {/* Social Media Links */}
                <div className="flex space-x-3 xm:space-x-1 md:space-x-2 sm:space-x-2">
                    {linksWithCorrectUPILink.map((link) => (
                        <Link
                            key={link.id}
                            to={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="group relative overflow-hidden">
                            <div className="relative w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-teal-400  dark:from-teal-500 dark:to-cyan-700 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl flex-wrap">
                                <img
                                    src={link.imageSrc}
                                    alt={link.alt}
                                    className="w-6 h-6 xm:w-7 xm:h-7 sm:w-5 sm:h-5 md:w-8 md:h-8"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Decorative Line */}
            {/* <div className="w-full mt-3 border-t border-gray-400 dark:border-gray-700"></div> */}
            <hr className='h-1 bg-slate-700 my-2 w-1/2 mx-auto rounded-lg'/>


           

            {/* Copyright Statement */}
            <div className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Sagar Suri. All rights reserved.
            </div>
             
        </footer>
    );
}

export default Footer;
