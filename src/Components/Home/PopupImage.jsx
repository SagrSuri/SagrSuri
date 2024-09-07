// src/Components/Home/PopupImage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// eslint-disable-next-line react/prop-types
function PopupImage({ isVisible, onClose, imageUrl, linkUrl }) {
    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50' onClick={onClose}>
            <div className='bg-white p-4 rounded shadow-lg'>
                <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imageUrl} alt='Popup' className='max-w-full max-h-full cursor-pointer' />
                </Link>
                <button onClick={onClose} className='mt-2 px-4 py-2 bg-gray-500 text-white rounded'>
                    Close
                </button>
            </div>
        </div>
    );
}

export default PopupImage;
