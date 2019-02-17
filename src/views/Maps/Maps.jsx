import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps

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
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <ComposableMap
                    projectionConfig={{ scale: 1000 }}
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                  >
                    <ZoomableGroup center={[95, 22]} disablePanning>
                      <Geographies geography="indiastates.json">
                        {(geographies, projection) =>{
                          return geographies.map((geography, i) => {
                            //console.log(geography,projection);
                              return <Geography
                                key={i}
                                geography={geography}
                                projection={projection}
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
