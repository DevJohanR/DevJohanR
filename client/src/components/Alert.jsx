// src/components/Alert.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { hideAlert } from '../features/alertSlice';
import { FaReact } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

const Alert = () => {
  const dispatch = useDispatch();
  const showAlert = useSelector((state) => state.alert.showAlert);

  useEffect(() => {
    if (showAlert) {
      MySwal.fire({
        title: 'Sección en desarrollo',
        html: `<div style="display: flex; flex-direction: column; align-items: center;">
                 <FaReact size={50} color="#61DAFB" style="margin-bottom: 10px;" />
                 <p>Por la urgencia de poner en producción mi portafolio con la finalidad de poder mostrarlo a los reclutadores, algunas secciones no están listas, sin embargo, si quieres saber sobre ella, escríbeme.</p>
               </div>`,
        showCloseButton: true,
        confirmButtonText: 'WhatsApp',
        confirmButtonColor: '#034595',
        background: '#fff',
        color: '#333',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open('https://wa.link/9j6joz', '_blank');
        }
        dispatch(hideAlert());
      });
    }
  }, [showAlert, dispatch]);

  return null;
};

export default Alert;
