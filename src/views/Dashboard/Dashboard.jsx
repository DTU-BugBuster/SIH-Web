import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import {
  dashboardPanelChart,
  getChartCholera,
  getChartD,
  getChartT
} from "variables/charts.jsx";



class Dashboards extends React.Component {
constructor(props) {
    super(props);
    this.state={
      stateselected : ""
    }
}
componentWillReceiveProps(nextProp)
{
  if(nextProp.state!=this.state.stateselected)
  {
    this.setState({
      stateselected:nextProp.state
    })
  }
  console.log("g",nextProp)
}
  
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <CardCategory>Cases Of Cholera in {this.state.stateselected || "Uttar Pradesh"}</CardCategory>
                <CardTitle tag="h4"></CardTitle>
              </CardHeader>
              <CardBody>
                <Line data={getChartCholera(this.state.stateselected || "Uttar Pradesh").data} options={getChartCholera(this.state.stateselected || "Uttar Pradesh").options}/>
              </CardBody>
              <CardFooter>
                <Stats>
                  {[
                    {
                      i: "now-ui-icons arrows-1_refresh-69",
                      t: "Just Updated"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Cases Of Diarrhea in {this.state.stateselected || "Uttar Pradesh"}</CardCategory>
                  <CardTitle tag="h4"></CardTitle>
                </CardHeader>
                <CardBody>
                <Line data={getChartD(this.props.state || "Uttar Pradesh").data} options={getChartD(this.props.state || "Uttar Pradesh").options}/>

                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>


          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <CardCategory>Cases Of Typhoid in {this.state.stateselected || "Uttar Pradesh"}</CardCategory>
                <CardTitle tag="h4"></CardTitle>
              </CardHeader>
              <CardBody>
              <Line data={getChartT(this.props.state || "Uttar Pradesh").data} options={getChartT(this.props.state|| "Uttar Pradesh").options}/>
              </CardBody>
              <CardFooter>
                <Stats>
                  {[
                    {
                      i: "now-ui-icons arrows-1_refresh-69",
                      t: "Just Updated"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboards;
