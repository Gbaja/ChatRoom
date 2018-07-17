const db = require("../database/db_connection");

const addGroup = data =>
  db.query(
    `INSERT INTO groups (name, description, created_by_id) VALUES ($1, $2, $3) RETURNING *`,
    [data.name, data.description, data.created_by_id]
  );

module.exports = addGroup;
