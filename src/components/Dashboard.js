import React from "react";
import { Link } from "react-router-dom";

const Dashboard = props => {
  return (
    <div>
      <h1> Chat room Dashboard </h1>
      <Link to={`/add_new_group/${props.match.params.id}`}>
        Create new group
      </Link>
    </div>
  );
};

export default Dashboard;
