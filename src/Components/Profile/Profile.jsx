// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../Home/Home'
import profileData from "./profileData.js"; 
import TypingAnimation from './TypingAnimation'
import { MdFileDownload } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './descriptionData.css'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Profile() {


  // Function to handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault(); // Prevent default anchor click behavior

    // Custom toast for confirmation
    const confirmDownload = () => {
      toast(
        (t) => (
          <div className="toast-content">
            <p>Do you want to download the CV?</p>
            <div className="toast-buttons">
              <button
                className="btn-confirm"
                onClick={() => {
                  handleConfirmDownload(true);
                  toast.dismiss(t.id); // Close the toast after user confirmation
                }}
              >
                Yes
              </button>
              <button
                className="btn-cancel"
                onClick={() => {
                  handleConfirmDownload(false);
                  toast.dismiss(t.id); // Close the toast if canceled
                }}
              >
                No
              </button>
            </div>
          </div>
        ),
        { duration: Infinity }
      );
    };

    confirmDownload();
  };

  // Function to handle confirmation response
  const handleConfirmDownload = (confirmed) => {
    if (confirmed) {
      window.open(profileData.buttons[0].link); //_blank delete // Open resume in a new tab
      toast.success('CV downloaded successfully!');
    } else {
      toast.error('Download cancelled.');
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
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-700 dark:text-slate-300 mb-4 px-4 text-justify discriptionData'>
              {profileData.description}
            </p>
          </div>
          <div className='flex justify-center items-center align-middle gap-3 flex-col p-1 pt-6'>
            <p className='flex justify-center items-center font-bold align-middle gap-3 p-1'>

              <Link onClick={handleDownloadCV} to={profileData.buttons[0].link} rel='noopener noreferrer' className='flex fill-right-to-left items-center px-4 py-2 rounded-full border-[1px] border-black dark:border-white bg-transparent dark:bg-black bg-white'>
                <MdFileDownload className='mr-2 active:animate-bounce' /> {profileData.buttons[0].text}
              </Link>

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
