// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome';
import './Drawer.css';
import Navbar from '../Navbar/Navbar';

// eslint-disable-next-line react/prop-types
function Home({ children }) {
    return (
        <div className='w-full min-h-screen flex flex-col relative'>
            {/* **********************This BG is  For STICKY************** */}
            <div className='sticky top-0 z-40 '>
                <Navbar/>
            </div>

            <div className='flex-grow z-10'>
                {children ? children : <Welcome/>}
            </div>

            <div className='relative'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
