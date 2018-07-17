const checkGroupName = require("../queries/check_group_name");
const addGroup = require("../queries/new_group");

exports.post = async (req, res) => {
  const { name, description, created_by_id } = req.body;

  try {
    const nameExists = await checkGroupName(name);
    if (!nameExists) {
      const groupDetails = {
        name,
        description,
        created_by_id
      };
      const newGroupInfo = await addGroup(groupDetails);
      console.log(newGroupInfo);
      res.send({ type: "success", message: "New group created!" });
    } else {
      res
        .status(422)
        .send({ type: "error", message: "group name has already been used!" });
    }
  } catch (err) {
    res.status(500).send(err);
    console.log("add new group :", err);
  }
};
