import React from 'react';
import styles from './ContactPage.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className={styles.contactPageContainer}>
      <h1 className={styles.titleSmall}>Ponerse en contacto</h1>
      <h2 className={styles.titleLarge}>Contacto</h2>
      <div className={styles.contentContainer}>
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <span>+57 3027777134</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <span>ejohan7777@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Colombia, Cucuta</span>
          </div>
          <div className={styles.infoItem}>
            <FaGithub className={styles.icon} />
            <span><a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a></span>
          </div>
          <div className={styles.infoItem}>
            <FaLinkedin className={styles.icon} />
            <span><a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a></span>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.formSection}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Tu Nombre</label>
              <input type="text" id="name" name="name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Tu Correo</label>
              <input type="email" id="email" name="email" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Tu Mensaje</label>
              <textarea id="message" name="message" rows="4" className={styles.formTextarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
