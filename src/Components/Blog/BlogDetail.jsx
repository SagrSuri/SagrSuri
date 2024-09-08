// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogData from './blogData';
import Toggle from 'vitetoggle';
import {GistViewer} from 'vite-gist';



function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === id);

  if (!blog) {
    return <div className="text-center">Blog not found</div>;
  }

  return (
    <div className="min-h-screen h-full">
      <div className='flex justify-center gap-1 px-6 py-4'>
        <button>
          <Link to={'/blog'} className='fill-left-to-right px-6 py-1 rounded-s-full text-xl flex justify-center border-[1px] border-black dark:border-white bg-black text-white hover:text-black dark:bg-white dark:text-black dark:hover:text-white'>Back</Link>
        </button>
        {/* <Toggle /> V.0.0.6 */}
        <Toggle
        buttonClass="p-2 relative rounded-full flex flex-col w-8 h-8 m-auto justify-center item-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 shadow-sm shadow-black dark:shadow-white"
        buttonIconClass="text-[1rem] dark:text-white"
        dropdownClass="bg-slate-500 absolute dark:bg-slate-900 transition ease-out p-2 space-y-2 rounded-sm m-auto my-2 shadow-sm shadow-slate-700 "
        dropdownItemClass="flex w-full p-1 justify-center item-center rounded-md"
        dropdownHoverClass="hover:bg-slate-400 dark:hover:bg-slate-950"
        lightButtonClass="bg-gray-400 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        darkButtonClass="bg-gray-400 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        systemButtonClass="bg-gray-400 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        lightIconClass="text-black self-center dark:text-white"
        darkIconClass="text-black self-center dark:text-white"
        systemIconClass="text-black self-center dark:text-white"
      />
      </div>

      
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.content}</p>

        <div className='w-full'>
        <GistViewer
        gistId={blog.gistId}
        containerClassName="bg-white dark:bg-black p-1"
        buttonClassName=" text-black dark:text-white dark:bg-black mx-2 p-1 rounded-md"
        fontSizeButtonContainerClassName="flex justify-between px-8"
        toggleButtonClassName="text-xl dark:text-white dark:bg-black p-1 rounded-md"
        loaderClassName="text-center p-3 m-2 font-bold text-xl text-gray-600 dark:text-white"
        codeContainerClassName="p-4 rounded-md"
        themeStyle={null}
        showLineNumbers={true}
        fontSize="1rem"
        codeBackgroundColor="#f5f5f5"
      />
        </div>

        {/* Embed the YouTube video if present */}
        {blog.youtubeLink && (
          <div className="relative mb-4" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={blog.youtubeLink} 
              title="YouTube Video" 
              frameBorder="0" 
              allowFullScreen
              style={{ border: 'none' }}
            ></iframe>
          </div>
        )}
        <Link to="/blog" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Back to Blog List</Link>
      </div>
    </div>
  );
}

export default BlogDetail;
