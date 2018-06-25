const db = require("../database/db_connection");

const addUser = data =>
  db.query(
    `INSERT INTO users (name, userName, email, password, isExpert) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [data.name, data.userName, data.email, data.password, data.isExpert]
  );

module.exports = addUser;
