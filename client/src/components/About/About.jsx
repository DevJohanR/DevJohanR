import React, { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa'; // Importamos el icono de React
import SearchBar from '../SearchBar/SearchBar';
import ProjectsSearch from '../ProjectsSearch/ProjectsSearch';
import CodeBlock from '../CodeBlock/CodeBlock';
import styles from './About.module.css';

const backendCode = `
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const searchTerm = req.query.search || '';
  const query = \`
    SELECT p.id, p.nombre, p.descripcion, c.nombre AS cliente,
    GROUP_CONCAT(t.nombre) AS tecnologias
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    LEFT JOIN projects_technologies pt ON p.id = pt.project_id
    LEFT JOIN technologies t ON pt.technology_id = t.id
    WHERE p.nombre LIKE ? OR t.nombre LIKE ? OR c.nombre LIKE ?
    GROUP BY p.id, p.nombre, p.descripcion, c.nombre
  \`;

  try {
    const [results] = await pool.query(query, [\`%\${searchTerm}%\`, 
    \`%\${searchTerm}%\`, \`%\${searchTerm}%\`]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
`;

const rotateIcon = (degree) => {
  return {
    transform: `rotate(\${degree}deg)`,
    transition: 'transform 0.5s linear'
  };
};


const About = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(prevRotation => (prevRotation + 360) % 360);
    }, 5000); // Ajusta este tiempo para controlar la velocidad de la animación

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div id='tecnologias' className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Filtra mis proyectos por tecnologías</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectsSearch searchTerm={searchTerm} />
      <div className={styles.codeSection}>
        <div className={styles.textContainer}>
          <h3 className={styles.codeSubtitle}>
            Consumo de APIs 
            <span className={styles.reactIcon} style={rotateIcon(rotation)}>
          <FaReact />
        </span>

          </h3>
          <p className={styles.codeDescription}>
            En mi trabajo actual en Activos Digitales, utilizamos un enfoque basado en Node.js y MySQL para manejar y filtrar datos de manera eficiente, este fragmento de código corresponde a la lógica que permite el filtrado de mis componentes en la sección anterior. El siguiente fragmento de código muestra cómo la implementación realizada.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>Ver Más Proyectos</button>
            <button className={styles.ctaButton}>Contactarme</button>
          </div>
        </div>
        <div className={styles.codeContainerWrapper}>
          <CodeBlock language="javascript" codeString={backendCode} />
        </div>
      </div>
    </div>
  );
};

export default About;
