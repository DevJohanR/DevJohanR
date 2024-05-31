import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projImg1 from '../../assets/img/activosDig.png';
import projImg2 from '../../assets/img/tokenautas.png';
import projImg3 from '../../assets/img/spaceModels.png';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      name: 'Activos Digitales',
      description: 'www.activosdigitales.com.co',
      image: projImg1,
      webUrl: 'https://activosdigitales.com.co',
      githubUrl: 'https://github.com/DevJohanR/NuevaWebActivosDigitales',
    },
    {
      name: 'Tokenautas',
      description: 'www.tokenautas.com',
      image: projImg2,
      webUrl: 'https://tokenautas.com',
      githubUrl: 'https://github.com/DevJohanR/tokenautas.com',
    },
    {
      name: 'Space Models',
      description: 'www.spacemodels.pro',
      image: projImg3,
      webUrl: 'https://spacemodels.pro',
      githubUrl: 'https://github.com/DevJohanR/spaceModels',
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
         
          description={project.description}
          image={project.image}
          webUrl={project.webUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
