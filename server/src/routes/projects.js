// src/routes/projects.js
const express = require('express');
const router = express.Router();
const pool = require('../../db');

// Ruta para obtener proyectos con sus tecnologías y clientes
router.get('/', async (req, res) => {
  const searchTerm = req.query.search || '';
  const query = `
    SELECT p.id, p.nombre, p.descripcion, c.nombre AS cliente, GROUP_CONCAT(t.nombre) AS tecnologias
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    LEFT JOIN projects_technologies pt ON p.id = pt.project_id
    LEFT JOIN technologies t ON pt.technology_id = t.id
    WHERE p.nombre LIKE ? OR t.nombre LIKE ? OR c.nombre LIKE ?
    GROUP BY p.id, p.nombre, p.descripcion, c.nombre
  `;

  try {
    const [results] = await pool.query(query, [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta para registro de formulario
router.post('/registro-contacto', async (req, res) => {

   // Extraemos las variables name, email y message del cuerpo de la solicitud (req.body).
  // Esto es enviado desde el frontend cuando un usuario llena un formulario de contacto.
  const { name, email, message } = req.body;


  const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';

 // Ejecutamos la consulta SQL usando el pool de conexiones.
  // Pasamos la consulta y un array con los valores a insertar en la base de datos.
  pool.query(query, [name, email, message])
    .then(result => {
      // Si la inserción es exitosa, enviamos una respuesta con código 201 (Creado).
      // También enviamos un objeto con el ID del usuario insertado y un mensaje de éxito.
      res.status(201).send({ id: result[0].insertId, message: "datos de contacto recibidos exitosamente" });
    })
    .catch(error => {
      // Si ocurre un error durante la inserción, enviamos una respuesta con código 500 (Error Interno del Servidor).
      // También enviamos un objeto con el mensaje de error para informar al usuario o al desarrollador.
      res.status(500).send({ message: "Error al crear Usuario", error: error.message });
    });


});

module.exports = router;
