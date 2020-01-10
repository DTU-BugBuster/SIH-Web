import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";
import Autocomplete from "react-autocomplete";
import { ToastContainer, toast } from "react-toastify";

import dashboardRoutes from "routes/dashboard.jsx";
import { getfirebase } from "../../firebase";
import Axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      value: "",
      value1: "",
      role: "",
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "white"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "white"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
    var fire = getfirebase();
    fire.auth().onAuthStateChanged(user => {
      if (user) {

        fire
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then(snapshot => {
            this.setState({
              role: snapshot.val().role
            });
            console.log("role", snapshot.val().role);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.refs.sidebarToggle.classList.toggle("toggled");
    }
  }
  logout() {
    var fire = getfirebase();
    console.log("k");
    fire
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/login");
      })
      .catch(error => {
        console.log(error);
      });
  }
  sendnot() {
    toast.info("Push notification sent to all concerned");
    var firebase = getfirebase();
    firebase.database().ref('users').once('value').then((data) => {
      var users = data.val();
      users = Object.entries(users);
      console.log(users);
      for (var i = 0; i < users.length; i++) {
        Axios.post('https://fcm.googleapis.com/fcm/send', {
          "notification": {
            "title": "BugBuster",
            "body": "Water Borne disease on rise in your region!!",
            "click_action": "url",
            "icon": "picture"
          },
          "to": users[i][1].token
        }, {
            headers: {
              'Authorization': 'key=AAAAviPMTG4:APA91bHP1-h21hufRQxVzaOt3Bxsan1qwCrLykXKmIMkYkygAhaBWFHW5ZZT--xvroH6f32HMKmgW3s92k4uDz0-yHXgssXWMV9a_u4Qs_D9fEkxN8WkihozB6YBUhNv9ED-47bvkafc'
            }
          }).then(data => {
            console.log(data);
          }).catch((error) => {
            console.log(error);
          })
      }
    })
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "white"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
            (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <ToastContainer></ToastContainer>
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>

          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <form>
              <Autocomplete
                getItemValue={item => item}
                items={[
                  "Raagi",
                  "Rice",
                  "Wheat",
                  "Maize",
                  "All"
                ]}
                shouldItemRender={(item, value) =>
                  item.slice(0, value.length).toLowerCase() ==
                  value.toLowerCase()
                }
                renderItem={(item, isHighlighted) => {
                  return (
                    <div className="form-control" style={{ fontSize: "14px", borderRadius: "0", background: "rgba(255,255,255,1)", color: "black" }}>
                      {item}
                    </div>
                  );
                }}
                value={this.state.value1}
                onChange={e => this.setState({ value1: e.target.value })}
                onSelect={val => {
                  this.setState({ value1: val });
                  this.props.changestate1(val);
                }}
                wrapperProps={{
                  className: "no-border input-group",
                  style: {}
                }}
                inputProps={{
                  className: "form-control",
                  placeholder: "Select the crop to be bought",
                  style: { marginBottom: "5px", borderRadius: "30px" }
                }}
              />
            </form>
            <form>
              <Autocomplete
                getItemValue={item => item}
                items={[
                  "Andhra Pradesh",
                  "Arunachal Pradesh",
                  "Assam",
                  "Bihar",
                  "Chattisgarh",
                  "Goa",
                  "Gujarat",
                  "Haryana",
                  "Himachal Pradesh",
                  "Jammu And Kashmir",
                  "Jharkhand",
                  "Karnataka",
                  "Kerala",
                  "Madhya Pradesh",
                  "Maharashtra",
                  "Manipur",
                  "Meghalaya",
                  "Mizoram",
                  "Nagaland",
                  "Odisha",
                  "Punjab",
                  "Rajasthan",
                  "Sikkim",
                  "Tamil Nadu",
                  "Telangana",
                  "Tripura",
                  "Uttarakhand",
                  "Uttar Pradesh",
                  "West Bengal",
                  "A & N Islands",
                  "Chandigarh",
                  "D & N Haveli",
                  "Daman & Diu",
                  "Delhi",
                  "Lakshdweep",
                  "Puducherry"
                ]}
                shouldItemRender={(item, value) =>
                  item.slice(0, value.length).toLowerCase() ==
                  value.toLowerCase()
                }
                renderItem={(item, isHighlighted) => {
                  return (
                    <div className="form-control" style={{ fontSize: "14px", borderRadius: "0", background: "rgba(255,255,255,1)", color: "black" }}>
                      {item}
                    </div>
                  );
                }}
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={val => {
                  this.setState({ value: val });
                  this.props.changestate(val);
                }}
                wrapperProps={{
                  className: "no-border input-group",
                  style: {}
                }}
                inputProps={{
                  className: "form-control",
                  placeholder: "Select the state",
                  style: { marginBottom: "5px", borderRadius: "30px" }
                }}
              />
            </form>
            <Nav navbar>
              {this.state.role == "A" ? <NavItem >
                <a href="#" className="nav-link">
                  <i onClick={this.sendnot} className="now-ui-icons arrows-1_cloud-upload-94" />
                </a>
              </NavItem> : ""}

              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >

                <DropdownToggle caret nav>
                  <i className="now-ui-icons users_single-02" />
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/user-page" tag="a">
                    User Profile
                  </DropdownItem>
                  <DropdownItem onClick={() => this.logout()} tag="a">
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </Nav>

          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
