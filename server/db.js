// backend/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'srv1180.hstgr.io',
  user: 'u491711087_userjohan',
  password: '7=q2m|S?1o',
  database: 'u491711087_basejohan',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
