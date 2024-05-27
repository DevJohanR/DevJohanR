import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      name: 'Finanzas en la Luna',
      description: 'www.finanzasenlaluna.com',
      image: projImg1,
    },
    {
      name: 'Luna Coworking',
      description: 'www.lunacoworking.co',
      image: projImg2,
    },
    {
      name: 'Bitppi',
      description: 'www.bitppi.com',
      image: projImg3,
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Projects;
