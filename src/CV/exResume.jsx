// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Print.css';
import ToggleDark from '../OwnedComponents/ToggleDark'
import Back from '../Components/Loaders/Rippling/RipplingBack'
import Print from './Print';
import { PiCertificateFill, PiGithubLogoBold, PiPhoneCallDuotone } from 'react-icons/pi';
import { LiaHtml5, LiaLinkedin } from 'react-icons/lia';
import { MdOutlineMailOutline, MdVerifiedUser } from 'react-icons/md';
import { HiExternalLink } from 'react-icons/hi';
import { TbBrandJavascript, TbBrandVite, TbBrandVscode} from 'react-icons/tb';
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { RiBootstrapLine, RiChatVoiceLine, RiCss3Line, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri';
import { FaExternalLinkAlt, FaGitAlt, FaLaptopCode, FaRegKeyboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { FaCodeCommit } from 'react-icons/fa6';
// import { aboutData, projectData } from './resumeData.js'; 
import { resumeData } from './resumeData';
function Resume() {

  const certifications = [
    {
      title: 'Full Stack Web Development',
      certUrl: 'https://sagarsuri.in/assets/certificate-C5t1KhZs.png',
      badgeUrl: 'https://pwskills.com/learn/certificate/e21fcd71-ea65-47d2-a716-8422d2e51fbf/',
      badgeText: 'PW Skills'
    },
    {
      title: 'Backend Development',
      certUrl: 'https://sagarsuri.in/assets/certificateBackend-CW6vmdn9.png',
      badgeUrl: 'https://pwskills.com/learn/certificate/10edb6ee-2c57-4782-9f38-fe455eb7ff74/',
      badgeText: 'PW Skills'
    },
    {
      title: 'Responsive Web Design',
      certUrl: 'https://sagarsuri.in/assets/certificatefcc-1bC0C7Ct.jpg',
      badgeUrl: 'https://www.freecodecamp.org/certification/SAGARSURI/responsive-web-design',
      badgeText: 'FreeCodeCamp'
    }
  ];
  

  return (
    <div className='Roboto'>
      <div className='no-print'>
        <div className='bg-gray-300 sticky top-0 z-50  dark:bg-slate-950 flex justify-between items-center align-middle px-5 scroll-smooth h-10 shadow-md'>
          <Back /> <ToggleDark /> <Print />
        </div>
        <div className='text-center text-green-500 font-semibold'>
          <h2 className='bg-slate-100 dark:bg-slate-900'>Before Prin the CV</h2>
          <h1 className='bg-slate-100 dark:bg-slate-900'>Please turn on light mode</h1>
        </div>
      </div>
      <section className='resume-print'>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen p-8">
          <div className="container mx-auto max-w-4xl">

            {/* Header Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-t-md p-6">
              <div className="flex justify-between items-center">
                <div className="text-slate-950 dark:text-slate-50 uppercase flex justify-center gap-2 items-center align-middle flex-col">
                  <h1 className='text-4xl font-bold'>Sagar Suri</h1>
                  <h3 className='text-xl'>web developer</h3>
                </div>
                <div className="text-right flex justify-end items-end align-middle flex-col">
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-center items-center align-middle gap-1"><a className='flex justify-center items-center align-middle gap-1 hover:underline' href="https://wa.me/918806116794"><PiPhoneCallDuotone />+918806116794</a></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="mailto:sagrsurigmail.com" className="hover:underline flex justify-center gap-1 items-center align-middle"><MdOutlineMailOutline />sagrsurigmail.com</a></p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="https://www.sagarsuri.in" className="hover:underline flex justify-center items-center align-middle gap-1" target="_blank" rel="noreferrer"><HiExternalLink />www.sagarsuri.in</a></p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="https://github.com/sagrsuri" className="hover:underline flex justify-center gap-1 items-center align-middle" target="_blank" rel="noreferrer"><PiGithubLogoBold />github.com/sagrsuri</a></p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-around items-center align-middle gap-1"><a href="https://linkedin.com/in/sagrsuri" className="hover:underline flex justify-center items-center align-middle gap-1" target="_blank" rel="noreferrer"><LiaLinkedin />linkedin.com/in/sagrsuri</a></p>
                </div>
              </div>
            </div>
            <hr className='h-[2px] border-2 border-gray-500' />
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm p-6 mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300">
              I am a motivated Full Stack Web Development fresher with a strong interest in building websites and web applications. After completing my graduation, I pursued a Full Stack Web Development course, where I gained hands-on experience by working on various projects. I am passionate about understanding how websites function and enjoy both designing and developing web solutions. I am now seeking internship or entry-level opportunities to apply my skills and grow in the field of web development.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm p-6 mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Skills</h2>
              <ul className="skillContainer">
                <li className='skills fill-left-to-right' ><LiaHtml5 />HTML5</li>
                <li className='skills fill-left-to-right' ><RiCss3Line />CSS3</li>
                <li className='skills fill-left-to-right' ><RiTailwindCssLine />Tailwindcss</li>
                <li className='skills fill-left-to-right' ><RiBootstrapLine />Bootstrap</li>
                <li className='skills fill-left-to-right' ><TbBrandJavascript />JavaScript</li>
                <li className='skills fill-left-to-right' ><RiNodejsLine />Node.js</li>
                <li className='skills fill-left-to-right' ><RiReactjsLine />React.js</li>
                <li className='skills fill-left-to-right' ><TbBrandVite />Vite.js</li>
                <li className='skills fill-left-to-right' ><FaGitAlt />Git & GitHub</li>
                <li className='skills fill-left-to-right' ><SiExpress />Express.js</li>
                <li className='skills fill-left-to-right' ><SiMongodb />MongoDB</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 mb-0 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Tools</h2>
              <ul className="skillContainer">
                <li className='skills fill-left-to-right ' ><FaRegKeyboard /><Link to={'https://sagarsuri.in/assets/TypingSpeed-03rrjvxG.pdf'}>50+ WPM</Link></li>
                <li className='skills fill-left-to-right' ><TbBrandVscode />Vs Code</li>
                <li className='skills fill-left-to-right' ><SiPostman />Postman</li>
                <li className='skills fill-left-to-right ' ><FiFigma />Figma</li>
                <li className='skills fill-left-to-right ' ><RiChatVoiceLine />ChatGPT</li>
              </ul>
            </div>



            {/* CERTIFICATES */}
            <div className="bg-white dark:bg-gray-800 shadow-sm p-6 mb-0 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white uppercase">Certifications</h2>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-4 p-2 border rounded-lg">
                    <PiCertificateFill size={'24px'} className="text-blue-500" />
                    <div className="">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        <Link to={cert.certUrl} className="hover:underline">{cert.title}</Link>
                      </p>
                      <Link to={cert.badgeUrl} className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline">
                        <MdVerifiedUser size={'18px'} />
                        <span>{cert.badgeText}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>


            {/* <div className="bg-white dark:bg-gray-800 p-6 mb-0 space-y-2 " >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Certification</h2>

              <ul className='certificateContainer'>
                <li className='Resumecertificate'>
                <PiCertificateFill size={'20px'}/><p className='text-[16px] font-semibold'><Link to={'https://sagarsuri.in/assets/certificate-C5t1KhZs.png'}>Full Stack Web Development</Link></p><Link to={'https://pwskills.com/learn/certificate/e21fcd71-ea65-47d2-a716-8422d2e51fbf/'} className='certificateBadge fill-left-to-right'> <MdVerifiedUser />PW SKills</Link>
                </li>
                <li className='Resumecertificate'>
                <PiCertificateFill size={'20px'}/><p className='text-[16px] font-semibold'><Link to={'https://sagarsuri.in/assets/certificateBackend-CW6vmdn9.png'}>Backend Development</Link></p><Link to={'https://pwskills.com/learn/certificate/10edb6ee-2c57-4782-9f38-fe455eb7ff74/'} className='certificateBadge fill-left-to-right'> <MdVerifiedUser />PW SKills</Link>
                </li>
                <li className='Resumecertificate'>
                <PiCertificateFill size={'20px'}/><p className='text-[16px] font-semibold'><Link to={'https://sagarsuri.in/assets/certificatefcc-1bC0C7Ct.jpg'}>Responsive Web Design</Link></p><Link to={'https://www.freecodecamp.org/certification/SAGARSURI/responsive-web-design'} className='certificateBadge fill-left-to-right'> <MdVerifiedUser />FeeCodeCamp</Link>
                </li>
              </ul>
            </div> */}

            <div className="page-break"></div>

            {/* Education Section with added top margin */}
            <div className="bg-white dark:bg-gray-800 shadow-sm p-6 mb-0" style={{ marginTop: '8px' }}>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Education</h2>
              <p className="text-gray-700 dark:text-gray-300">Bachelor in Computer Science - RTM University (2019 - 2022)</p>
            </div>
            

            {/* Projects Section */}
            <div className="bg-white dark:bg-gray-800 rounded-b-sm p-6 mb-0 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase tracking-wide">Projects</h2>
              <ul>
                {resumeData.projects.map((project, index) => (
                  <li key={index} className="mb-2 border-b border-gray-300 dark:border-gray-700 pb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-blue-500 hover:underline">
                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                      </a>
                      <span>|</span>
                      <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center text-blue-500 hover:underline">
                        <FaLaptopCode className="mr-1" /> Repository
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>




            {/* Projects Section
            <div className="bg-white dark:bg-gray-800 p-6 mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Projects</h2>
              <ul>
                {resumeData.projects.map((project, index) => (
                  <li key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                    <div className="flex items-center gap-2">
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                      <span>|</span>
                      <a href={project.repo} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline"><FaLaptopCode /></a>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}



            {/* Projects Section */}
            {/* <div className="bg-white flex flex-col justify-between dark:bg-gray-800 p-6 mb-0 space-y-2 " style={{ marginTop: '10px' }}>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white uppercase">Projects</h2>

              <p className='flex justify-start items-start align-middle gap-2'>
                <div className='flex justify-center items-center align-middle gap-3'>
                <Link to="https://sagarsuri.in" className="text-blue-600 dark:text-blue-400 flex justify-start items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
                  <TbDeviceImacCode />Portfolio</Link>
                <Link to={'https://github.com/sagrsuri/sagrsuri'} className=' px-3 text-center rounded-xl border-[1px] border-black hover:bg-black hover:text-white'><FaCodeCommit className='hover:text-green-400' /></Link>
                </div>
                    <div className='text-end'>
                    - Developed a personal portfolio with React, Vite, and Tailwind CSS featuring a modern, responsive design to showcase my skills and projects.
                    </div>
              </p>
              <p className='flex justify-start items-start align-middle gap-2'>
                <div className='flex justify-center items-center align-middle gap-3'>
                <Link to="https://www.npmjs.com/package/vite-gist" className="text-blue-600 dark:text-blue-400 flex justify-start items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
                  <TbDeviceImacCode />vite_gist</Link>
                <Link to={'https://github.com/sagrsuri/vite-gist'} className=' px-3 text-center rounded-xl border-[1px] border-black hover:bg-black hover:text-white'><FaCodeCommit className='hover:text-green-400' /></Link>
                </div>
                <div className='text-end'>
                - Developed the vite-gist package to seamlessly display GitHub Gists in React applications, with customizable syntax highlighting, dark and light mode support, and Tailwind CSS integration.
                </div>
              </p>

              <p className='flex justify-start items-start align-middle gap-2'>
                <div className='flex justify-center items-center align-middle gap-3'>
                <Link to="https://www.npmjs.com/package/vitetoggle" className="text-blue-600 dark:text-blue-400 flex justify-start items-center align-middle gap-1 hover:underline" target="_blank" rel="noreferrer">
                <TbDeviceImacCode/>vitetoggle</Link>
                <Link to={'https://github.com/sagrsuri/vitetoggle'} className=' px-3 text-center rounded-xl border-[1px] border-black hover:bg-black hover:text-white'><FaCodeCommit className='hover:text-green-400' /></Link>
                </div>
                 <div className='text-end'>
                 - Created the vite-toggle npm package for easy theme switching in React apps, offering customizable toggle functionality for dark mode, light mode, and system preferences with extensive styling options.
                 </div>
              </p>
              <p className='flex justify-start items-start align-middle gap-2'>
                <div className='flex justify-center items-center align-middle gap-3'>
                <Link to="https://sagrsuri.github.io/pokemon" className="text-blue-600 dark:text-blue-400 flex justify-start items-center align-middle gap-1 hover:underline" target="_blank" rel="noreferrer">
                <TbDeviceImacCode/>Pokemon</Link> <Link to={'https://github.com/sagrsuri/pokemon'} className=' px-3 text-center rounded-xl border-[1px] border-black hover:bg-black hover:text-white'><FaCodeCommit className='hover:text-green-400' /></Link> 
                </div>
                  <div className='text-end'>
                  - Developed a Pokémon website using the Pokémon API, built with Vite, and styled with Tailwind CSS for a responsive and modern design.
                  </div>
              </p>
              <p className='flex justify-start items-start align-middle gap-2'>
                <div className='flex justify-center items-center align-middle gap-3'>
                <Link to="https://sagrsuri.github.io/youtube" className="text-blue-600 dark:text-blue-400 flex justify-start items-center align-middle gap-1 hover:underline" target="_blank" rel="noreferrer">
                <TbDeviceImacCode/>YoutubeClone</Link> <Link to={'https://github.com/sagrsuri/youtube'} className=' px-3 text-center rounded-xl border-[1px] border-black hover:bg-black hover:text-white'><FaCodeCommit className='hover:text-green-400' /></Link>
                </div>
                 <div className='text-end'>
                 -Built a YouTube clone using the YouTube API and Vite, featuring a modern and responsive interface.
                 </div>
              </p>
              <p className='flex justify-start items-start align-middle gap-2'>
                <div className='flex justify-center items-center align-middle gap-3'>
                <Link to="https://github.com/SagrSuri/LEARNING-SYSTEM-MODULE" className="text-blue-600 dark:text-blue-400 flex justify-start items-center align-middle gap-1 hover:underline" target="_blank" rel="noreferrer">
                <TbDeviceImacCode/>Learning_System_Module</Link> <Link to={'https://github.com/SagrSuri/LEARNING-SYSTEM-MODULE'} className=' px-3 text-center rounded-xl border-[1px] border-black hover:bg-black hover:text-white'><FaCodeCommit className='hover:text-green-400' /></Link>
                </div> 
                <div className='text-end'>
                - 
                Developed a full-stack learning management system with Vite and Express.js, including an admin panel, integrated Razorpay payment system, and MongoDB database for efficient course management and transactions.
                </div>
              </p>
            </div> */} 

           

            {/* Page break before Education section */}
            {/* <div className="page-break"></div> */}

            {/* Experience Section
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
