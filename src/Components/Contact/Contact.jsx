/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IoSend } from 'react-icons/io5';
import Home from '../Home/Home';
import contactData from './contactData'; // Import the contact data
import { toast } from 'react-hot-toast'; // Import toast

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name.';
    }
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message) {
      errors.message = 'Please enter your message.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error)); // Show error messages
      return;
    }

    // Send email
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setFormErrors({});
      toast.success('Message sent successfully!'); // Show success message
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      toast.error('Something went wrong! Please use the email below to send your message.'); // Show failure message
    });
  };

  return (
    <Home>
      <section id="Contact" className='w-full min-h-screen p-4 bg-gray-200 dark:bg-slate-900'>
        <div className="flex flex-col md:flex-row items-center justify-center dark:bg-[#4d2363b3] bg-slate-400 rounded-2xl mx-auto max-w-screen-lg overflow-hidden shadow-custom border-2 border-black dark:border-white">
          {/* Contact Info Section */}
          <div className="flex-1 p-8 bg-secondary text-white dark:bg-[#572400a7]">
            <h1 className="text-2xl font-bold mb-4">Let's get in touch</h1>
            <h2 className="text-lg font-medium mb-4">Open for any suggestion or to have a discussion</h2>
            <div className="w-full h-64 mt-5">
              <img
                src={contactData.imageUrl}
                alt="Contact"
                className="block mx-auto w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col px-4 mt-6">
              <span className="flex items-center mb-4 text-sm font-medium">
                <i className="fa-solid fa-location-dot text-lg mr-2 border border-white rounded-full p-1"></i>
                {contactData.location}
              </span>
              <span className="flex items-center mb-4 text-sm font-medium">
                <i className="fa-solid fa-phone text-lg mr-2 border border-white rounded-full p-1"></i>
                {contactData.phone}
              </span>
              <span className="flex items-center mb-4 text-sm font-medium">
                <i className="fa-solid fa-envelope text-lg mr-2 border border-white rounded-full p-1"></i>
                <a href={`mailto:${contactData.email}`} className="text-blue-500 dark:text-blue-300">
                  {contactData.email}
                </a>
              </span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 p-8 bg-white dark:bg-[#45451a] my-7 mx-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-black dark:text-white">Fill out the form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <i className="fa-solid fa-user text-lg text-secondary absolute top-4 left-4"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full text-sm px-3 py-4 rounded-lg border-2 ${formErrors.name ? 'border-red-500' : 'border-primary-light-2'} focus:border-secondary outline-none bg-white dark:bg-gray-700 dark:border-gray-600`}
                />
                {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
              </div>
              <div className="relative">
                <i className="fa-solid fa-envelope text-lg text-secondary absolute top-4 left-4"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full text-sm px-3 py-4 rounded-lg border-2 ${formErrors.email ? 'border-red-500' : 'border-primary-light-2'} focus:border-secondary outline-none bg-white dark:bg-gray-700 dark:border-gray-600`}
                />
                {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
              </div>
              <div className="relative">
                <i className="fa-solid fa-message text-lg text-secondary absolute top-4 left-4"></i>
                <textarea
                  name="message"
                  placeholder="Leave your message here"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full text-sm px-3 py-4 rounded-lg border-2 ${formErrors.message ? 'border-red-500' : 'border-primary-light-2'} focus:border-secondary outline-none min-h-32 bg-white dark:bg-gray-700 dark:border-gray-600`}
                ></textarea>
                {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
              </div>
              <button
                type="submit"
                className="text-sm font-medium py-4 rounded-lg w-full cursor-pointer text-white bg-secondary-light border border-secondary-light transition-colors duration-200 hover:bg-secondary hover:border-secondary flex items-center justify-center"
              >
                Send Message <IoSend className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Contact;
