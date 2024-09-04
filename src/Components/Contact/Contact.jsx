/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IoSend } from 'react-icons/io5';
import Home from '../Home/Home';
import contactData from './contactData'; // Import the contact data
import { toast } from 'react-hot-toast'; // Import toast
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    if (!captchaValue) {
      errors.captcha = 'Please complete the CAPTCHA.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
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
      setCaptchaValue(null);
      setStatus('Message sent successfully!');
      toast.success('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setStatus('Failed to send message.');
      toast.error('Something went wrong! Please use the email below to send your message.');
    });
  };

  return (
    <Home>
      <section id="Contact" className="w-full min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 max-w-screen-lg mx-auto overflow-hidden">
          {/* Contact Info Section */}
          <div className="flex-1 p-8 text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Let's Get In Touch</h1>
            <p className="text-lg mb-4">I'm open for any suggestions or discussions.</p>
            <div className="w-full h-64 mb-6">
              <img
                src={contactData.imageUrl}
                alt="Contact"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-location-dot text-teal-500 mr-2"></i>
                {contactData.location}
              </div>
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-phone text-teal-500 mr-2"></i>
                {contactData.phone}
              </div>
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-envelope text-teal-500 mr-2"></i>
                <a href={`mailto:${contactData.email}`} className="text-teal-600 dark:text-teal-400">
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-300 dark:border-gray-700">
            <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Fill Out The Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-transparent dark:bg-black border rounded-lg ${formErrors.name ? 'border-red-500' : 'border-gray-300'} dark:${formErrors.name ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400`}
                />
                {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-transparent dark:bg-black border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'} dark:${formErrors.email ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400`}
                />
                {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-transparent dark:bg-black border rounded-lg ${formErrors.message ? 'border-red-500' : 'border-gray-300'} dark:${formErrors.message ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 min-h-[150px]`}
                ></textarea>
                {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
              </div>
              <div className="w-full flex justify-center">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  className="my-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-white rounded-lg font-medium transition-transform transform hover:scale-105 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                Send Message <IoSend className="inline-block ml-2 text-lg" />
              </button>
            </form>
            {status && <p className="mt-2 text-center text-gray-900 dark:text-gray-100">{status}</p>}
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Contact;
