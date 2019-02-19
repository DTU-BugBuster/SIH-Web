import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps
import { Line, Bar } from "react-chartjs-2";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
  dashboard24HoursPerformanceChartKerala,
  dashboard24HoursPerformanceChartBihar,
  dashboard24HoursPerformanceChartChattisgarh,
  dashboard24HoursPerformanceChartPunjab,
  dashboard24HoursPerformanceChartTripura,
  dashboard24HoursPerformanceChartMaharastra,
  dashboard24HoursPerformanceChartRajasthan,
  dashboard24HoursPerformanceChartManipur,
  dashboard24HoursPerformanceChartAssam,
  dashboard24HoursPerformanceChartWB,
  dashboard24HoursPerformanceChartOrrisa,
  dashboard24HoursPerformanceChartUP,
  dashboard24HoursPerformanceChartHP,
  dashboard24HoursPerformanceChartMP,
  dashboard24HoursPerformanceChartGujarat,
  dashboard24HoursPerformanceChartTN,
  dashboard24HoursPerformanceChartMizoram
} from "../../variables/charts.jsx";

import { PanelHeader } from "components";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";

const include = [1287];

function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn==1312)
  return <Orissa />;
if (isLoggedIn==1293)
return <Chattisgarh />;
if (isLoggedIn==1306)
return <MP />;
if (isLoggedIn==1321)
return <WB />;
if (isLoggedIn==1291)
return <bihar />;
if (isLoggedIn==1319)
return <UP />;
if (isLoggedIn==1315)
return <rajasthan />;
if (isLoggedIn==1298)
return <gujarat />;
if (isLoggedIn==1307)
return <maharastra />;
if (isLoggedIn==1288)
return <AP />;
if (isLoggedIn==1317)
return <TN />;
if (isLoggedIn==1304)
return <Kerala />;
if (isLoggedIn==1290)
return <Assam />;
if (isLoggedIn==1308)
return <Manipur />;
if (isLoggedIn==1310)
return <Mizoram />;
if (isLoggedIn==1318)
return <Tripura />;
if (isLoggedIn==1300)
return <HP />;
if (isLoggedIn==1314)
return <punjab />;

return <Orissa />
}
class Orissa extends React.Component{
render(){
return(
<div>
      <p>ORISSA</p>
      <Bar
       data={dashboard24HoursPerformanceChartOrrisa.data}
       options={dashboard24HoursPerformanceChartOrrisa.options}
      />;
    </div>
)
}
}

