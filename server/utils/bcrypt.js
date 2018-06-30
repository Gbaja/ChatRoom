const bcrypt = require("bcrypt");

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });


const validate = (password, userData) =>
  new Promise((resolve, reject) => {
    if (userData) {
      bcrypt.compare(password, userData.password, (err, res) => {
        if (err) {
          reject(err);
        } else if (res) {
          resolve(true);
        } else {
          reject("Wrong password!");
        }
      });
    } else {
      reject(
        "please create an account"
      );
    }
  });

module.exports = { hashPassword, validate };