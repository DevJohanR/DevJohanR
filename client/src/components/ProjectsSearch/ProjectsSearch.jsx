// frontend/src/components/ProjectsSearch/ProjectsSearch.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ProjectsSearch.module.css';

const ProjectsSearch = ({ searchTerm }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portafoliojohanriascos.onrender.com/projects', {
          params: { search: searchTerm }
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [searchTerm]);

  const highlightMatch = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => (
      regex.test(part) ? <span key={index} className={styles.highlight}>{part}</span> : part
    ));
  };

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <h3>{project.nombre}</h3>
          <p>Descripción: {project.descripcion}</p>
          <p>Cliente: {project.cliente}</p>
          <p>Tecnologías: {highlightMatch(project.tecnologias, searchTerm)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSearch;
