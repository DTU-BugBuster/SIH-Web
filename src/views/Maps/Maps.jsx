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
  dashboard24HoursPerformanceChartMizoram,
  dashboard24HoursPerformanceChartJK,
  dashboard24HoursPerformanceChartSikkim,
  dashboard24HoursPerformanceChartKarnatka,
  dashboard24HoursPerformanceChartNagaland,
  dashboard24HoursPerformanceChartArunachal,
  dashboard24HoursPerformanceChartUttrakhand,
  dashboard24HoursPerformanceChartHaryana,
  dashboard24HoursPerformanceChartMeghalaya,
  dashboard24HoursPerformanceChartJharkhand,
} from "../../variables/charts.jsx";


import PanelHeader from '../../layouts/PanelHeader/PanelHeader'
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
  { name: "Jammu and Kashmir", coordinates: [74.797371,34.083656]},
  { name: "Nagaland", coordinates: [94.5624,26.1584]},
  { name: "Sikkim", coordinates: [88.5122,27.5330]},
  { name: "Karnataka", coordinates: [75.7139,15.3173]},
  { name: "Jharkhand", coordinates: [85.2799,23.6102]},
  { name: "Uttrakhand", coordinates: [79.0193,30.0668]},
  { name: "Haryana", coordinates: [76.0856,29.0588]},
  { name: "Meghalaya", coordinates: [91.3662,25.4670]},
  { name: "Arunachal Pradesh", coordinates: [94.7278,28.2180]},

]

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
  if (isLoggedIn == 1301) return <JK />;
  if (isLoggedIn == 1316) return <Sikkim />;
  if (isLoggedIn == 1311) return <Nagaland />;
  if (isLoggedIn == 1303) return <Karnataka />;
  if (isLoggedIn == 1314) return <Punjab />;
  if (isLoggedIn == 1320) return <Uttrakhand />;
  if (isLoggedIn == 1299) return <Haryana />;
  if (isLoggedIn == 1289) return <Arunachal />;
  if (isLoggedIn == 1302) return <Jharkhand />;
  if (isLoggedIn == 1309) return <Meghalaya />;
  else return <h1> </h1>;
}
class Orissa extends React.Component {
  render() {
    return (
      <div>
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
      <Bar
        data={dashboard24HoursPerformanceChartChattisgarh.data}
        options={dashboard24HoursPerformanceChartChattisgarh.options}
      />
      ;
    </div>
  );
}
function Uttrakhand() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartUttrakhand.data}
        options={dashboard24HoursPerformanceChartUttrakhand.options}
      />
      ;
    </div>
  );
}
function Jharkhand() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartJharkhand.data}
        options={dashboard24HoursPerformanceChartJharkhand.options}
      />
      ;
    </div>
  );
}
function Meghalaya() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartMeghalaya.data}
        options={dashboard24HoursPerformanceChartMeghalaya.options}
      />
      ;
    </div>
  );
}
function Haryana() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartHaryana.data}
        options={dashboard24HoursPerformanceChartHaryana.options}
      />
      ;
    </div>
  );
}
function Arunachal() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartArunachal.data}
        options={dashboard24HoursPerformanceChartArunachal.options}
      />
      ;
    </div>
  );
}
function MP() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartMP.data}
        options={dashboard24HoursPerformanceChartMP.options}
      />
      ;
    </div>
  );
}
function JK() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartJK.data}
        options={dashboard24HoursPerformanceChartJK.options}
      />
      ;
    </div>
  );
}
function Sikkim() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartSikkim.data}
        options={dashboard24HoursPerformanceChartSikkim.options}
      />
      ;
    </div>
  );
}
function Karnataka() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartKarnatka.data}
        options={dashboard24HoursPerformanceChartKarnatka.options}
      />
      ;
    </div>
  );
}
function Nagaland() {
  return (
    <div>
      <Bar
        data={dashboard24HoursPerformanceChartNagaland.data}
        options={dashboard24HoursPerformanceChartNagaland.options}
      />
      ;
    </div>
  );
}
function WB() {
  return (
    <div>
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
    },() => {
        console.log("maximized", this.state.state);
    });
  }
  handleReset() {
    this.setState({
      center: [100, 20],
      zoom: 5
    });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardHeader>Agricultural Produces of India</CardHeader>
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
                            geography={"/indiastates.json"}
                            disableOptimization={this.state.disableOptimization}
                          >
                            {(geographies, projection) => {
                              return geographies.map((geography, i) => {
                                //console.log(geography,projection);
                                return (
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
                                        fill: "#ECEFF1",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                      },
                                      hover: {
                                        fill: "#607D8B",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                      },
                                      pressed: {
                                        fill: "#FF5722",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                      },
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
                                      geography={"/indiastates.json"}
                                      disableOptimization
                                    >
                                      {(geographies, projection) => {
                                        return geographies.map(
                                          (geography, i) => {
                                            console.log(geography);
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
                        <Row xs={7} >
                          <div
                            className="chart-area"
                            style={{ marginTop: "50px", width: "100%" ,height:"100%"}}
                          >
                            <Greeting isLoggedIn={this.state.name} style={{ marginTop: "50px", width: "100%" ,height:"100%"}}/>,
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
