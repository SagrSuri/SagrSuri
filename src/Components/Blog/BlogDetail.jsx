// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogData from './blogData';
import { GistViewer } from 'vite-gist';
import ToggleO from '../../OwnedComponents/ToggleO';
import Back from '../Loaders/Rippling/RipplingBack';
import { FaGithub } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { ImYoutube2 } from 'react-icons/im';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === id);

  if (!blog) {
    return <div className="text-center text-2xl font-semibold py-8">Blog not found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      {/* Navbar with GitHub and YouTube Icons */}
      <div className="flex justify-between items-center px-5 py-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex gap-4">
          <Link to={'/blog'} className="flex items-center text-lg text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">
            <span className="mr-2">←</span> Back to Blogs
          </Link>
        </div>
        <div className="flex gap-6 xm:hidden sm:hidden">
          <Link className="text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300" to={'/Github'}>
            {/* <FaGithubAlt size={'30px'} className="dark:hidden" /> */}
            <FaGithub size={'30px'} className="" />API
          </Link>
          <Link className="text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400" to={'/Youtube'}> API
            <TiSocialYoutube size={'30px'} className="dark:hidden" />
            <ImYoutube2 size={'30px'} className="hidden dark:block" />
          </Link>
        </div>
        <ToggleO />
      </div>

      {/* Blog Detail Section */}
      <div className="container mx-auto py-1 w-screen xm:text-[1rem] lg:max-w-4xl">

        <h1 className="text-4xl xm:text-2xl sm:text-2xl text-center uppercase font-bold text-gray-900 dark:text-gray-100 mb-6">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded-lg shadow-md" />
        
        <Link to={blog.projectLink} className="block mx-auto my-4 text-center bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-all w-1/5 sm:w-2/3 xm:w-full">
          VIEW LIVE
        </Link>

        <p className="capitalize text-lg my-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify selection:bg-[#88eee7] " style={{fontFamily: 'Fira Sans'}}>{blog.content}</p>

        {/* Gist Container with Responsive Layout */}
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-">
          <GistViewer
            gistId={blog.gistId}
            containerClassName="bg-gray-100 dark:bg-gray-900 p-1 rounded-lg"
            buttonClassName="text-black dark:text-white dark:bg-gray-700 mx-2 py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            fontSizeButtonContainerClassName="flex justify-between px-4"
            toggleButtonClassName="text-xl dark:text-white dark:bg-gray-700 p-2 rounded-md"
            loaderClassName="text-center p-3 m-2 font-bold text-xl text-gray-600 dark:text-gray-400"
            codeContainerClassName="p-4 rounded-md bg-gray-200 dark:bg-gray-800"
            themeStyle={null}
            showLineNumbers={true}
            fontSize="1rem"
            codeBackgroundColor="#f5f5f5"
          />
        </div>

        {/* Responsive YouTube Embed */}
        {blog.youtubeLink && (
          <div className="relative mb-8 mt-6 rounded-md shadow-md" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={blog.youtubeLink}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
              style={{ border: 'none' }}
            ></iframe>
          </div>
        )}
      </div>

      {/* Loader Section */}
      <div className="flex justify-center w-full pb-6">
        <Back />
      </div>
    </div>
  );
}

export default BlogDetail;
