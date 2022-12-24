import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
function Routes() {
  return (
    <div>
      <BrowserRouter>
        <div className="page-content">
          <Route path="/" component={Register} exact />
          <Route path="/login" component={Login} exact />

          <Route path="/signup" component={Register} exact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
