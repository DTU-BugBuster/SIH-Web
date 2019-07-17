import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  Button
} from "reactstrap";

import PanelHeader from "../../layouts/PanelHeader/PanelHeader"
import { getfirebase } from "../../firebase";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      d_name: "",
      h_name: "",
      address: "",
      age: "",
      gender: "",
      name: "",
      water_borne: "",
      pincode: "",
      state: ""
    };
    this.handlechange = this.handlechange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handlechange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  submit() {
    console.log("dds");
    Axios.get(
      `http://apis.mapmyindia.com/advancedmaps/v1/dmywbcu8v3poae8cwcqhygwbpmvtrdr4/geo_code?addr=${this.state.address}`
    ).then(data => {
      console.log(data);
      if (data.data.results[0] == undefined) {
        var firebase = getfirebase();
        firebase
          .database()
          .ref("cases")
          .push({
            disease: this.state.d_name,
            h_name: this.state.h_name,
            addresslng: (80.9462).toString(),
            addresslat: (26.8467).toString(),
            Date: Date.now(),
            age: parseInt(this.state.age),
            gender: this.state.gender,
            name: this.state.name,
            pincode: this.state.pincode,
            state: this.state.state,
            water_borne: this.state.water_borne
          })
          .then(() => {
            this.setState({
              d_name: "",
              h_name: "",
              address: "",
              age: "",
              gender: "",
              name: "",
              water_borne: "",
              pincode: "",
              state: ""
            });
            toast.info("Case has been reported!");
          })
          .catch(error => {
            console.log(error);
          });
      }
      else {
        var firebase = getfirebase();
        firebase
          .database()
          .ref("cases")
          .push({
            disease: this.state.d_name,
            h_name: this.state.h_name,
            addresslat: data.data.results[0].lat.toString(),
            addresslng: data.data.results[0].lng.toString(),
            Date: Date.now(),
            age: parseInt(this.state.age),
            gender: this.state.gender,
            name: this.state.name,
            pincode: this.state.pincode,
            state: this.state.state,
            water_borne: this.state.water_borne
          })
          .then(() => {
            this.setState({
              d_name: "",
              h_name: "",
              address: "",
              age: "",
              gender: "",
              name: "",
              water_borne: "",
              pincode: "",
              state: ""
            });
            toast.info("Case has been reported!");
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12} xs={24}>
              <Card>
                <CardHeader>
                  <h5 className="title">Report Cases</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <Row>
                      <Col md={6} pr={1}>
                        <Label>Disease Name:</Label>
                        <br />
                        <Input
                          id="d_name"
                          value={this.state.d_name}
                          onChange={this.handlechange}
                        />
                      </Col>
                      <Col md={6} pr={1}>
                        <Label>Hospital Name:</Label>
                        <br />
                        <Input
                          id="h_name"
                          value={this.state.h_name}
                          onChange={this.handlechange}
                        />
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                      <Col md={6} pr={1}>
                        <Label>Age:</Label>
                        <br />
                        <Input
                          id="age"
                          value={this.state.age}
                          onChange={this.handlechange}
                        />
                      </Col>
                      <Col md={6} pr={1}>
                        <Label>Gender:</Label>
                        <br />
                        <Input
                          id="gender"
                          value={this.state.gender}
                          onChange={this.handlechange}
                        />
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                      <Col md={6} pr={1}>
                        <Label>State:</Label>
                        <br />
                        <Input
                          id="state"
                          value={this.state.state}
                          onChange={this.handlechange}
                        />
                      </Col>
                      <Col md={6} pr={1}>
                        <Label>name:</Label>
                        <br />
                        <Input
                          id="name"
                          value={this.state.name}
                          onChange={this.handlechange}
                        />
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                      <Col md={6} pr={1}>
                        <Label>pincode:</Label>
                        <br />
                        <Input
                          id="pincode"
                          value={this.state.pincode}
                          onChange={this.handlechange}
                        />
                      </Col>
                      <Col md={6} pr={1}>
                        <Label>if water borne:</Label>
                        <br />
                        <Input
                          id="water_borne"
                          value={this.state.water_borne}
                          onChange={this.handlechange}
                        />
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                      <Col md={12} pr={1}>
                        <Label>Address of person:</Label>
                        <br />
                        <Input
                          id="address"
                          value={this.state.address}
                          onChange={this.handlechange}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Button color="primary" onClick={this.submit}>
                      Submit case
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default User;
