import React from 'react';
import styles from './ContactInfo.module.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = ({ photo, email, phone, linkedin, github }) => {
  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.photoContainer}>
        <img src={photo} alt="Johan Riascos" className={styles.photo} />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.name}>Johan Riascos</h2>
        <ul className={styles.infoList}>
          <li>
            <FaEnvelope className={styles.icon} /> <span>{email}</span>
          </li>
          <li>
            <FaPhone className={styles.icon} /> <span>{phone}</span>
          </li>
          <li>
            <FaLinkedin className={styles.icon} /> <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <FaGithub className={styles.icon} /> <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
