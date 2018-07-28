import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import SignupFormContainer from "./Signup/SignupFormContainer";
import Dashboard from "./Dashboard/Dashboard_container";
import LoginFormContainer from "./Login/LoginFormContainer";
import AddNewGroupFormContainer from "./AddNewGroup/AddNewGroupFormContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loginform" component={LoginFormContainer} />
          <Route exact path="/signupform" component={SignupFormContainer} />
          <Route exact path="/dashboard/:id" component={Dashboard} />
          <Route
            exact
            path="/add_new_group/:user_id"
            component={AddNewGroupFormContainer}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
