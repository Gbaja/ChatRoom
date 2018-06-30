const bcrypt = require("bcrypt");
const oneUser = require("../queries/one_user");

const isValidPassword = function(userPassword, password) {
  return bcrypt.compareSync(password, userPassword);
};

exports.post = (req, res) => {
  const { email, password } = req.body;
  oneUser(email).then(result => {
    console.log(result);
    if (!result) {
      return res.status(422).send({
        type: "error",
        message: "User already exists, please try loggin in"
      });
    } else {
      if (!isValidPassword(password, password)) {
        return res.status(422).send({
          type: "error",
          message: "Password incorrect."
        });
      } else {
        req.session.user_id = result.id;
        req.session.user_name = result.user_name;
        return res.send(result);
      }
    }
  });
};
