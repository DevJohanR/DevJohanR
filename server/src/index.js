const express = require('express');
const cors = require('cors');
const projectsRouter = require('./routes/projects');
require('dotenv').config();

const app = express();


app.use(cors());

app.use(express.json());
app.use('/projects', projectsRouter);

module.exports = app;
