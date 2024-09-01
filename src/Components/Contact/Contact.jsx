// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../Home/Home'
import { IoSend } from 'react-icons/io5';

function Contact() {
    return (
        <Home>
            <form  className="flex flex-col py-20 items-center justify-center gap-4">
                <label htmlFor="name" className="hidden">Name</label>
                <input
                    type="text"
                    className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg outline-none italic"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    required
                // value={email}
                // onChange={handleEmailChange}
                />
                <label htmlFor="email" className="hidden">Email</label>
                <input
                    type="email"
                    className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg outline-none italic"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    // value={email}
                    // onChange={handleEmailChange}
                />
                <label htmlFor="message" className="hidden">Message</label>
                <textarea
                    className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg resize-none outline-none italic"
                    name="message"
                    id="message"
                    placeholder="Send Message"
                    required
                    rows={3}
                    cols={20}
                    // value={message}
                    // onChange={handleMessageChange}
                ></textarea>
                <button
                    type="submit"
                    className="w-24 h-10 rounded-lg border-[1px] outline-none border-green-800 bg-slate-600 text-xl shadow-md hover:bg-slate-700 text-green-500 dark:text-slate-100 hover:text-white dark:hover:text-blue-600 transition duration-300 flex justify-center align-middle items-center"
                >
                   <IoSend />
                </button>
            </form>
        </Home>
    )
}

export default Contact;