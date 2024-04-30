// Path module is used to construct file paths
const path = require("path");

// Load dotenv configuration from the root directory
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const Pool = require("pg").Pool;

// For env variabke usage, do process.env.VARIABLE

const pool = new Pool({
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  host: process.env.RDS_HOST,
  port: 5432,
  database: process.env.RDS_DATABASE,
});

module.exports = pool;
