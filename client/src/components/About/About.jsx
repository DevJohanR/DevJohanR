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
      <h1 className={styles.aboutTitle}>About</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectsSearch searchTerm={searchTerm} />
      <div className={styles.codeSection}>
        <div className={styles.textContainer}>
          <h2 className={styles.codeTitle}>Código del Backend: Node.js y SQL</h2>
          <p className={styles.codeDescription}>Dejo este fragmento de código a continuación para mostrar cómo implementé la lógica de búsqueda en el backend de mi aplicación utilizando Node.js y SQL. Esta ruta maneja una consulta SQL que busca proyectos, clientes y tecnologías relacionadas, demostrando mis habilidades para trabajar con bases de datos y desarrollar APIs eficientes.</p>
        </div>
        <div className={styles.codeContainerWrapper}>
          <CodeBlock language="javascript" codeString={backendCode} />
        </div>
      </div>
    </div>
  );
};

export default About;
