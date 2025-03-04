const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE,
});

module.exports = pool;
