// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../Home/Home'
import profileData from "./profileData.js"; 
import TypingAnimation from './TypingAnimation'
import { MdFileDownload } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

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
        <section id='Portfolio' className='bg-slate-200 p-10 w-full h-full dark:bg-slate-900'>
          <div className='profile-wrapper flex justify-center items-center flex-col'>
            <div className='image-name pb-5 flex flex-col justify-center align-middle gap-2'>
              <img
                className='w-60 h-60 transition duration-75 active:-rotate-3 active:dark:-rotate-3 rounded-e-3xl cursor-pointer'
                src={profileData.image}
                alt='Profile Picture'
              />
              <h1 className='text-center text-3xl font-serif pl-5'>
                {profileData.name}<span className='font-bold text-green-800'>.</span>
              </h1>
            </div>
            <div>
              <h2 className='lg:text-4xl xl:text-4xl sm:text-xl md:text-xl font-bold text-center pb-6 text-slate-600 dark:text-slate-300'> I am a <TypingAnimation text={profileData.title} />
              </h2>
              <p className='lg:text-xl md:text-xl lg:text-center md:text-center sm:text-justify sm:text-[1rem] font-serif text-slate-600 dark:text-slate-300 mb-2'>
                {profileData.description}
              </p>
            </div>
            <div className=' flex justify-center items-center align-middle gap-3 flex-col p-1 pt-6'>
              <p className='flex justify-center items-center font-bold align-middle gap-3 p-1'>
                <a onClick={handleDownloadCV} href={profileData.buttons[0].link} target='_blank' className='flex fill-right-to-left items-center px-4 py-2 rounded-full border-[1px] border-black dark:border-white bg-transparent dark:bg-black bg-white'>
                  <MdFileDownload className='mr-2 active:animate-bounce' /> {profileData.buttons[0].text}
                </a>
                <a href={profileData.buttons[1].link} target='_blank' className='flex bg-white dark:bg-black fill-left-to-right items-center px-4 py-2 rounded-full border-[1px] border-black dark:border-white bg-transparent'>
                  <FaWhatsapp className='mr-2 active:animate-spin' /> {profileData.buttons[1].text}
                </a>
              </p>
              {/* <div className='flex justify-center align-middle gap-4 mt-4'>
                {profileData.socialLinks.map((link, index) => (
                  <a key={index} href={link.link} aria-label={link.name} target='_blank' rel='noopener noreferrer'>
                    <img src={link.icon} alt={`${link.name} icon`} className='w-10 h-10 hover:scale-95' />
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </section>
        </Home>
    )
}

export default Profile;