const db = require("../database/db_connection");

const addUser = data =>
  db.query(
    `INSERT INTO users (name, user_name, email, password, is_experts) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [data.name, data.user_name, data.email, data.password, data.is_experts]
  );

module.exports = addUser;
