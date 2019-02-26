import React from "react";
import { Card, CardHeader, CardBody, Row, Col,Input,Label,Button } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/default-avatar.png";
import { getfirebase } from "../../firebase";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class User extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      d_name : "",
      h_name : "",
      address : "",
    }
    this.handlechange = this.handlechange.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  handlechange(e)
  {
    console.log(e.target.value)
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  submit()
  {
    console.log("dds");
    Axios .get(
            `https://maps.googleapis.com/maps/api/geocode/json?address="${this.state.address}"&key=AIzaSyB7cYMRfxxQv8LrcCNTxcy3byqMjlW_IE4`
          )
          .then(data => {
            console.log(data);
            var firebase = getfirebase();
            firebase.database().ref('cases').push({
              'd_name' : this.state.d_name,
              'h_name' : this.state.h_name,
              'addresslat' : data.data.results[0].geometry.location.lat,
              'addresslng' : data.data.results[0].geometry.location.lng,
            }).then(() => {
              this.setState({
                d_name : "",
                h_name : "",
                address : "",

              })
              toast.info("Case has been reported!");
            }).catch((error)=>{
              console.log(error);
            });
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
                      <Label >Disease Name:</Label>
                      <br></br>
                      <Input id="d_name" value={this.state.d_name} onChange={this.handlechange}/>
                      </Col>
                      <Col md={6} pr={1}>
                      <Label >Hospital Name:</Label>
                      <br></br>
                      <Input id="h_name" value={this.state.h_name} onChange={this.handlechange}/>
                      </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                    <Col md={12} pr={1}>
                      <Label >Address of person:</Label>
                      <br></br>
                      <Input id="address" value={this.state.address} onChange={this.handlechange}/>
                      </Col>
                    </Row>
                    <br></br>
                    <Button color="primary" onClick={this.submit}>Submit case</Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
}

export default User;
