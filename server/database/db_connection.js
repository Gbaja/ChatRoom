const pgp = require("pg-promise")();
const url = require("url");
require("env2")(".env");

if (!process.env.DATABASE_URL) {
  throw new Error("Environment variable DATABASE_URL must be set.");
}

const params = url.parse(process.env.DATABASE_URL);
console.log("PARAMSSSS: ", params);
const [username, password] = params.auth.split(":");

localDB = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

const connection = localDB;

const db = pgp(connection);
module.exports = db;
