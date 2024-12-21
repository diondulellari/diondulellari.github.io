import React from "react";
import tailwind from "../assets/tailwind.svg";
const technologies = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
];

const TechCard = ({ name, icon }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center dark:transition-all  p-4 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:shadow-xl dark:shadow-lg  dark: hover:-translate-y-1">
      <img src={icon} alt={name} className="w-12 h-12 object-contain" />
    </div>
    <span className="text-gray-600 dark:text-white text-sm font-medium">
      {name}
    </span>
  </div>
);

export const Skills = () => {
  return (
    <section id="technologies" className="py-24 bg-white dark:bg-black ">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 dark:text-white">
          Technologies and Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-16 max-w-2xl mx-auto">
          Here you will find a list of the main technologies and tools that I
          use to create new solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
