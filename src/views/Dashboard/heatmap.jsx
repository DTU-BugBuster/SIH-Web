import React from "react";
import { render } from "react-dom";
import { Map, TileLayer } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { getfirebase } from "../../firebase";

import { addressPoints } from "./realworld.1000.js";

const cities = [
  { name: "Rajasthan", coordinates: [74.2179, 27.0238] },
  { name: "Kerala", coordinates: [76.2711, 10.8505] },
  { name: "Chattisgarh", coordinates: [81.8661, 21.2787] },
  { name: "Andhra Pradesh", coordinates: [80.0193, 17.1124] },
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
  { name: "Bihar", coordinates: [85.3131, 25.0961] },
  { name: "Jammu and Kashmir", coordinates: [74.797371, 34.083656] },
  { name: "Nagaland", coordinates: [94.5624, 26.1584] },
  { name: "Sikkim", coordinates: [88.5122, 27.533] },
  { name: "Karnataka", coordinates: [75.7139, 15.3173] },
  { name: "Jharkhand", coordinates: [85.2799, 23.6102] },
  { name: "Uttrakhand", coordinates: [79.0193, 30.0668] },
  { name: "Haryana", coordinates: [76.0856, 29.0588] },
  { name: "Meghalaya", coordinates: [91.3662, 25.467] },
  { name: "Arunachal Pradesh", coordinates: [94.7278, 28.218] }
];

class MapExample extends React.Component {
  state = {
    mapHidden: false,
    layerHidden: false,
    addressPoints,
    radius: 10,
    blur: 8,
    max: 0.5,
    limitAddressPoints: true,
    coordinates: [80.9462, 26.8467],
    casespoint : []
  };

  /**
   * Toggle limiting the address points to test behavior with refocusing/zooming when data points change
   */
  toggleLimitedAddressPoints() {
    if (this.state.limitAddressPoints) {
      this.setState({
        addressPoints: addressPoints.slice(500, 1000),
        limitAddressPoints: false
      });
    } else {
      this.setState({ addressPoints, limitAddressPoints: true });
    }
  }
  componentDidMount() {
    var firebase = getfirebase();
    firebase.database().ref('cases').on('value',(snapshot)=>{
      this.setState({
          casespoint : snapshot.val()
      })
    });

  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.state != this.props.state) {
      var result = cities.find(obj => {
        if (nextProp.state == "") {
          return obj.name === "Uttar Pradesh";
        } else {
          return obj.name === nextProp.state;
        }
      });
      if(!result)
      {
        result = [75.7139, 19.7515];
      }
      this.setState({
        coordinates: result.coordinates
      });
      console.log("g", result);
    }
  }

  render() {
    if (this.state.mapHidden) {
      return (
        <div>
          <input
            type="button"
            value="Toggle Map"
            onClick={() => this.setState({ mapHidden: !this.state.mapHidden })}
          />
        </div>
      );
    }

    const gradient = {
      0.1: "#21e031",
      0.2: "#96E3E6",
      0.4: "#1b43e2",
      0.6: "#FAF3A5",
      0.8: "#ffea00",
      "1.0": "#e80909"
    };

    return (
      <div className="app">
        <div className="app-map">
          <Map
            style={{ width: "100%", height: "100%" }}
            center={[this.state.coordinates[1], this.state.coordinates[0]]}
            zoom={6}
          >
            {!this.state.layerHidden && (
              <HeatmapLayer
                points={this.state.casespoint}
                longitudeExtractor={m => m.addresslng}
                latitudeExtractor={m => m.addresslat}
                gradient={gradient}
                intensityExtractor={m => 10000}
                radius={Number(this.state.radius)}
                blur={Number(this.state.blur)}
                max={Number.parseFloat(this.state.max)}
              />
            )}
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
        </div>
      </div>
    );
  }
}
export default MapExample;
