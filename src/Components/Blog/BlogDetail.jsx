// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogData from './blogData';
import Toggel from '../Toggel/Toggel';


function BlogDetail() {
  const { id } = useParams(); 
  const blog = blogData.find((post) => post.id === id);

  // Dark mode logic
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleChange = () => {
    setDarkMode(!darkMode);
  };

  if (!blog) {
    return <div className="text-center">Blog not found</div>;
  }

  return (
    <div className="min-h-screen h-full">
      <div className='flex justify-center gap-1 px-6 py-4'>
        <button>
         <Link to={'/blog'} className='fill-left-to-right px-6 py-1 rounded-s-full text-xl flex justify-center border-[1px] border-black dark:border-white bg-black text-white hover:text-black dark:bg-white dark:text-black dark:hover:text-white'>Back</Link>
        </button>
        <button className='text-3xl fill-right-to-left px-3 border-[1px] border-black rounded-e-full dark:border-white '>
         <Toggel darkMode={darkMode} toggelChange={toggleChange} />
        </button>
      </div>
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.content}</p>
        <Link to="/blog" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Back to Blog List</Link>
      </div>
    </div>
  );
}

export default BlogDetail;
