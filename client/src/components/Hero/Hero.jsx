import React from 'react';
import { FaMouse } from 'react-icons/fa';
import styles from './Hero.module.css';
import Projects from '../Projects/Projects';
import skills from '../../assets/skills';
import SkillIcon from '../Skill/Skill';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 200, behavior: 'smooth' }); // Ajusta el valor de `top` según la cantidad de desplazamiento deseado
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroFlexbox}>
        <div className={styles.description}>
          <span className={styles.heroName}>Johan Riascos</span>
          <h1 className={styles.heroTitle}>Desarrollador Full Stack</h1>
          <p className={styles.heroDescription}>
            Con habilidades en <strong>React.js</strong>, <strong>Node.js</strong> y <strong>SQL</strong>, mi experiencia abarca desde el desarrollo de interfaces dinámicas hasta la arquitectura de soluciones de back-end completas. Poseo conocimientos prácticos en la <strong>integración y gestión de APIs</strong>, realización de <strong>despliegues eficientes</strong>, y <strong>administración de bases de datos</strong>, Priorizando la <strong>seguridad</strong>
            <span className={styles.mouseIconContainer} onClick={handleScroll}>
              <FaMouse className={styles.mouseIcon} />
            </span>
          </p>
        </div>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <SkillIcon key={index} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
      <div className={styles.projectsTop}>
        <div className={styles.titleProjects}>
          <h1>Top Proyectos</h1>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Hero;
