import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div
    name="projects"
    className="w-full min-h-screen h-full pt-[80px] text-gray-300 bg-base-content"
  >
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-white border-black  bg-accent px-3">
          My Project
         
        </p>
        <p className="py-6 text-white font-bold">Check out some of my recent work</p>
      </div>

      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {/* Grid Item */}
        {
        projects.map((project) => (
          <Project key={project.id}
           project={project} />
        ))
        }
       
      </div>
    </div>
  </div>
  );
};

export default Projects;






















































































/* import React from 'react';
import './Projects.css';
import projects from '../../../images/projects.png'
import projects2 from '../../../images/projects2.jpg'
import projects3 from '../../../images/projects3.jpg'

const Projects = () => {
    return (
   <div className="bg-base-content h-screen py-20">
     <div className="pb-10">
     <h1 className='text-6xl mb-10 font-bold text-center text-white font tracking-widest'>My Projects</h1>
        <div className="hr-contact"></div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ProjectImg">
            <img src={projects} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Auto Parts</h2>
            <p>This is a Responsive MERN-Stack Manufacturer web application.</p>
            <div class="card-actions justify-left">
              <a
                href="https://auto-parts-4490a.web.app/"
                class="btn btn-primary"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ProjectImg">
            <img src={projects3} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Auto Parts</h2>
            <p>This is a Responsive MERN-Stack Manufacturer web application.</p>
            <div class="card-actions justify-left">
              <a
                href="https://auto-parts-4490a.web.app/"
                class="btn btn-primary"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ProjectImg">
            <img src={projects2} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Auto Parts</h2>
            <p>This is a Responsive MERN-Stack Manufacturer web application.</p>
            <div class="card-actions justify-left">
              <a
                href="https://auto-parts-4490a.web.app/"
                class="btn btn-primary"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
    
       
        </div>
   </div>
    );
};

export default Projects; */