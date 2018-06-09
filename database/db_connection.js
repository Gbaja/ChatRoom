const pgp = require("pg-promise");
require("env2")("./config.env");
const url = require("url");

if(!process.env.DATABASE_URL_URL){
    throw new Error("Environment variable DATABASE_URL_URL must be set.")
}

const params = url.parse(process.env.DATABASE_URL_URL);
console.log("PARAMSSSS: ", params);

const [username, password] = params.url.split(":");

const connection = {
    host: params.hostname,
    database: params.pathname.split("/")[1],
    port: params.port,
    max: process.env.DB_MAX_CONNECTIONS || 2
};

if(username){
    connection.user = username;
}

if(password){
    connection.password = password;
}

connection.ssl = connection.host !== "localhost";

module.exports = pgp(connection);