// eslint-disable-next-line no-unused-vars
import React from 'react';

function Welcome() {
    const externalImageURL = 'https://rakeshroshan.netlify.app/assets/images/text.webp'; // Use the external URL directly

    return (
        <div
            className="flex justify-center items-center align-middle h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${externalImageURL})` }}
        >
            <div className='flex justify-center flex-col items-center align-middle text-6xl font-bold gap-6 bg-opacity-50 p-6 rounded'>
                <h2 className='text-black'>Welcome...</h2>
                <p className='text-xl sm:hidden md:hidden lg:block xl:block'>Click Profile to Navigate</p>
                <p className='lg:hidden xl:hidden sm:block md:block text-xl'>Click to the Logo</p>
                {/* <p className='text-2xl font-semibold'>Thank You For Visit.</p> */}
            </div>
        </div>
    );
}

export default Welcome;
