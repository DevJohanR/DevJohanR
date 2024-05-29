import React from 'react';
import styles from './AboutMe.module.css';
import photo from '../../assets/img/johan.jpg'; // Asegúrate de usar la ruta correcta a tu imagen

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.name}>Johan Riascos</h1>
        <h2 className={styles.title}>Desarrollador de Software</h2>
        <p className={styles.description}>
        Desarrollador Full Stack con una habilidad innata para crear aplicaciones web robustas y escalables. Mi enfoque autodidacta, complementado por el 50% de mi carrera en análisis y desarrollo de software, así como mi experiencia práctica, me ha permitido perfeccionar mis habilidades en tecnologías front-end como React, así como en tecnologías back-end como Node.js, MySQL, PostgreSQL y MongoDB. Mi objetivo es aprovechar mi experiencia para crear soluciones innovadoras que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales.
        </p>
      </div>
      <div className={styles.imageSection}>
        <img src={photo} alt="Kevin Rush" className={styles.photo} />
      </div>
    </div>
  );
};

export default AboutMe;
