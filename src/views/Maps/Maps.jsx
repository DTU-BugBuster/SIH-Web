import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps
import { Line, Bar } from "react-chartjs-2";
import { Motion, spring } from "react-motion";

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

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

const cities = [
<<<<<<< HEAD
  { name: "Rajasthan", coordinates: [74.2179,27.0238] },
  { name: "Kerala", coordinates: [76.2711,10.8505] },
  { name: "Chattisgarh", coordinates: [81.8661,21.2787] },
  { name: "Andhra Pradesh", coordinates: [80.0193,17.1124] },
  { name: "Madhya Pradesh", coordinates: [78.6569,22.9734] },
  { name: "Gujarat", coordinates: [71.1924,22.2587] },
  { name: "Maharastra", coordinates: [75.7139,19.7515] },
  { name: "Uttar Pradesh", coordinates: [80.9462,26.8467] },
  { name: "Tamil Nadu", coordinates: [78.656891,11.127123] },
  { name: "Orissa", coordinates: [84.803467,20.940920] },
  { name: "West Bengal", coordinates: [87.747803,22.978624] },
  { name: "Assam", coordinates: [92.537842,26.244156] },
  { name: "Himachal Pradesh", coordinates: [77.571167,32.084206] },
  { name: "Tripura", coordinates: [91.746826,23.745127] },
  { name: "Mizoram", coordinates: [92.9376,23.1645] },
  { name: "Manipur", coordinates: [93.9063,24.6637] },
  { name: "Punjab", coordinates: [75.3412,31.1471] },
  { name: "Bihar", coordinates: [85.3131,25.0961] },
]
=======
  { name: "Rajasthan", coordinates: [74.2179, 27.0238] },
  { name: "Kerala", coordinates: [76.2711, 10.8505] },
  { name: "Chattisgarh", coordinates: [81.8661, 21.2787] },
  { name: "Andhra Pradesh", coordinates: [79.0193, 18.1124] },
  { name: "Madhya Pradesh", coordinates: [78.6569, 22.9734] },
  { name: "Gujarat", coordinates: [71.1924, 22.2587] },
  { name: "Maharastra", coordinates: [75.7139, 19.7515] },
  { name: "Uttar Pradesh", coordinates: [80.9462, 26.8467] },
  { name: "Tamil Nadu", coordinates: [78.656891, 11.127123] },
  { name: "Orissa", coordinates: [84.803467, 20.94092] },
  { name: "West Bengal", coordinates: [87.747803, 22.978624] },
  { name: "Assam", coordinates: [92.537842, 26.244156] },
  { name: "Himachal Pradesh", coordinates: [77.571167, 32.084206] },
  { name: "Tripura", coordinates: [91.746826, 23.745127] },
  { name: "Mizoram", coordinates: [92.9376, 23.1645] },
  { name: "Manipur", coordinates: [93.9063, 24.6637] },
  { name: "Punjab", coordinates: [75.3412, 31.1471] },
  { name: "Bihar", coordinates: [85.3131, 25.0961] }
];
>>>>>>> b29f7f018ac227fe122b9cac97e45bf73b99d7d7

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn == 1312) return <Orissa />;
  if (isLoggedIn == 1293) return <Chattisgarh />;
  if (isLoggedIn == 1306) return <MP />;
  if (isLoggedIn == 1321) return <WB />;
  if (isLoggedIn == 1291) return <Bihar />;
  if (isLoggedIn == 1319) return <UP />;
  if (isLoggedIn == 1315) return <Rajasthan />;
  if (isLoggedIn == 1298) return <Gujarat />;
  if (isLoggedIn == 1307) return <Maharastra />;
  if (isLoggedIn == 1288) return <AP />;
  if (isLoggedIn == 1317) return <TN />;
  if (isLoggedIn == 1304) return <Kerala />;
  if (isLoggedIn == 1290) return <Assam />;
  if (isLoggedIn == 1308) return <Manipur />;
  if (isLoggedIn == 1310) return <Mizoram />;
  if (isLoggedIn == 1318) return <Tripura />;
  if (isLoggedIn == 1300) return <HP />;
  if (isLoggedIn == 1314) return <Punjab />;
  else return <h1> </h1>;
}
class Orissa extends React.Component {
  render() {
    return (
      <div>
        <p>ORISSA</p>
        <Bar
          data={dashboard24HoursPerformanceChartOrrisa.data}
          options={dashboard24HoursPerformanceChartOrrisa.options}
        />
        ;
      </div>
    );
  }
}

