// eslint-disable-next-line no-unused-vars
import React from 'react';
import { socialMediaLinks } from './socialMediaLinks'; // Adjust the path if necessary

function Footer() {
    return (
        <div className='w-full h-14 dark:bg-slate-950 bg-slate-300 flex justify-between px-3 align-middle items-center border-[1px] dark:border-slate-900'>
              <div className='text-center text-sm text-gray-600 dark:text-gray-300 py-2'>
                &copy; {new Date().getFullYear()} Sagar Suri. All rights reserved.
            </div>
            <div className='w-50'>
            <a href="https://www.buymeacoffee.com/sagarsuri" target='_blank' rel="noopener noreferrer">
                <img className="w-full max-w-xs rounded-3xl transform scale-50 border-black border-2 shadow hover:scale-90 transition-transform duration-500" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=sagarsuri&button_colour=40DCA5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="Buy Me A Coffee" />
              </a>
            </div>
            <div>
                <ul className='flex justify-center align-middle items-center gap-3'>
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
