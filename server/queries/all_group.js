const db = require("../database/db_connection");

const allGroup = data => db.query(`SELECT * FROM groups`);

module.exports = allGroup;
