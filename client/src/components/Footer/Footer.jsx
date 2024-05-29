import React from 'react';
import styles from './Footer.module.css';
import { FaDownload } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import pdf from '../../assets/activosNorman.pdf';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.socialMedia}>
            <a href={pdf} download="curriculum.pdf" className={styles.downloadLink}>
              Descargar Curriculum <FaDownload />
            </a>
          </div>
          <div className={styles.copyright}>
            <p>© Copyright 2024. Todos los derechos reservados.</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Titulo</h3>
          <ul>
            <li>Inicio</li>
            <li>Estudios</li>
            <li>Experiencia</li>
            <li>Descargar</li>
          </ul>
        </div>
        <div className={styles.column}>
        <h3>Titulo</h3>
          <ul>
          <li>Descripcion</li>
            <li>Descripcion</li>
            <li>Descripcion Pro<span className={styles.new}>Nuevo</span></li>
            <li>Descripcion</li>
            <li>Descripcion</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Titulo</h3>
          <ul>
            <li>Descripcion</li>
            <li>Descripcion</li>
            <li>Descripcion</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
