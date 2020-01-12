import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";
import { getcurrentuser, getfirebase } from "../../firebase";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    }
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    getcurrentuser().then((snapshot) => {
      console.log("p", snapshot);
      this.setState({
        user: snapshot.val()
      })
    }).catch((error) => {
      console.log(error);
    })

  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }

  }
  render() {
    return (
      <div className="sidebar" data-color="blue">
        <div className="logo">

          <div
            href="https://www.creative-tim.com"
            className="simple-text logo-normal"
            style={{ marginLeft: "30px" }}
          >
            {this.state.user ? "Hello, " + this.state.user.first_name + " " + this.state.user.last_name : ""}
          </div>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.name == "User Profile") return null;
              if (prop.name == "Report Case" && this.state.user.role == "A") {
                return null;
              }
              if (prop.name == "Grievances" && this.state.user.role == "HA") {
                return null;
              }
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={"now-ui-icons " + prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
