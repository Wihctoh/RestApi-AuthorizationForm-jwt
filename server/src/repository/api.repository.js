const pool = require("../db");

async function getAllUsersDB() {
  const client = await pool.connect();

  const sql = "select * from users";
  const { rows } = await client.query(sql);

  client.release();

  return rows;
}

async function getUserByIdDB(id) {
  const client = await pool.connect();

  const sql = "select * from users where id = $1";
  const { rows } = await client.query(sql, [id]);

  client.release();

  return rows;
}

async function getUserByEmailDB(email) {
  const client = await pool.connect();

  const sql = "select * from users where email = $1";
  const { rows } = await client.query(sql, [email]);

  client.release();

  return rows;
}

async function createUserDB(name, surname, email, pwd) {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql =
      "insert into users (name, surname, email, password) values ($1, $2, $3, $4) returning *";
    const { rows } = await client.query(sql, [name, surname, email, pwd]);

    await client.query("commit");
    client.release();

    return rows;
  } catch (error) {
    await client.query("rollback");

    console.log(`createUserDB: ${error.message}`);

    return [];
  }
}

async function updateUserDB(id, name, surname, email, password) {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql =
      "update users set name = $2, surname = $3, email = $4, password = $5 where id = $1 returning *";
    const { rows } = await client.query(sql, [id, name, surname, email, password]);

    await client.query("commit");
    client.release();

    return rows;
  } catch (error) {
    await client.query("rollback");

    console.log(`updateUserDB: ${error.message}`);

    return [];
  }
}

async function deleteUserDB(id) {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "delete from users where id = $1 returning *";
    const { rows } = await client.query(sql, [id]);

    await client.query("commit");
    client.release();

    return rows;
  } catch (error) {
    await client.query("rollback");

    console.log(`deleteUserDB: ${error.message}`);

    return [];
  }
}

module.exports = {
  getAllUsersDB,
  getUserByIdDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
  getUserByEmailDB,
};