function Chattisgarh() {
  return (
    <div>
      <p>Chattisgarh</p>
      <Bar
        data={dashboard24HoursPerformanceChartChattisgarh.data}
        options={dashboard24HoursPerformanceChartChattisgarh.options}
      />
      ;
    </div>
  );
}
function MP() {
  return (
    <div>
      <p> MADHYA PRADESH</p>
      <Bar
        data={dashboard24HoursPerformanceChartMP.data}
        options={dashboard24HoursPerformanceChartMP.options}
      />
      ;
    </div>
  );
}
function WB() {
  return (
    <div>
      <p>WEST BENGAL</p>
      <Bar
        data={dashboard24HoursPerformanceChartWB.data}
        options={dashboard24HoursPerformanceChartWB.options}
      />
      ;
    </div>
  );
}
function Bihar() {
  console.log("entered bihar");
  return (
    <div>
      <p>BIHAR</p>
      <Bar
        data={dashboard24HoursPerformanceChartBihar.data}
        options={dashboard24HoursPerformanceChartBihar.options}
      />
      ;
    </div>
  );
}
function UP() {
  return (
    <div>
      <p> UTTAR PRADESH</p>
      <Bar
        data={dashboard24HoursPerformanceChartUP.data}
        options={dashboard24HoursPerformanceChartUP.options}
      />
      ;
    </div>
  );
}
function Rajasthan() {
  return (
    <div>
      <p>RAJASTHAN</p>
      <Bar
        data={dashboard24HoursPerformanceChartRajasthan.data}
        options={dashboard24HoursPerformanceChartRajasthan.options}
      />
      ;
    </div>
  );
}
function Gujarat() {
  return (
    <div>
      <p>GUJARAT</p>
      <Bar
        data={dashboard24HoursPerformanceChartGujarat.data}
        options={dashboard24HoursPerformanceChartGujarat.options}
      />
      ;
    </div>
  );
}
function Maharastra() {
  return (
    <div>
      <p>MAHARASTRA</p>
      <Bar
        data={dashboard24HoursPerformanceChartMaharastra.data}
        options={dashboard24HoursPerformanceChartMaharastra.options}
      />
      ;
    </div>
  );
}
function AP() {
  return (
    <div>
      <p> ANDHRA PRADESH</p>
      <Bar
        data={dashboard24HoursPerformanceChart.data}
        options={dashboard24HoursPerformanceChart.options}
      />
      ;
    </div>
  );
}
function TN() {
  return (
    <div>
      <p>TAMIL NADU</p>
      <Bar
        data={dashboard24HoursPerformanceChartTN.data}
        options={dashboard24HoursPerformanceChartTN.options}
      />
      ;
    </div>
  );
}
function Kerala() {
  return (
    <div>
      <p>KERALA</p>
      <Bar
        data={dashboard24HoursPerformanceChartKerala.data}
        options={dashboard24HoursPerformanceChartKerala.options}
      />
      ;
    </div>
  );
}
function Assam() {
  return (
    <div>
      <p> ASSAM</p>
      <Bar
        data={dashboard24HoursPerformanceChartAssam.data}
        options={dashboard24HoursPerformanceChartAssam.options}
      />
      ;
    </div>
  );
}
function Manipur() {
  return (
    <div>
      <p>MANIPUR</p>
      <Bar
        data={dashboard24HoursPerformanceChartManipur.data}
        options={dashboard24HoursPerformanceChartManipur.options}
      />
      ;
    </div>
  );
}
function Mizoram() {
  return (
    <div>
      <p>MIZORAM</p>
      <Bar
        data={dashboard24HoursPerformanceChartMizoram.data}
        options={dashboard24HoursPerformanceChartMizoram.options}
      />
      ;
    </div>
  );
}
function Tripura() {
  return (
    <div>
      <p>TRIPURA</p>
      <Bar
        data={dashboard24HoursPerformanceChartTripura.data}
        options={dashboard24HoursPerformanceChartTripura.options}
      />
      ;
    </div>
  );
}
function HP() {
  return (
    <div>
      <p> HIMACHAL PRADESH</p>
      <Bar
        data={dashboard24HoursPerformanceChartHP.data}
        options={dashboard24HoursPerformanceChartHP.options}
      />
      ;
    </div>
  );
}
function Punjab() {
  return (
    <div>
      <p>PUNJAB</p>
      <Bar
        data={dashboard24HoursPerformanceChartPunjab.data}
        options={dashboard24HoursPerformanceChartPunjab.options}
      />
      ;
    </div>
  );
}

class FullScreenMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
       name: "0",
       center: [100,20],
       zoom: 5,
       colour:"#FFFFFF",
       h:6,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
}
  handleChange(key){
//  console.log("clicked",key)
    this.setState({
      name: key,
      //colour:"#FFFFFF"
    },() =>{
  //  console.log('state changed',this.state.name)
    })
}
handleCityClick(city) {
console.log(this.state.colour)
  this.setState({
    zoom: 35,
    center: city.coordinates,
    colour:"#000000",
    h:12,
  },() => {
  console.log('state changed',this.state.h)
  })
}
handleReset() {
  this.setState({
    center: [100,20],
    zoom: 5,
    colour:"#FFFFFF"
  })
}
render() {
=======
      name: "0",
      center: [100, 20],
      zoom: 5,
      state: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(key) {
    console.log("clicked", key);
    this.setState(
      {
        name: key
      },
      () => {
        console.log("state changed", this.state.name);
      }
    );
  }
  handleCityClick(city) {
    this.setState({
      zoom: 20,
      center: city.coordinates,
      state: city.name
    });
  }
  handleReset() {
    this.setState({
      center: [100, 20],
      zoom: 5
    });
  }
  render() {
>>>>>>> b29f7f018ac227fe122b9cac97e45bf73b99d7d7
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
<<<<<<< HEAD
                <CardHeader>India's Water Quality</CardHeader>
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
                    <ZoomableGroup center={[82, 22]}>
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
                      <Markers>
                        {cities.map((city, i) => (
                          <Marker
                            key={i}
                            marker={city}
                            onClick={this.handleCityClick}
                            >
                            <circle
                              cx={0}
                              cy={0}
                              r={6}
                              fill="#FF5722"
                              stroke="#DF3702"
                            />
                          </Marker>
                        ))}
                      </Markers>
                    </ZoomableGroup>

                  </ComposableMap>
                  </Col>

                  <Col xs={5}>
                  <Col>
                  <Row xs={5}>
                  <div style={wrapperStyles}>

                    <Motion
                      defaultStyle={{
                        zoom: 1,
                        x: 100,
                        y: 20,
                        color:"FFFFFF",
                      }}
                      style={{
                        zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
                        x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
                        y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
                        color: spring(this.state.colour, {stiffness: 210, damping: 20}),
                      }}
                      >
                      {({zoom,x,y,color}) => (
                        <ComposableMap
                          projectionConfig={{ scale: 205 }}
                          width={980}
                          height={551}
                          style={{
                            width: "100%",
                            height: "auto",
                            fill:color,
                          }}
                          >
                          <ZoomableGroup center={[x,y]} zoom={zoom} styles={color}>
                            <Geographies geography="indiastates.json" disableOptimization={this.state.disableOptimization}>
                              {(geographies, projection) =>
                                geographies.map((geography, i) => geography.id !== "010" && (
=======
                <CardHeader>Water Quality Map of India</CardHeader>
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
                          <Geographies
                            geography="indiastates.json"
                            disableOptimization={this.state.disableOptimization}
                          >
                            {(geographies, projection) => {
                              return geographies.map((geography, i) => {
                                //console.log(geography,projection);
                                return (
>>>>>>> b29f7f018ac227fe122b9cac97e45bf73b99d7d7
                                  <Geography
                                    key={i}
                                    geography={geography}
                                    projection={projection}
                                    onMouseOver={() =>
                                      this.handleChange(
                                        geography.properties.ID_1
                                      )
                                    }
                                    style={{

                                      default: {
                                        fill: "#FFFFFF",
                                        stroke: "#607D8B",
<<<<<<< HEAD
                                        strokeWidth: 0.15,
                                        outline: "true",
=======
                                        strokeWidth: 0.75,
                                        outline: "none"
>>>>>>> b29f7f018ac227fe122b9cac97e45bf73b99d7d7
                                      },
                                      hover: {
                                        fill: "#FFFFFF",
                                        stroke: "#607D8B",
<<<<<<< HEAD
                                        strokeWidth: 0.15,
                                        outline: "",
=======
                                        strokeWidth: 0.75,
                                        outline: "none"
>>>>>>> b29f7f018ac227fe122b9cac97e45bf73b99d7d7
                                      },
                                      pressed: {
                                        fill: "#FFFFFF",
                                        stroke: "#607D8B",
<<<<<<< HEAD
                                        strokeWidth: 0.15,
                                        outline: "",
                                      },
                                    }}
                                  />

                              ))}
                            </Geographies>
                            <Markers>
                              {cities.map((city, i) => (
                                <Marker
                                  key={i}
                                  marker={city}
                                  //onClick={this.handleCityClick}
                                  >
                                  <circle
                                    cx={0}
                                    cy={0}
                                    r={this.state.h}
                                    fill="#FF5722"
                                    stroke="#DF3702"
                                  />
                                  <text
                                    textAnchor="middle"
                                    y={25}
                                    style={{
                                     fontFamily: "Roboto, sans-serif",
                                     fill: "#607D8B",
                                     zoom:"10"
                                    }}
                                   >
                                  {city.name}
                                 </text>
                                </Marker>
                              ))}
                            </Markers>
                          </ZoomableGroup>
                        </ComposableMap>
                      )}
                    </Motion>
                  </div>
                  </Row>
                  <Row xs={7}>
                  <div className="chart-area" style={{marginTop:"10px",width:"100%"}}>
                  <Greeting isLoggedIn={this.state.name} />,
                  </div>
                  </Row>
=======
                                        strokeWidth: 0.75,
                                        outline: "none"
                                      }
                                    }}
                                  />
                                );
                              });
                            }}
                          </Geographies>
                          <Markers>
                            {cities.map((city, i) => (
                              <Marker
                                key={i}
                                marker={city}
                                onClick={this.handleCityClick}
                              >
                                <circle
                                  cx={0}
                                  cy={0}
                                  r={6}
                                  fill="#FF5722"
                                  stroke="#DF3702"
                                />
                              </Marker>
                            ))}
                          </Markers>
                        </ZoomableGroup>
                      </ComposableMap>
                    </Col>
