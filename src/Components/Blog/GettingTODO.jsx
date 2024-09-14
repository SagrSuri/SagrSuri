// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GettingTODO = () => {
  // Initial blogData
  const [blogData, setBlogData] = useState([
    {
      id: '1',
      title: 'CREATED NPM PACKAGE FOR GITHUB GIST VIEWER',
      image: 'https://via.placeholder.com/150', // Placeholder image
      excerpt: "I've provided a detailed explanation on how to use the GitHub GistViewer npm package.",
      content: "I've developed the vite-gist package, a powerful and flexible Gist viewer component for React applications...",
      gistId: '00120b53c86355f0b9b42e422a2d106d', 
      gistLink: 'https://gist.github.com/SagrSuri/0606d142d5573cf79f91126bc4ebabc0',
      youtubeLink: 'https://www.youtube.com/embed/qUHokTXF1M0?si=bKt4BEQDQCE9rnfS',
      url: '/blog/my-first-blog-post',
    },
  ]);

  // Form input state
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    excerpt: '',
    content: '',
    gistId: '',
    gistLink: '',
    youtubeLink: '',
    url: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new blog entry with form data
    const newBlog = {
      id: (blogData.length + 1).toString(), // Generate a new id
      ...formData,
    };

    // Append the new blog entry to the existing blogData
    setBlogData([...blogData, newBlog]);

    // Clear the form after submission
    setFormData({
      title: '',
      image: '',
      excerpt: '',
      content: '',
      gistId: '',
      gistLink: '',
      youtubeLink: '',
      url: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
        Add New Blog Post
      </h1>

      {/* Blog Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 p-8 shadow-md rounded-md max-w-2xl mx-auto space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="excerpt" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Blog Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Enter a brief excerpt"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Blog Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter full blog content"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gistId" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Gist ID
          </label>
          <input
            type="text"
            name="gistId"
            value={formData.gistId}
            onChange={handleChange}
            placeholder="Enter Gist ID"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gistLink" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Gist Link
          </label>
          <input
            type="text"
            name="gistLink"
            value={formData.gistLink}
            onChange={handleChange}
            placeholder="Enter Gist Link"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="youtubeLink" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            YouTube Link
          </label>
          <input
            type="text"
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleChange}
            placeholder="Enter YouTube Link"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="url" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
            URL
          </label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter blog URL (e.g., /blog/my-first-blog-post)"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md mt-6 hover:bg-blue-600 transition duration-300"
        >
          Add Blog
        </button>
      </form>

      {/* Blog Display */}
      <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-gray-800 dark:text-gray-200">
        Blog Posts
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.excerpt}</p>
              <Link to={blog.url} className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingTODO;
