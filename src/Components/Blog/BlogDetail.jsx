// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogData from './blogData';
import {GistViewer} from 'vite-gist';
import ToggleO from '../../OwnedComponents/ToggleO';



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
        <ToggleO/>
      </div>

      
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
       <Link to={blog.projectLink}><h1 className='text-center bg-green-400 inline my-1 mx-auto w-full font-bold p-1 rounded-md'>VIEW LIVE</h1></Link>
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
