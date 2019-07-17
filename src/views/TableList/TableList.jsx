import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Input,
  FormGroup,
  Label
} from "reactstrap";

import PanelHeader from "../../layouts/PanelHeader/PanelHeader"

import { thead, tbody } from "variables/general";
import { getfirebase } from "../../firebase";

class RegularTables extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        issues: []
      };
    }
  }
  componentDidMount() {
    var firebase = getfirebase();
    firebase
      .database()
      .ref("Issues")
      .on("value", snapshot => {
        this.setState({
          issues: snapshot.val()
        });
        console.log(snapshot.val());
      });
  }
  actiontaken(key, value) {
    var firebase = getfirebase();
    console.log(key);
    var update = {};
    firebase
      .database()
      .ref("Issues/" + key)
      .update({
        ActionsTaken: value
      });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Issues reported</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.issues.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.DateOfComplain}</td>
                            <td>{prop.Name}</td>
                            <td>{prop.RegularFluctuations}</td>
                            <td>{prop.ReportedAuthorities}</td>
                            <td>{prop.ChangeTaste}</td>
                            <td>{prop.WaterTaste}</td>
                            <td>
                              {prop.ActionsTaken == "No" ? (
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      onChange={() =>
                                        this.actiontaken(key, "Yes")
                                      }
                                    />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              ) : (
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      checked={true}
                                      onChange={() =>
                                        this.actiontaken(key, "No")
                                      }
                                    />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegularTables;
