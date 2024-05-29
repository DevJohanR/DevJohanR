import React, { useState } from 'react';
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

const About = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Explora Mis Proyectos Tecnológicos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectsSearch searchTerm={searchTerm} />
      <div className={styles.codeSection}>
        <div className={styles.textContainer}>
      
          <h3 className={styles.codeSubtitle}>Consumo Eficiente de API con Node.js y MySQL</h3>
          <p className={styles.codeDescription}>
          En mi trabajo actual en Activos Digitales, utilizamos un enfoque basado en Node.js y MySQL para manejar y filtrar datos de manera eficiente, este fragmento de codigo corresponde a la logica que permite el filtrado de mis componentes en la seccion anterior.  el siguiente fragmento de código, que muestra cómo la implementacion realizada 
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
