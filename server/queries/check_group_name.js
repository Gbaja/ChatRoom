const db = require("../database/db_connection");

const checkGroupName = name =>
  db
    .query(`SELECT * FROM groups WHERE name = $1`, [name])
    .then(res => res[0])
    .catch(err => console.log("check group name query err: ", err));

module.exports = checkGroupName;
