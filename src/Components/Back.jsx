// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFastBackward } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Back() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between fixed top-0 px-6 py-4'>
      <button>
        <Link onClick={() => navigate(-1)} className='fill-left-to-right px-6 py-1 rounded-sm text-xl flex justify-center hover:text-black dark:bg-transparent dark:text-white '><FaFastBackward /></Link>
      </button>
    </div>
  );
}

export default Back;