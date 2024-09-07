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
        <Toggle />
      </div>

      
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.content}</p>

        <div className='w-full'>
          <GistViewer
            gistId={blog.gistId} // Replace with a real Gist ID
            containerClassName="flex justify-between px-4" //Button Container
            buttonClassName="px-3 py-2 rounded-sm m-2 bg-slate-300 dark:bg-gray-700" //Button Styling
            themeStyle="light-theme" // Replace with an actual theme style if needed
            codeBackgroundColor="#f5f5f5" //try to adding #code
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
