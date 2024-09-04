// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './blogData';
import Home from '../Home/Home';

const Blog = () => {
  return (
    <Home>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">My Blog</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{blog.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Home>
  );
};

export default Blog;
