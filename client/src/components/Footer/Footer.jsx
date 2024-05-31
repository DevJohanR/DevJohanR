// src/components/Footer/Footer.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../features/alertSlice';
import styles from './Footer.module.css';
import { FaDownload } from 'react-icons/fa';
import pdf from '../../assets/curriculumJohanRiascos7777.pdf';

const Footer = () => {
  const dispatch = useDispatch();

  const handleAlertClick = (e) => {
    e.preventDefault();
    dispatch(showAlert());
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.socialMedia}>
            <a href={pdf} download="curriculum.pdf" className={styles.downloadLink}>
              <span>Descargar Curriculum  </span> <span><FaDownload /></span>
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Por favor descarga mi hoja de vida, allí encontrarás mis certificaciones laborales y de estudio</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Validaciones</h3>
          <ul>
            <li onClick={handleAlertClick}>Certificados</li>
            <li onClick={handleAlertClick}>Estudios</li>
            <li onClick={handleAlertClick}>Experiencia</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Proyectos</h3>
          <ul>
            <li onClick={handleAlertClick}>Experimentos</li>
            <li onClick={handleAlertClick}>Bootcamp</li>
            <li onClick={handleAlertClick}>Desarrollando<span className={styles.new}>Nuevo</span></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Personal</h3>
          <ul>
            <li onClick={handleAlertClick}>Pasatiempos</li>
            <li onClick={handleAlertClick}>Intereses</li>
            <li onClick={handleAlertClick}>Visión</li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>© Copyright 2024. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
