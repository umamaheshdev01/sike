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
      title: "Movies Forever",
      copy: "Movie ticket booking website",
      year: "2022",
      link : '/'
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