function Chattisgarh() {
    return <div>
           <p>Chattisgarh</p>
           <Bar
            data={dashboard24HoursPerformanceChartChattisgarh.data}
            options={dashboard24HoursPerformanceChartChattisgarh.options}
           />;
         </div>
}
function MP() {
    return <div>
           <p> MADHYA PRADESH</p>
           <Bar
            data={dashboard24HoursPerformanceChartMP.data}
            options={dashboard24HoursPerformanceChartMP.options}
           />;
         </div>
}
function WB() {
    return <div>
           <p>WEST BENGAL</p>
           <Bar
            data={dashboard24HoursPerformanceChartWB.data}
            options={dashboard24HoursPerformanceChartWB.options}
           />;
         </div>
}
function bihar() {
    return <div>
           <p>BIHAR</p>
           <Bar
            data={dashboard24HoursPerformanceChartBihar.data}
            options={dashboard24HoursPerformanceChartBihar.options}
           />;
         </div>
}
function UP() {
    return <div>
           <p> UTTAR PRADESH</p>
           <Bar
            data={dashboard24HoursPerformanceChartUP.data}
            options={dashboard24HoursPerformanceChartUP.options}
           />;
         </div>
}
function rajasthan() {
    return <div>
           <p>RAJASTHAN</p>
           <Bar
            data={dashboard24HoursPerformanceChartRajasthan.data}
            options={dashboard24HoursPerformanceChartRajasthan.options}
           />;
         </div>
}
function gujarat() {
    return <div>
           <p>GUJARAT</p>
           <Bar
            data={dashboard24HoursPerformanceChartGujarat.data}
            options={dashboard24HoursPerformanceChartGujarat.options}
           />;
         </div>
}
function maharastra() {
    return <div>
           <p>MAHARASTRA</p>
           <Bar
            data={dashboard24HoursPerformanceChartMaharastra.data}
            options={dashboard24HoursPerformanceChartMaharastra.options}
           />;
         </div>
}
function AP() {
    return <div>
           <p> ANDHRA PRADESH</p>
           <Bar
            data={dashboard24HoursPerformanceChart.data}
            options={dashboard24HoursPerformanceChart.options}
           />;
         </div>
}
function TN() {
    return <div>
           <p>TAMIL NADU</p>
           <Bar
            data={dashboard24HoursPerformanceChartTN.data}
            options={dashboard24HoursPerformanceChartTN.options}
           />;
         </div>
}
function Kerala() {
    return <div>
           <p>KERALA</p>
           <Bar
            data={dashboard24HoursPerformanceChartKerala.data}
            options={dashboard24HoursPerformanceChartKerala.options}
           />;
         </div>
}
function Assam() {
    return <div>
           <p> ASSAM</p>
           <Bar
            data={dashboard24HoursPerformanceChartAssam.data}
            options={dashboard24HoursPerformanceChartAssam.options}
           />;
         </div>
}
function Manipur() {
    return <div>
           <p>MANIPUR</p>
           <Bar
            data={dashboard24HoursPerformanceChartManipur.data}
            options={dashboard24HoursPerformanceChartManipur.options}
           />;
         </div>
}
function Mizoram() {
    return <div>
           <p>MIZORAM</p>
           <Bar
            data={dashboard24HoursPerformanceChartMizoram.data}
            options={dashboard24HoursPerformanceChartMizoram.options}
           />;
         </div>
}
function Tripura() {
    return <div>
           <p>TRIPURA</p>
           <Bar
            data={dashboard24HoursPerformanceChartTripura.data}
            options={dashboard24HoursPerformanceChartTripura.options}
           />;
         </div>
}
function HP() {
    return <div>
           <p> HIMACHAL PRADESH</p>
           <Bar
            data={dashboard24HoursPerformanceChartHP.data}
            options={dashboard24HoursPerformanceChartHP.options}
           />;
         </div>
}
function punjab() {
    return <div>
           <p>PUNJAB</p>
           <Bar
            data={dashboard24HoursPerformanceChartPunjab.data}
            options={dashboard24HoursPerformanceChartPunjab.options}
           />;
         </div>
}

class FullScreenMap extends React.Component {
constructor(props) {
    super(props);
    this.state = {
       name: "0",
    };
    this.handleChange = this.handleChange.bind(this);
}
  handleChange(key){
  console.log("clicked",key)
    this.setState({
      name: key
    },() =>{
    console.log('state changed',this.state.name)
    })
}
render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <Row>
                    <Col xs={7}>
                  <ComposableMap
                    projectionConfig={{ scale: 1400 }}
                    width={600}
                    height={600}
                    style={{
                      width: "auto",
                      height: "100%"
                    }}
                  >
                    <ZoomableGroup center={[82, 22]} disablePanning>
                      <Geographies geography="indiastates.json" disableOptimization={this.state.disableOptimization} >
                        {(geographies, projection) =>{
                          return geographies.map((geography, i) => {
                            //console.log(geography,projection);
                              return <Geography
                                key={i}

                                geography={geography}
                                projection={projection}

                                onMouseOver={()=>this.handleChange(geography.properties.ID_1)}
                                style={{
                                  default: {
                                    fill: "#ECEFF1",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.75,
                                    outline: "none"
                                  },
                                  hover: {
                                    fill: "#CFD8DC",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.75,
                                    outline: "none"
                                  },
                                  pressed: {
                                    fill: "#FF5722",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.75,
                                    outline: "none"
                                  }
                                }}
                              />
                          })
                        }
                        }
                      </Geographies>

                    </ZoomableGroup>

                  </ComposableMap>
                  </Col>
                  <Col xs={5}>
                  <div className="chart-area" style={{marginTop:"300px"}}>
                  <Greeting isLoggedIn={this.state.name} />,
                  
                  </div></Col>
                  </Row>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default FullScreenMap;
