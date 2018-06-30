const db = require("../database/db_connection");

const getUser = email =>
db.query(`SELECT * FROM users WHERE email $1`, [email])
  .then(res => res[0])
  .catch(err => console.log(err));

module.exports=getUser;
