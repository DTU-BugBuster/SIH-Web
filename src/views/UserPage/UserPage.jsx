import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { FormInputs, CardAuthor, CardSocials } from "components";
import PanelHeader from '../../layouts/PanelHeader/PanelHeader'

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/default-avatar.png";
import { getfirebase } from "../../firebase";



class User extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      user:""
    }
  }
  componentDidMount()
  {
    var fire = getfirebase();
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        fire.database().ref('users/' + user.uid).once('value').then((snapshot) => {
          this.setState({
            user : snapshot.val()
          })
          console.log(snapshot.val())
        }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
  handlechange(e)
  {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                      onChange={this.handlechange}
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Email",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.email
                          }
                        },
                        {
                          label: "phone number",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.phone
                          }
                        },
                        {
                          label: "Username",
                          inputProps: {
                            type: "email",
                            defaultValue: this.state.user.username
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "First Name",
                          inputProps: {
                            type: "text",
                            placeholder: "First Name",
                            defaultValue: this.state.user.first_name
                          }
                        },
                        {
                          label: "Last Name",
                          inputProps: {
                            type: "text",
                            placeholder: "Last Name",
                            defaultValue: this.state.user.last_name
                          }
                        }
                      ]}
                    />
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="card-user">
                <div className="image">
                  <img style={{border:"black"}} src={userBackground} alt="..." />
                </div>
                <CardBody>
                  <CardAuthor
                    avatar={userAvatar}
                    avatarAlt="..."
                    title={this.state.user.username}
                    description="admin"
                  />
                </CardBody>
                <hr />
                <CardSocials
                  size="lg"
                  socials={[
                    {
                      icon: "fab fa-facebook-f",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-twitter",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-google-plus-g",
                      href: "https://plus.google.com/discover"
                    }
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default User;
