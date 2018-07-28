const userGroupsQuery = require("../queries/user_groups");

exports.get = (req, res) => {
  return userGroupsQuery().then(response => {
    res.send(response);
  });
};
