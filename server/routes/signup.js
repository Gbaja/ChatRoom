const oneUser = require("../queries/one_user");
const addUser = require("../queries/add_user");
const { hashPassword } = require("../utils/bcrypt");

exports.post = async (req, res) => {
  const { name, user_name, email, password, is_experts } = req.body;

  try {
    const userExists = await oneUser(req.body.email);
    if (!userExists) {
      const hashedPassword = await hashPassword(req.body.password);
      const userDetails = {
        name,
        user_name,
        password: hashedPassword,
        email,
        is_experts
      };
      const newUserData = await addUser(userDetails);
      console.log(newUserData);
      req.session.user_id = newUserData[0].id;
      req.session.user_name = newUserData[0].user_name;
      res.send(newUserData[0]);
    } else {
      res.status(422).send({ type: "error", message: "user already exists!" });
    }
  } catch (err) {
    res.status(401).send(err);
    console.log("add new user error:", err);
  }
};
