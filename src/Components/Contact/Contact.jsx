// Components/Contact.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IoSend } from 'react-icons/io5';
import Home from '../Home/Home';

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
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
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
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <Home>
      <form
        className="flex flex-col py-20 items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="hidden">Name</label>
        <input
          type="text"
          className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg outline-none italic"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email" className="hidden">Email</label>
        <input
          type="email"
          className={`w-96 p-2 mb-3 px-4 bg-transparent border-2 ${formErrors.email ? 'border-red-500' : 'border-green-800'} rounded-lg outline-none italic`}
          name="email"
          id="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <span className="text-red-500 text-sm">{formErrors.email}</span>
        )}
        <label htmlFor="message" className="hidden">Message</label>
        <textarea
          className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg resize-none outline-none italic"
          name="message"
          id="message"
          placeholder="Send Message"
          required
          rows={3}
          cols={20}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-24 h-10 rounded-lg border-[1px] outline-none border-green-800 bg-slate-600 text-xl shadow-md hover:bg-slate-700 text-green-500 dark:text-slate-100 hover:text-white dark:hover:text-blue-600 transition duration-300 flex justify-center align-middle items-center"
        >
          <IoSend />
        </button>
      </form>
    </Home>
  );
}

export default Contact;
