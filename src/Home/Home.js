import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Chat room </h1>
      <p>
        <Link to="/loginform"> Log in </Link>
      </p>
      <p>
        <Link to="/signupform">Sign up </Link>
      </p>
    </div>
  );
};

export default Home;
