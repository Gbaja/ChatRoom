import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const Dashboard = props => {
  console.log("DASHBOARD PROPS: ", props)
  return (
    <div>
      <h1> Chat room Dashboard </h1>
      <Link to={`/add_new_group/${props.id}`}>
        Create new group
      </Link>
      <h3>All groups</h3>
      {/* Get all the groups that are in the database*/}
      <ul>
      {props.allGroups.map((group)=>{
        return (<Fragment key={group.name}>
          <li><p>{group.name}</p>
          <p>{group.description}</p>
          <button>Join</button>
          </li>

          </Fragment>)
      })}
</ul>
    </div>
  );
};

export default Dashboard;
