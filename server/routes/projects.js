const express = require('express');
const router = express.Router();
const pool = require('../db');

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

module.exports = router;
