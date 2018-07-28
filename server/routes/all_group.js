const allGroupsQuery = require("../queries/all_group");

exports.get = (req, res) => {
  return allGroupsQuery().then(response => {
    res.send(response);
  });
};
