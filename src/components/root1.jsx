import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Form from "./form";
import Nav from "./nav";
import Error from "./error";
import Signin from "./signin";
import Welcome from "C:/React_project/e_commerce/src/common/welcomeheader";

class Root1 extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/form" component={Form} />
            <Route path="/page3" component={Welcome} />
            <Route path="/signin" component={Signin} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root1;
