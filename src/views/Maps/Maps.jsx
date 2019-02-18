import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps
import { Line, Bar } from "react-chartjs-2";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
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

class FullScreenMap extends React.Component {
constructor(props) {
    super(props);
    this.state = {

      name: "",

    };
    this.handleChange = this.handleChange.bind(this);

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
                    <Col xs={6}>
                  <ComposableMap
                    projectionConfig={{ scale: 1200 }}
                    width={500}
                    height={600}
                    style={{
                      width: "auto",
                      height: "100%"
                    }}
                  >
                    <ZoomableGroup center={[82, 22]} disablePanning>
                      <Geographies geography="indiastates.json">
                        {(geographies, projection) =>{
                          return geographies.map((geography, i) => {
                            //console.log(geography,projection);
                              return <Geography
                                key={i}
                                geography={geography}
                                projection={projection}
                                //onMouseOver={this.handleChange(geography.properties.ID_1)}
                                onClick={this.handleChange(geography.properties.ID_1)}
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
                  <Col xs={6}>
                  <div className="chart-area">
                  <p> ANDHRA PRADESH</p>
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
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
  handleChange(e){
  console.log("matlab click hua hai")
    this.setState({
      name: e
    });
  }
}

export default FullScreenMap;
