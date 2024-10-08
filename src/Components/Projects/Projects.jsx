// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../Home/Home'
import projectsData from './projectsData';
import { FaLink } from 'react-icons/fa';

import { SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Projects() {
    return (
      <Home>
        <section
          id="Project"
          className="project xm:mt-5 sm:mt-5 bg-slate-200 w-full h-full dark:bg-slate-900 py-3 "
        >
          <div className="project-wrapper max-w-7xl mx-auto px-4">
            {/* <div className="heading text-center">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Projects</h2>
                    </div> */}
            <div className="grid grid-cols-1 pt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="project-box bg-slate-100 dark:bg-slate-950 shadow-lg rounded-lg p-4 transition transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="project-flex flex-col items-center">
                    <h1 className="bg-[#ff9524] dark:bg-blue-700 text-white text-lg font-semibold py-1 px-3 rounded w-full text-center">
                      {project.title}
                    </h1>
                    <img
                      className="dark:border border-black dark:border-green-400 border-[1px] w-full h-48 object-cover mt-2 rounded-[3px]"
                      src={project.image}
                      alt={project.title}
                    />
                    {/* <video className="dark:border border-black dark:border-green-400 border-[1px] w-full h-48 object-cover mt-2 rounded-[3px]"
                src={project.video}
                poster={project.thumbnail}
                controls
                muted
                alt={project.title}
                /> */}
                    <div className="anchor mt-3 flex justify-center gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition"
                      >
                        <FaLink />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-white hover:text-black transition"
                      >
                        <SiGithub />
                      </a>
                    </div>
                    <p className="mt-3 flex flex-wrap justify-center gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-300 dark:bg-gray-700 text-sm px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-1/2 mb-3 mt-10 justify-center items-center mx-auto'>
            <Link className='bg-transparent fill-left-to-right rounded-2xl flex justify-center items-center mx-auto w-auto px-3 py-1 border-[green] dark:border-[blue] border-[1px]' to={'/Projects/MoreProjects'}>More Projects</Link>
          </div>
        </section>
      </Home>
    );
}

export default Projects;