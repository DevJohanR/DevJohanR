const express = require('express');
const cors = require('cors');
const projectsRouter = require('./routes/projects');
require('dotenv').config();

const app = express();

const allowedOrigins = ['https://johanriascos.rf.gd'];
app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (como las herramientas Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use('/projects', projectsRouter);

module.exports = app;
