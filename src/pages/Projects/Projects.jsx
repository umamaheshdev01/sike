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
      copy: "Smart Classroom App",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/Ecommerce'
    },

    
    {
      title: "Hop Shop",
      copy: "Ecommerce Website",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/Hop-Shop'
    },


    

    {
      title: "Service Express",
      copy: "Website for a startup",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/Ecommerce'
    },


    {
      title: "Connect Hub",
      copy: "Web app for selling projects",
      year: "2024",
      link : 'https://github.com/umamaheshdev01/Ecommerce'
    },


    
    {
      title: "ICMAMC",
      copy: "College Event Website",
      year: "2023",
      link : 'https://github.com/umamaheshdev01/ICMAMC'
    },

    {
      title: "Movies Forever",
      copy: "Movie ticket booking website",
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
