// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../Home/Home'
import profileData from "./profileData.js"; 
import TypingAnimation from './TypingAnimation'
import { MdFileDownload } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

function Profile() {

  // Function to handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    const userConfirmed = window.confirm('Do you want to download the CV?');
    if (userConfirmed) {
      window.open(profileData.buttons[0].link, '_blank'); // Open resume in a new tab
    }
  };

  return (
    <Home>
      <section id='Portfolio' className='p-10 w-full h-full'>
        <div className='profile-wrapper flex justify-center items-center flex-col shadow-lg rounded-lg p-6'>
          <div className='image-name pb-5 flex flex-col justify-center align-middle gap-2'>
            <img
              className='w-60 h-60 transition duration-75 active:-rotate-3 active:dark:-rotate-3 rounded-e-3xl cursor-pointer'
              src={profileData.image}
              alt='Profile Picture'
            />
            <h1 className='text-center text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif pl-5'>
              {profileData.name}<span className='font-bold text-green-800'>.</span>
            </h1>
          </div>
          <div>
            <h2 className='text-2xl xm:text-[13px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-700 dark:text-slate-200 pb-4 px-4'>
              I am a <TypingAnimation texts={profileData.titles} speed={150} delay={2000} />
            </h2>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-700 dark:text-slate-300 mb-4 px-4 text-justify'>
              {profileData.description}
            </p>
          </div>
          <div className='flex justify-center items-center align-middle gap-3 flex-col p-1 pt-6'>
            <p className='flex justify-center items-center font-bold align-middle gap-3 p-1'>
              {/* <Link to={'/Resume'}  rel='noopener noreferrer' className='flex hover:bg-gray-400 md:block sm:hidden xm:hidden xl:block dark:hover:bg-gray-950 items-center px-4 py-2 rounded-full border-[1px] border-black dark:border-white bg-transparent dark:bg-black bg-white'>
                View Cv
              </Link> */}
              <a onClick={handleDownloadCV} href={profileData.buttons[0].link} target='_blank' rel='noopener noreferrer' className='flex fill-right-to-left items-center px-4 py-2 rounded-full border-[1px] border-black dark:border-white bg-transparent dark:bg-black bg-white'>
                <MdFileDownload className='mr-2 active:animate-bounce' /> {profileData.buttons[0].text}
              </a>

              <a href={profileData.buttons[1].link} target='_blank' rel='noopener noreferrer' className='flex bg-white dark:bg-black fill-left-to-right items-center px-4 py-2 rounded-full border-[1px] border-black dark:border-white bg-transparent'>
                <FaWhatsapp className='mr-2 active:animate-spin' /> {profileData.buttons[1].text}
              </a>
            </p>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Profile;
