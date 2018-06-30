const { isValidPassword } = require("../utils/bcrypt");
const oneUser = require("../queries/one_user");

exports.post = (req, res) => {
  const { email, password } = req.body;
  oneUser(email).then(result => {
    console.log(result);
    if (!result) {
      return res.status(422).send({
        type: "error",
        message: "User does not exists, please try loggin in"
      });
    } else {
      console.log();
      if (!isValidPassword(result.password, password)) {
        return res.status(422).send({
          type: "error",
          message: "Password incorrect."
        });
      } else {
        console.log("RESULT: ", result);
        req.session.user_id = result.id;
        req.session.user_name = result.user_name;
        console.log(req.session);
        return res.send(result);
      }
    }
  });
};
