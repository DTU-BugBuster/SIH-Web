import React from "react";
import { render } from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { getfirebase } from "../../firebase";

import { addressPoints } from "./realworld.1000.js";
import L from "leaflet";
import { Button } from "components";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
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
    radius: 7,
    blur: 8,
    max: 0.5,
    limitAddressPoints: true,
    coordinates: [80.9462, 26.8467],
    casespoint: [],
    casespoint1: [],
    casespoint2: [],
    casespoint3: [],
    position: [[1, 1]],
    data: "All",
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
    firebase
      .database()
      .ref("cases")
      .on("value", snapshot => {



        this.setState({
          casespoint: [Object.entries(snapshot.val()).filter((data) => {
            if (data[1].isweb==1) {
              return data[1];
            }
          })],
          casespoint1: [Object.entries(snapshot.val()).filter((data) => {
            if (data[1].isweb==2) {
              return data[1];
            }
          })],
          casespoint2: [Object.entries(snapshot.val()).filter((data) => {
            if (data[1].isweb==3) {
              return data[1];
            }
          })],
          casespoint3: [Object.entries(snapshot.val()).filter((data) => {
            if (data[1].isweb==4) {
              return data[1];
            }
          })]
        })
      })
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
      if (!result) {
        result = [75.7139, 19.7515];
      }
      this.setState({
        coordinates: result.coordinates,
      });
      console.log("g", result);
    }
    console.log('props', nextProp)
    if (nextProp.dataselected != this.state.data) {

      this.setState({
        data: nextProp.dataselected
      })
    }
  }
  deletemarker(value) {
    console.log("hhh");
    var temp = this.state.position;
    var index = temp.indexOf(value);
    if (index !== -1) temp.splice(index, 1);
    this.setState({
      position: temp
    });
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
      '0.00': 'rgb(255,0,255)',
      '0.25': 'rgb(0,0,255)',
      '0.50': 'rgb(0,255,0)',
      '0.75': 'rgb(255,255,0)',
      '1.00': 'rgb(255,0,0)'
    }
    const gradient1 = {
      '0.0': 'rgb(0, 0, 0)',
      '0.6': 'rgb(24, 53, 103)',
      '0.75': 'rgb(46, 100, 158)',
      '0.9': 'rgb(23, 173, 203)',
      '1.0': 'rgb(0, 250, 250)'
    }
    return (
      <div className="app">
        <div className="app-map">


          <Map
            style={{ width: "100%", height: "100%", marginLeft: "10px" }}
            center={[this.state.coordinates[1], this.state.coordinates[0]]}
            zoom={6}
            onClick={e => {
              var temp = this.state.position;
              temp.push([e.latlng.lat, e.latlng.lng]);
              this.setState({
                position: temp
              });
            }}
            doubleClickZoom={false}
          >
            {console.log('a', this.state.data)}
            {(this.props.dataselected == "Raagi" || this.props.dataselected == "All") ?
              <HeatmapLayer
                points={this.state.casespoint[0]}
                longitudeExtractor={m => m[1].addresslng}
                latitudeExtractor={m => m[1].addresslat}
                gradient={gradient}
                intensityExtractor={m => 10000}
                radius={Number(this.state.radius)}
                blur={Number(this.state.blur)}
                max={Number.parseFloat(this.state.max)}
              /> : ""}
              {(this.props.dataselected == "Wheat" || this.props.dataselected == "All") ?
                <HeatmapLayer
                  points={this.state.casespoint2[0]}
                  longitudeExtractor={m => m[1].addresslng}
                  latitudeExtractor={m => m[1].addresslat}
                  gradient={gradient}
                  intensityExtractor={m => 10000}
                  radius={Number(this.state.radius)}
                  blur={Number(this.state.blur)}
                  max={Number.parseFloat(this.state.max)}
                /> : ""}
                {(this.props.dataselected == "Rice" || this.props.dataselected == "All") ?
                  <HeatmapLayer
                    points={this.state.casespoint3[0]}
                    longitudeExtractor={m => m[1].addresslng}
                    latitudeExtractor={m => m[1].addresslat}
                    gradient={gradient}
                    intensityExtractor={m => 10000}
                    radius={Number(this.state.radius)}
                    blur={Number(this.state.blur)}
                    max={Number.parseFloat(this.state.max)}
                  /> : ""}
            {(this.props.dataselected == "Maize" || this.props.dataselected == "All") ?
              <HeatmapLayer
                points={this.state.casespoint1[0]}
                longitudeExtractor={m => m[1].addresslng}
                latitudeExtractor={m => m[1].addresslat}
                gradient={gradient1}
                intensityExtractor={m => 10000}
                radius={Number(this.state.radius)}
                blur={Number(this.state.blur)}
                max={Number.parseFloat(this.state.max)}
              /> : ""
            }
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {this.state.position.map((value, key) => {
              return (
                <Marker
                  position={value}
                >
                  <Popup>
                    Area marked for outbreak
                    <br />
                    <Button color="danger" onClick={() => this.deletemarker(value)}>Delete</Button>
                  </Popup>
                </Marker>
              );
            })}
          </Map>
        </div>
      </div>
    );
  }
}
export default MapExample;
