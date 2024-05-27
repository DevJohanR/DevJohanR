import React from 'react';
import styles from "./Skill.module.css"

const Skill = ({ src, alt }) => {
  return (
    <div className={styles.skill}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Skill;