>>>>>>> b29f7f018ac227fe122b9cac97e45bf73b99d7d7

                    <Col xs={5}>
                      <Col>
                        <Row xs={5}>
                          <div style={wrapperStyles}>
                            <Motion
                              defaultStyle={{
                                zoom: 1,
                                x: 100,
                                y: 20
                              }}
                              style={{
                                zoom: spring(this.state.zoom, {
                                  stiffness: 210,
                                  damping: 20
                                }),
                                x: spring(this.state.center[0], {
                                  stiffness: 210,
                                  damping: 20
                                }),
                                y: spring(this.state.center[1], {
                                  stiffness: 210,
                                  damping: 20
                                })
                              }}
                            >
                              {({ zoom, x, y }) => (
                                <ComposableMap
                                  projectionConfig={{ scale: 205 }}
                                  width={980}
                                  height={551}
                                  style={{
                                    width: "100%",
                                    height: "auto"
                                  }}
                                >
                                  <ZoomableGroup center={[x, y]} zoom={zoom}>
                                    <Geographies
                                      geography="indiastates.json"
                                      disableOptimization
                                    >
                                      {(geographies, projection) => {
                                        return geographies.map(
                                          (geography, i) => {
                                            //console.log( geography.properties);
                                            return (
                                              <Geography
                                                key={i}
                                                geography={geography}
                                                projection={projection}
                                                style={{
                                                  default: {
                                                    fill:
                                                      geography.properties
                                                        .NAME_1 ==
                                                      this.state.state
                                                        ? "#CFD8DC"
                                                        : "#ECEFF1",
                                                    stroke:"#607D8B",
                                                    strokeWidth: 0.15,
                                                    outline: "none"
                                                  },
                                                  hover: {
                                                    fill: "#CFD8DC",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.15,
                                                    outline: "none"
                                                  },
                                                  pressed: {
                                                    fill: "#FF5722",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.15,
                                                    outline: "none"
                                                  }
                                                }}
                                              />
                                            );
                                          }
                                        );
                                      }}
                                    </Geographies>
                                  </ZoomableGroup>
                                </ComposableMap>
                              )}
                            </Motion>
                          </div>
                        </Row>
                        <Row xs={7}>
                          <div
                            className="chart-area"
                            style={{ marginTop: "10px", width: "100%" }}
                          >
                            <Greeting isLoggedIn={this.state.name} />,
                          </div>
                        </Row>
                      </Col>
                    </Col>
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
