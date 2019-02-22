import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChartC1,
  dashboardAllProductsChartC2,
  dashboardAllProductsChartC3,
  dashboardAllProductsChartD1,
  dashboardAllProductsChartD2,
  dashboardAllProductsChartD3,
  dashboardAllProductsChartT1,
  dashboardAllProductsChartT2,
  dashboardAllProductsChartT3,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { tasks } from "variables/general.jsx";
import { getcurrentuser, askForPermissionToReceiveNotifications } from "../../firebase";

function GreetingC(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn==2014)
  return <Year20141 />;
 if (isLoggedIn==2015)
  return <Year20151 />;
 if (isLoggedIn==2016)
  return <Year20161 />;
 else
  return <Year20141 />
}

function GreetingD(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn==2014)
  return <Year20142 />;
 if (isLoggedIn==2015)
  return <Year20152 />;
 if (isLoggedIn==2016)
  return <Year20162 />;
 else
  return <Year20142 />
}
function GreetingT(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn==2014)
  return <Year20143 />;
 if (isLoggedIn==2015)
  return <Year20153 />;
 if (isLoggedIn==2016)
  return <Year20163 />;
 else
  return <Year20143 />
}
function Year20141() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartC1.data}
               options={dashboardAllProductsChartC1.options}
             />
           </div>
}
function Year20142() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartD1.data}
               options={dashboardAllProductsChartD1.options}
             />
           </div>
}
function Year20143() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartT1.data}
               options={dashboardAllProductsChartT1.options}
             />
           </div>
}
function Year20151() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartC2.data}
               options={dashboardAllProductsChartC2.options}
             />
           </div>
}
function Year20152() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartD2.data}
               options={dashboardAllProductsChartD2.options}
             />
           </div>
}
function Year20153() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartT2.data}
               options={dashboardAllProductsChartT2.options}
             />
           </div>
}
function Year20161() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartC3.data}
               options={dashboardAllProductsChartC3.options}
             />
           </div>
}
function Year20162() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartD3.data}
               options={dashboardAllProductsChartD3.options}
             />
           </div>
}
function Year20163() {
    return <div className="chart-area">
             <Line
               data={dashboardAllProductsChartT3.data}
               options={dashboardAllProductsChartT3.options}
             />
           </div>
}

class Dashboard extends React.Component {
constructor(props) {
    super(props);
    this.state = {
       year1:"2014",
       year2:"2014",
       year3:"2014"
    };
    this.handle1 = this.handle1.bind(this);
    this.handle2 = this.handle2.bind(this);
    this.handle3 = this.handle3.bind(this);
}
handle1(key){
  this.setState({
    year1: key,
  },() =>{
    console.log('state changed',this.state.name)
  })
}
handle2(key){
  this.setState({
    year2: key,
  },() =>{
    console.log('state changed',this.state.name)
  })
}
handle3(key){
  this.setState({
    year3: key,
  },() =>{
    console.log('state changed',this.state.name)
  })
}
  componentDidMount()
  {var res = getcurrentuser();
    res
      .then(user => {
        console.log(user);
        askForPermissionToReceiveNotifications();
      })
      .catch(() => {
        this.props.history.push("/login");
      });

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
                <CardCategory>Cases Of Cholera in India</CardCategory>
                <CardTitle tag="h4"></CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-simple btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={()=>this.handle1("2014")}>2014</DropdownItem>
                    <DropdownItem onClick={()=>this.handle1("2015")}>2015</DropdownItem>
                    <DropdownItem onClick={()=>this.handle1("2016")}>2016</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <GreetingC isLoggedIn={this.state.year1} />,
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
                  <CardCategory>Cases Of Diarrhea in India</CardCategory>
                  <CardTitle tag="h4"></CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={()=>this.handle2("2014")}>2014</DropdownItem>
                      <DropdownItem onClick={()=>this.handle2("2015")}>2015</DropdownItem>
                      <DropdownItem onClick={()=>this.handle2("2016")}>2016</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                <GreetingD isLoggedIn={this.state.year2} />,
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
                <CardCategory>Cases Of Typhoid in India</CardCategory>
                <CardTitle tag="h4"></CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-simple btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={()=>this.handle3("2014")}>2014</DropdownItem>
                    <DropdownItem onClick={()=>this.handle3("2015")}>2015</DropdownItem>
                    <DropdownItem onClick={()=>this.handle3("2016")}>2016</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <GreetingT isLoggedIn={this.state.year3} />,
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



            <Col xs={12} md={6}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Backend Development</CardCategory>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Tasks tasks={tasks} />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons loader_refresh spin",
                        t: "Updated 3 minutes ago"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <CardCategory>All Persons List</CardCategory>
                  <CardTitle tag="h4">Employees Stats</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
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

export default Dashboard;
