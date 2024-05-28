import React from 'react';
import styles from './Hero.module.css';
import Projects from '../Projects/Projects';
import skills from '../../assets/skills';
import SkillIcon from '../Skill/Skill';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>

<div className={styles.heroFlexbox}>
      <div className={styles.description}  style={{ 
  padding: '20px', 
  borderRadius: '10px', 

  textAlign: 'center' 
}} >
<span style={{ 
  fontSize: '2rem', 
  color: '#fff', 
  fontWeight: 'bold',
  margin: '5px 0',
  backgroundColor: '#333',
  padding: '8px 20px',
  borderRadius: '30px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  display: 'inline-block'
}}>Johan Riascos</span>

<h1 style={{ 
  fontSize: '3.5rem', 
  color: '#000', 
  margin: '5px 0', 
  fontWeight: 'bold',
  textShadow: '2px 2px #bbb'
}}>Desarrollador Full Stack</h1>
<p style={{ 
  fontSize: '1.1rem',
  color: '#666', 
  lineHeight: '1.5',
  textAlign: 'justify' 
}}>Tecnólogo en análisis y desarrollo de software. Autodidacta, proactivo; me motiva el desarrollo personal, por lo que he desarrollado la capacidad de concentrarme y programar durante largas horas. Se me facilita expresarme, comunicando mis ideas de manera clara. Tengo experiencia en la implementación de soluciones web completas, desde el diseño hasta la integración de APIs, bases de datos e implementación de medidas de seguridad.</p>

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
