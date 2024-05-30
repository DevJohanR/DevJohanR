import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Header.module.css';
import Logo from "../../assets/logoJohan.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width >= 360 && width <= 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      {isMobile ? (
        <div className={styles.hamburgerMenu}>
          <div className={styles.logoMobile}>
            <img src={Logo} width={90} alt="Logo" />
          </div>
          <div className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="tecnologias" onClick={toggleMenu}>Tecnologías</Link>
            <Link to="contacto" onClick={toggleMenu}>Contacto</Link>
            <div className={styles.socialIcons}>
              <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.desktopMenu}>
          <div className={styles.logo}>
            <img src={Logo} width={100} alt="Logo" />
          </div>
          <div className={styles.links}>
            <Link to="/">Inicio</Link>
            <Link to="tecnologias" smooth={true} duration={500}>Tecnologías</Link>
            <Link to="contacto" smooth={true} duration={500}>
Contacto</Link>
            <div className={styles.socialIcons}>
              <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
