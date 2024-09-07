// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// eslint-disable-next-line react/prop-types
function PopupImage({ isVisible, onClose, imageUrl, linkUrl }) {
    if (!isVisible) return null;

    const handlePopupClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60' onClick={onClose}>
            <div
                className='relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'
                onClick={handlePopupClick}
            >
                <Link to={linkUrl} rel="noopener noreferrer" className="flex items-center justify-center">
                    <div className='w-[90vw] h-[70vh] flex items-center justify-center overflow-hidden'>
                        <img
                            src={imageUrl}
                            alt='Popup'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </Link>
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-110'
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default PopupImage;
