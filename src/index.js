import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "routes/index.jsx";
import { initializeFirebase, askForPermissionToReceiveNotifications } from "./firebase";
var fire = initializeFirebase();
var unsubscribe = fire.auth().onAuthStateChanged((user)=>{
  if(user){
    window.location.href='http://localhost:3000/dashboard';
  }
  else
  {
    window.location.href='http://localhost:3000/login';
  }
})
unsubscribe();

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
