// eslint-disable-next-line no-unused-vars
import React from 'react';
import { socialMediaLinks } from './socialMediaLinks'; // Adjust the path if necessary

function Footer() {
    return (
        <footer className="w-full bg-gray-300 dark:bg-slate-950 dark:text-gray-200 py-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row justify-between items-center px-6 space-y-6 sm:space-y-4 md:space-y-0">
                
                {/* Branding */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 dark:from-teal-300 dark:to-cyan-500">
                        SAGAR SURI
                    </h1>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-3 xm:space-x-2 md:space-x-3 sm:space-x-2">
                    {socialMediaLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="group relative overflow-hidden"
                        >
                            <div className="relative w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-600 dark:from-teal-500 dark:to-cyan-700 rounded-sm shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                <img
                                    src={link.imageSrc}
                                    alt={link.alt}
                                    className="w-6 h-6 xm:w-4 xm:h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                                />
                            </div>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 dark:from-teal-500 dark:to-cyan-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg"></span>
                        </a>
                    ))}
                </div>

                {/* Call-to-Action Section */}
                <div className="flex items-center justify-center sm:mt-4">
                    <a
                        href="https://www.buymeacoffee.com/sagarsuri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-all duration-500"></span>
                        <img
                            className="relative z-10 w-28 h-auto sm:w-24 md:w-40 rounded-full shadow-lg transform transition-transform duration-500 group-hover:scale-110"
                            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=sagarsuri&button_colour=40DCA5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
                            alt="Buy Me A Coffee"
                        />
                    </a>
                </div>
            </div>

            {/* Decorative Line */}
            <div className="w-full mt-3 border-t border-gray-400 dark:border-gray-700"></div>

            {/* Copyright Statement */}
            <div className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Sagar Suri. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
