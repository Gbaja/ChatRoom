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

const isValidPassword = (userPassword, password) => {
  return bcrypt.compareSync(password, userPassword);
};

module.exports = { hashPassword, isValidPassword };
