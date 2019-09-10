import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// rend les props accessibles aux autres components ??
// because will be wraping all the other components with this browserRouter component
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
