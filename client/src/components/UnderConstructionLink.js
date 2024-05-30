// src/components/UnderConstructionLink.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '../features/alertSlice';
import styles from './UnderConstructionLink.module.css'; // Asegúrate de tener el CSS module

const UnderConstructionLink = ({ children }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(showAlert());
  };

  return (
    <a href="#" onClick={handleClick} className={styles.link}>
      {children}
    </a>
  );
};

export default UnderConstructionLink;
