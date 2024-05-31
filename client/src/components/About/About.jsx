import React, { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa'; // Importamos el icono de React
import SearchBar from '../SearchBar/SearchBar';
import ProjectsSearch from '../ProjectsSearch/ProjectsSearch';
import CodeBlock from '../CodeBlock/CodeBlock';
import styles from './About.module.css';
import { Link } from 'react-scroll';
import pdf from '../../assets/curriculumJohanRiascos7777.pdf';
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
          En mi trayectoria como desarrollador Full Stack, he adquirido una sólida experiencia en la creación y consumo de APIs, utilizando React para el frontend y Node.js para el backend. Esta combinación me permite construir aplicaciones web eficientes.
          </p>
          <p className={styles.codeDescription}>
  Implemento servidores con Express en Node.js que interactúan con bases de datos SQL, facilitando la búsqueda y filtrado dinámico. <strong>Por ejemplo, para la selección de proyectos, el siguiente código ilustra cómo consumo datos desde MySQL.</strong>
</p>

          <div className={styles.ctaButtons}>

          <a href={pdf} download="curriculumJohanRiascos.pdf">
          <button className={styles.ctaButton}>Descargar CV</button>
            </a>

            
            <Link to="contacto" smooth={true} duration={500}><button className={styles.ctaButton}>¡Hablemos!</button></Link>
            
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
