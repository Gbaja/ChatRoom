import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import SignupFormContainer from "./Signup/SignupFormContainer";
import Dashboard from "./Dashboard";
import LoginForm from "./Login/LoginForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loginform" component={LoginForm} />
          <Route exact path="/signupform" component={SignupFormContainer} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
