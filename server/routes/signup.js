const oneUser = require("../queries/one_user");
const addUser = require("../queries/add_user");
const { hashPassword } = require("../utils/bcrypt");

exports.post = async (req, res) => {
  console.log("req.body:", req.body);
  const { name, user_name, email, password, is_experts } = req.body;

  try {
    const userExists = await oneUser(req.body.email);
    if (!userExists) {
      const hashedPassword = await hashPassword(req.body.password);
      const userDetails = {
        name: req.body.name,
        user_name: req.body.user_name,
        password: hashedPassword,
        email: req.body.email,
        is_experts: req.body.is_experts
      };
      const newUserData = await addUser(userDetails);
      req.session.user_id = newUserData.id;
      req.session.user_name = newUserData.user_name;
      res.send(newUserData);
    } else {
      res.status(422).send({ type: "error", message: "user already exists!" });
    }
  } catch (err) {
    res.status(401).send(err);
    console.log("add new user error:", err);
  }
};
