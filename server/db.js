// Path module is used to construct file paths
const path = require('path');

// Load dotenv configuration from the root directory
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: "localhost",
  port: 5432,
  database: process.env.PG_DATABASE
});

module.exports = pool;