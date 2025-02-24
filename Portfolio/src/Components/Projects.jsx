import React from "react";
import { ExternalLink } from "lucide-react";
import postal from "../assets/postal.png";
import habit from "../assets/habit.png";
import chicken from "../assets/chicks.png";

const projects = [
  {
    title: "Chik's Run",
    description: "A web application built with React and SpringBoot",
    image: chicken,
    live: "http://23.97.195.247/",
  },
  {
    title: "Postal Service",
    description: "A web application built with React and .NET",
    image: postal,
    live: "https://grandpost.al",
  },
  {
    title: "Hobbit",
    description: "An Habit Tracker built with React and SpringBoot",
    image: habit,
    live: "https://notliveyet.com",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:shadow-md dark:hover:shadow-lg dark:hover:-translate-y-1">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-white mb-4">
          {project.description}
        </p>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <ExternalLink size={18} className="mr-2" />
          Live
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 dark:bg-black ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
