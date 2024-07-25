import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";

const useMultipleScrambles = (projects) => {
  return projects.map((project) => {
    const { ref: titleRef } = useScramble({
      text: project.title,
      speed: 1000,
    });
    const { ref: copyRef } = useScramble({
      text: project.copy,
      speed: 1000,
    });
    return { ...project, titleRef, copyRef };
  });
};

const Projects = () => {
  const projectData = [

    {
      title: "Classroom of Elite",
      copy: "NextJS Supabase Shadcn",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/classroom_of_elite'
    },

    
    {
      title: "Hop Shop",
      copy: "NextJS Supabase Shadcn",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/Hop-Shop'
    },


    {
      title: "Connect Hub",
      copy: "NextJS Supabase Tailwind",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/connecthub'
    },


    
    {
      title: "ICMAMC",
      copy: "React Tailwind",
      year: "2023",
      link : 'https://github.com/umamaheshdev01/ICMAMC'
    },

    {
      title: "Movies Forever",
      copy: "HTML CSS JS",
      year: "2022",
      link : 'https://github.com/umamaheshdev01/Movies-Forever'
    },


    
  ];

  const scrambledProjects = useMultipleScrambles(projectData);

  return (
    <div className="container page-projects">
      {scrambledProjects.map((project, index) => (
        <Link to={project.link} key={index}>
          <div className="project-item">
            <div className="project-title">
              <p ref={project.titleRef}>{project.title}</p>
            </div>
            <div className="project-copy">
              <p ref={project.copyRef}>{project.copy}</p>
            </div>
            <div className="project-divider"></div>
            <div className="project-year">
              <p>{project.year}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
