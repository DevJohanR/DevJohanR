import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa'; // Importa los iconos de GitHub y el sitio web
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ image, name, description, webUrl, githubUrl }) => {
  return (
    <div className={styles.containerProjectCard}>
      <div
        className={styles.projectCard}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.projectCardContent}>
          <h4>{name}</h4>
          <p>{description}</p>
          <div className={styles.iconsContainer}>
            <a href={webUrl} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaGlobe size={24} />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
