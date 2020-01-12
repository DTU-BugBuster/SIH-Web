import React, { Component } from "react";
import axios from "axios";
import {
  initializeFirebase,
  getcapcha,
  sendotp,
  confirmotp,
  register,
  checkIntialized
} from "../../firebase";
import { Alert } from "react-bootstrap";

const name = "";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      address: "",
      password: "",
      ok: false,
      show: false,
      getotp: false,
      role: "",
      otp: ""
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  componentDidMount() {
    getcapcha();
  }
  confirmsotp(code) {
    var res = confirmotp(code);
    var self = this;
    res.then(uid => {
      if (!this.state.ok) {
        this.props.history.push("/");
      } else {
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?address="${
              this.state.address
            }"&key=AIzaSyCtdX4pdjZuI2eMMRDb5QBlcr4e5l2D3_Q`
          )
          .then(data => {
            console.log(data);
            if(!data.data.results.length)
            {
              register(
                {
                  first_name: this.state.first_name,
                  last_name: this.state.last_name,
                  username: this.state.username,
                  email: this.state.email,
                  phone: "+91"+this.state.password,
                  addresslat: 27,
                  addresslng: 80,
                  role:this.state.role,
                },
                uid
              ).then(() => {
                console.log("dekh le");
                self.props.history.push("/login");
              });
            }
            else
            {
            register(
              {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                phone: "+91"+this.state.password,
                addresslat: data.data.results[0].geometry.location.lat,
                addresslng: data.data.results[0].geometry.location.lng,
                role:this.state.role,
              },
              uid
            ).then(() => {
              console.log("dekh le");
              self.props.history.push("/login");
            });
          }
          });
      }
    });
  }
  sign() {
    let temp = this.state.ok;
    getcapcha();
    this.setState({
      ok: !temp
    });
  }
  onsave() {
    if (!document.forms["registerform"].reportValidity()) {
      return;
    }

    var res = sendotp(this.state.password, true);
    res
      .then(() => {
        console.log("sahi");
        this.setState({
          getotp: true
        });
      })
      .catch(() => {
        getcapcha();
        this.setState({
          password: "",
          show: true
        });
      });
  }
  onlogin() {
    if (!document.forms["loginform"].reportValidity()) {
      return;
    }
    console.log(this.state.password);
    var res = sendotp(this.state.password, false);
    res
      .then(() => {
        console.log("sahi");
        this.setState({
          getotp: true
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          password: "",
          show: true
        });
      });
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  }

  render() {
    return (
      <div className="login container">
        {this.state.show ? (
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <p>this phone number doesnt exist</p>
          </Alert>
        ) : (
          ""
        )}
        {!this.state.getotp ? (
          this.state.ok ? (
            <div className="form" id="register-form">
              <div className="login-head " style={{ color: "white" }}>
                Register!
              </div>
              <form name="registerform">
                <div className="form-groups">
                  <input
                    style={{ padding: "10px 10px 10px 10px" }}
                    name="first_name"
                    type="text"
                    className="form-controls"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-groups">
                  <input
                    style={{ padding: "10px 10px 10px 10px" }}
                    name="last_name"
                    type="text"
                    className="form-controls"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-groupss">
                  <input
                    style={{ padding: "10px 10px 10px 10px",color:"white" }}
                    name="username"
                    type="text"
                    className="form-controls"
                    placeholder="Type your Username"
                    value={this.state.username}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-groups">
                  <input
                    style={{ padding: "10px 10px 10px 10px" }}
                    name="email"
                    type="email"
                    className="form-controls"
                    placeholder="Enter your Email ID"
                    value={this.state.email}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-groups">
                  <input
                    style={{ padding: "10px 10px 10px 10px" }}
                    name="address"
                    type="text"
                    className="form-controls"
                    placeholder="Enter your address"
                    value={this.state.address}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-groups">
                  <input
                    style={{ padding: "10px 10px 10px 10px" }}
                    name="password"
                    type="text"
                    className="form-controls"
                    placeholder="Enter the Phone Number"
                    value={this.state.password}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-groups">
                  <select
                    style={{ padding: "10px 10px 10px 10px",color:"white" }}
                    name="role"
                    type="text"
                    className="form-controls"
                    placeholder="Enter the Role"
                    value={this.state.role}
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                    required
                  >
                    <option style={{color: "black"}} value="">Select your Role</option>
                    <option  style={{color: "black"}} value="HA">Hospital admistrative</option>
                    <option   style={{color: "black"}} value="A">Admin</option>
                  </select>
                </div>
                <div style={{ padding: "30px" }} id="capcha" />
                <button
                  type="button"
                  id="signin"
                  onClick={this.onsave.bind(this)}
                  className="ok btn btn-primary"
                >
                  Register
                </button>{" "}
                <br />
                <br />
                <div
                  class="fb-login-button"
                  data-max-rows="1"
                  data-size="large"
                  data-button-type="continue_with"
                  data-show-faces="false"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                />
                <a href="#" id="signin" onClick={this.sign.bind(this)}>
                  Already have an account? Signin!
                </a>
                <br />
                <br />
              </form>
            </div>
          ) : (
            <div className="form" id="login-form">
              <div className="login-head" style={{ color: "white" }}>
                Login!
              </div>

              <form name="loginform">
                <div className="form-groups">
                  <input
                    style={{ padding: "10px 10px 10px 10px" }}
                    name="password"
                    type="text"
                    className="form-controls"
                    id="exampleInputPassword"
                    placeholder="Phone Number"
                    value={this.state.password}
                    required
                    onChange={e => this.onchange(e)}
                    autoComplete="off"
                  />
                </div>
                <div style={{ padding: "30px" }} id="capcha" />
                <button
                  type="button"
                  id="signin1"
                  onClick={this.onlogin.bind(this)}
                  className="ok btn btn-primary"
                >
                  Sign In
                </button>{" "}
                <br />
                <br />
                <a href="#" id="signin" onClick={this.sign.bind(this)}>
                  Dont have an account? Sign up!
                </a>
              </form>
            </div>
          )
        ) : (
          <div className="form" id="login-form">
            <form name="loginform">
              <div className="form-groups">
                <input
                  style={{ padding: "10px 10px 10px 10px" }}
                  name="otp"
                  type="text"
                  className="form-controls"
                  id="exampleInputPassword"
                  placeholder="Enter the OTP"
                  value={this.state.otp}
                  required
                  onChange={e => this.onchange(e)}
                  autoComplete="off"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  this.confirmsotp(this.state.otp);
                }}
                className="ok btn btn-primary"
              >
                Sign In
              </button>{" "}
              <br />
              <br />
              <a
                href="#"
                id="signin"
                onClick={() => {
                  this.setState({ getotp: false, password: "" });
                }}
              >
                Didn't receive otp? Enter the number again
              </a>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
