// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5'; // System mode icon (Settings)
import { RiComputerLine } from 'react-icons/ri';

function Toggle() {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode ? JSON.parse(savedMode) : 'system';
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To toggle dropdown visibility

    useEffect(() => {
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('themeMode', JSON.stringify('dark'));
            } else if (theme === 'light') {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('themeMode', JSON.stringify('light'));
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                localStorage.setItem('themeMode', JSON.stringify('system'));
            }
        };

        applyTheme(mode);
    }, [mode]);

    const toggleMode = (selectedMode) => {
        setMode(selectedMode);
        setIsDropdownOpen(false); // Close dropdown after selecting a mode
    };

    return (
        <div className="relative h-auto w-auto flex justify-center items-center">
            {/* Visible toggle button */}
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-center items-center p-[0.5rem] rounded-full dark:bg-slate-950 bg-slate-50 shadow-sm dark:shadow-white mx-2"
                aria-label="Toggle theme mode options"
            >
                {mode === 'dark' && <IoMoonSharp />}
                {mode === 'light' && <IoSunnySharp />}
                {mode === 'system' && <RiComputerLine />}
            </button>

            {/* Dropdown options with animation */}
            {isDropdownOpen && (
                <div
                    className={`absolute top-12 flex flex-col space-y-2 p-1 rounded-sm shadow-sm
                    transition-all duration-300 ease-out transform opacity-0 scale-95 ${
                      isDropdownOpen ? "opacity-100 scale-100" : ""
                    }`}
                >
                    {/* Light Mode Option */}
                    <button
                        onClick={() => toggleMode('light')}
                        className="flex justify-between items-center px-3 py-1 rounded-full  bg-gray-300 dark:bg-gray-950 hover:bg-gray-400"
                        aria-label="Switch to light mode"
                    >
                       <span className='font-serif text-[1rem] text-center'>Light</span> <IoSunnySharp />
                    </button>

                    {/* Dark Mode Option */}
                    <button
                        onClick={() => toggleMode('dark')}
                        className="flex justify-between items-center px-3 py-1 rounded-full  bg-gray-300 dark:bg-gray-950 hover:bg-gray-400"
                        aria-label="Switch to light mode"
                    >
                       <span className='font-serif text-[1rem] text-center'>Dark</span> <IoMoonSharp />
                    </button>

                    {/* System Mode Option */}
                    <button
                        onClick={() => toggleMode('system')}
                        className="flex justify-between items-center px-3 py-1 rounded-full  bg-gray-300 dark:bg-gray-950 hover:bg-gray-400"
                        aria-label="Switch to light mode"
                    >
                       <span className='font-serif text-[1rem] text-center'>System</span> <RiComputerLine />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Toggle;
