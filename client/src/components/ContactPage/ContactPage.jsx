import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portafoliojohanriascos.onrender.com/projects/registro-contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Mensaje enviado con éxito!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
      setSuccessMessage('');
    }
  };

  return (
    <div id='contacto' className={styles.contactPageContainer}>
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
        </div>
        <div className={styles.separator}></div>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Tu Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Tu Correo</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Tu Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={styles.formTextarea}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send</button>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
