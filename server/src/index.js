// src/index.js
const express = require('express');
const app = express();
const projectsRouter = require('./routes/projects');
require('dotenv').config();

app.use(express.json());
app.use('/projects', projectsRouter);

module.exports = app;
