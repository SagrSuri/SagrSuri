// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ToggleO from '../../OwnedComponents/ToggleO';
import projects from './moreProjectData.js'
import { FaFastBackward } from 'react-icons/fa';



function MoreProjects() {
    const navigate = useNavigate();
  return (
    <section className='w-full min-h-screen'>
       <div className='flex justify-between px-6 py-4'>
        <button>
          <Link  onClick={() => navigate(-1)} className='fill-left-to-right px-6 py-1 rounded-sm text-xl flex justify-center hover:text-black dark:bg-transparent dark:text-white'><FaFastBackward /></Link>
        </button>
        <ToggleO/>
      </div>
        <h1 className='text-center font-bold sm:text-xl md:text-2xl flex justify-center items-center my-2 rounded-full w-1/3 mx-auto px-2 py-2'>NEW PROJECTS</h1>

        <div className="p-4 xm:flex-col xm:flex-nowrap sm:flex-col sm:flex-nowrap md:flex-wrap md:flex-row flex justify-center gap-2 items-center align-middle mx-2">
      {projects.map((project) => (
        <div key={project.id} className="p-4
         border border-gray-200 rounded-lg w-1/3 h-40 flex flex-col justify-evenly shadow-md bg-white xm:w-full sm:w-1/2 md:w-1/3 dark:bg-slate-950">
          <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>
          <div className="flex space-x-4 justify-center">
            <Link 
              to={project.githubLink} 
              
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Code
            </Link>
            <Link 
              to={project.liveLink} 
              
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Live
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className='flex justify-center  gap-1 px-6 py-4 relative'>
        <button>
          <Link  onClick={() => navigate(-1)} className='fill-left-to-right px-6 py-1 rounded-sm text-xl flex justify-center border-[1px] border-black dark:border-white hover:text-black dark:bg-transparent dark:text-white'>Back</Link>
        </button>
      </div>
    </section>
  );
}

export default MoreProjects;
