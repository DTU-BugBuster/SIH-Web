import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header, Footer, Sidebar } from "components";

import dashboardRoutes from "routes/dashboard.jsx";
import { getcurrentuser, getfirebase, askForPermissionToReceiveNotifications } from "../../firebase";
import { Widget, addResponseMessage } from "react-chat-widget";
import Dashboards from "../../views/Dashboard/Dashboard.jsx";
import "react-chat-widget/lib/styles.css";
var fire = getfirebase();
var ps;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: "",
      stateselected: "",
      role: "",
      dataselected: ""
    };
  }
  changestate(value) {
    this.setState({
      stateselected: value
    });
    console.log(value);
  }
  changestate1(value) {
    this.setState({
      dataselected: value
    });
    console.log('c', value);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    addResponseMessage("Welcome, How can i help you?");
    getcurrentuser().then((snapshot) => {
      console.log("p", snapshot);
      this.setState({
        user: snapshot.key,
        role: snapshot.val().role
      });
      console.log("role", snapshot.val().role);
      askForPermissionToReceiveNotifications();
    }).catch(error => {
      console.log(error);
    });
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    if (this.state.count == 0) {
      setTimeout(() => {
        addResponseMessage(
          "Your message has been recorded!Soon a executive will come to help you"
        );
        this.setState({
          count: 1
        });
      }, 1000);
    }
    fire
      .database()
      .ref("chats")
      .push({
        user: this.state.user,
        chat: newMessage
      });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={dashboardRoutes} />
        <div className="main-panel" ref="mainPanel">
          <Header {...this.props} changestate={this.changestate.bind(this)} changestate1={this.changestate1.bind(this)} />
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              }
              if (prop.name == "Dashboard") {
                return (
                  <Route
                    path={prop.path}
                    render={() => {
                      return (
                        <Dashboards
                          {...this.props}
                          state={this.state.stateselected}
                          dataselected={this.state.dataselected}
                        />
                      );
                    }}
                    key={key}
                  />
                );
              }

              if (prop.redirect)
                return (
                  <Redirect from={prop.path} to={prop.pathTo} key={key} />
                );
              return (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key}
                />
              );

            })}
          </Switch>
          <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            title="assistant"
            subtitle="hello"
          />
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
