import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import SignupForm from "./Signup/SignupForm";
import LoginForm from "./Login/LoginForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loginform" component={LoginForm} />
          <Route exact path="/signupform" component={SignupForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
