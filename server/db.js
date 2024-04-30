// Path module is used to construct file paths
const path = require("path");

// Load dotenv configuration from the root directory
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "PERNTODO109283",
  host: "perntodo-database.c3s2mu6egsgs.us-east-2.rds.amazonaws.com",
  port: 5432,
  database: "perntodoDB",
});

module.exports = pool;
