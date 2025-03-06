const { Pool } = require("pg");
const { argv } = require("node:process");

const pool = new Pool({
  connectionString: argv[2],
});

module.exports = pool;
