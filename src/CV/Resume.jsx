// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Print.css';
import ToggleDark from '../OwnedComponents/ToggleDark'
import Back from '../Components/Loaders/Rippling/RipplingBack'
import Print from './Print';
import { PiGithubLogoBold, PiPhoneCallDuotone } from 'react-icons/pi';
import { LiaLinkedin } from 'react-icons/lia';
import { MdOutlineMailOutline } from 'react-icons/md';
import { HiExternalLink } from 'react-icons/hi';
function Resume() {
  return (
    <div className='Roboto'>
      <div className='no-print'>
        <div className='bg-gray-300 sticky top-0  dark:bg-slate-950 flex justify-between items-center align-middle px-5 scroll-smooth h-10 shadow-md'>
          <Back /> <ToggleDark /> <Print />
        </div>
      </div>
      <section className='resume-print'>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen p-8">
          <div className="container mx-auto max-w-4xl">

            {/* Header Section */}
            <div className="bg-white dark:bg-gray-800 rounded-t-md p-6">
              <div className="flex justify-between items-center">
                <div className="text-slate-950 dark:text-slate-50 uppercase flex justify-center gap-2 items-center align-middle flex-col">
                  <h1 className='text-4xl font-bold'>Sagar Suri</h1>
                  <h3 className='text-[2px]'>web developer</h3>
                </div>
                <div className="text-right flex justify-end items-end align-middle flex-col">
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-center items-center align-middle gap-1"><a className='flex justify-center items-center align-middle gap-1' href="https://wa.me/918806116794"><PiPhoneCallDuotone />+918806116794</a></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="mailto:sagrsurigmail.com" className="hover:underline flex justify-center gap-1 items-center align-middle"><MdOutlineMailOutline />sagrsurigmail.com</a></p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="https://www.sagarsuri.in" className="hover:underline flex justify-center items-center align-middle gap-1" target="_blank" rel="noreferrer"><HiExternalLink />www.sagarsuri.in</a></p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="https://github.com/sagrsuri" className="hover:underline flex justify-center gap-1 items-center align-middle" target="_blank" rel="noreferrer"><PiGithubLogoBold />github.com/sagrsuri</a></p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="https://linkedin.com/in/sagrsuri" className="hover:underline flex justify-center items-center align-middle gap-1" target="_blank" rel="noreferrer"><LiaLinkedin />linkedin.com/in/sagrsuri</a></p>
                </div>
              </div>
            </div>
<hr className='h-[2px] border-2 border-gray-500 rounded-full' />
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 p-6 mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300">
                A passionate web developer with experience in JavaScript, React, and modern web technologies like Vite. I have a strong focus on creating efficient and scalable web applications, ensuring top-notch user experiences.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 p-6 mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Skills</h2>
              <ul className="space-y-2">
                <li><i className="fas fa-code mr-2 text-blue-500"></i>JavaScript (ES6+)</li>
                <li><i className="fas fa-code mr-2 text-blue-500"></i>React.js</li>
                <li><i className="fas fa-cogs mr-2 text-blue-500"></i>Vite.js</li>
                <li><i className="fas fa-code-branch mr-2 text-blue-500"></i>Git & GitHub</li>
                <li><i className="fas fa-database mr-2 text-blue-500"></i>Node.js & Express.js</li>
                <li><i className="fas fa-database mr-2 text-blue-500"></i>MongoDB</li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 p-6 mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Experience</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer at XYZ Solutions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2021 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developing and maintaining scalable web applications using React, JavaScript, and Vite. Implementing UI/UX design improvements and optimizing application performance.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Developer Intern at ABC Corp</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Worked on creating reusable components and enhancing the user interface for client projects using React and CSS frameworks. Improved page load time by 20% through optimized asset delivery.
                  </p>
                </li>
              </ul>
            </div>



            {/* Education Section with added top margin */}
            <div className="bg-white dark:bg-gray-800 p-6 mb-0" style={{ marginTop: '0px' }}>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Education</h2>
              <p className="text-gray-700 dark:text-gray-300">Bachelor of Technology in Computer Science - ABC University (2017 - 2021)</p>
            </div>

            {/* Page break before Education section */}
            <div className="page-break"></div>

            {/* Projects Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-b-md p-6 mb-0 " style={{ marginTop: '10px' }}>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Projects</h2>
              <p><i className="fas fa-laptop-code mr-2 text-blue-500"></i><a href="https://github.com/sagrsuri/project-1" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Project One</a> - A full-stack application using React, Node.js, and MongoDB.</p>
              <p><i className="fas fa-laptop-code mr-2 text-blue-500"></i><a href="https://github.com/sagrsuri/project-2" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Project Two</a> - A portfolio website built with modern web tools and fully responsive design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
