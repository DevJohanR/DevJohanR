import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa'; // Importa el icono de GitHub
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
          <p>
            Página Web: 
            <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
              {project.webUrl}
            </a>
          </p>
          <p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> {/* Tamaño del icono de GitHub */}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSearch;
