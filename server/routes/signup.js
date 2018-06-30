const { getUser, addUser } = require("../queries/user");
const { hashPassword } = require("../authentication/bcrypt");

exports.post = (req, res) =>{
  console.log("req.body:", req.body)
   const {
     name,
     username,
     email,
     password,
     isExperts
    } = req.body;

    try {
      const userExists = await getUser(req.body.email);
      if(!userExists){
        const hashedPassword = await hashPassword(req.body.password);
        const userDetails = {
          name : req.body.name,
          username : req.body.username,
          password : hashedPassword,
          email : req.body.email,
          isExperts : req.body.isExperts
        }
        const newUserData = await addUser(userDetails);
        res.send(newUserData);
      } else {
        res.send("user already exists!")
      }
    }
    catch (err) {
      res.status(401).send(err);
      console.log("add new user error:", err)

    }
}