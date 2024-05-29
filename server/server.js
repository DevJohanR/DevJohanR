// backend/server.js
const express = require('express');
const cors = require('cors');
const projectsRouter = require('./routes/projects');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
