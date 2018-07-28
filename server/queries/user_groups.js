const db = require("../database/db_connection");

const myGroups = (userId) => db.query(`SELECT * FROM user_groups WHERE user_id = $1`, [userId])