// eslint-disable-next-line no-unused-vars
import React from 'react';
import { socialMediaLinks } from './socialMediaLinks'; // Adjust the path if necessary

function Footer() {
    return (
        <div className='w-full h-18 dark:bg-slate-950 bg-slate-300 flex justify-between px-6 py-3 gap-2 align-middle items-center border-[1px] dark:border-slate-900 lg:flex-row md:flex-col sm:flex-col-reverse xl:flex-row'>
              <div className='text-center text-sm text-gray-600 dark:text-gray-300 '>
                &copy; {new Date().getFullYear()} Sagar Suri. All rights reserved.
            </div>
            <div className='w-50'>
            <a href="https://www.buymeacoffee.com/sagarsuri" target='_blank' rel="noopener noreferrer">
                <img className="w-full max-w-xs rounded-3xl transform scale-50 shadow hover:scale-75 transition-transform duration-500" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=sagarsuri&button_colour=40DCA5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="Buy Me A Coffee" />
              </a>
            </div>
            <div>
                <ul className='flex justify-center align-middle items-center gap-3 flex-wrap'>
                    {socialMediaLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} target='_blank' rel='noopener noreferrer' aria-label={link.label}>
                                <img src={link.imageSrc} alt={link.alt} className='w-6 h-6' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
