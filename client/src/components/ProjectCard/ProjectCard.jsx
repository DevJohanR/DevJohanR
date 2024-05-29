import React from 'react';
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ image, name, description }) => {
  return (
    <div className={styles.containerProjectCard}>
      <div
        className={styles.projectCard}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.projectCardContent}>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
