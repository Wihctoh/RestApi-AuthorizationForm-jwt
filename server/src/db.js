const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  port: process.env.PORT_DB,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  host: process.env.HOST,
});

module.exports = pool;
