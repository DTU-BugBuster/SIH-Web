import React from "react";
import {Polar} from 'react-chartjs-2';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers
import Map from "./heatmap";
import { PanelHeader, Stats, CardCategory, Tasks } from "components";
import { getfirebase,askForPermissionToReceiveNotifications } from "../../firebase";

import {
  dashboardPanelChart,
  getChartCholera,
  getChartD,
  getChartT
} from "variables/charts.jsx";

var CanvasJSReact = require('../../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn == "Orissa") return <Orissa />;
  if (isLoggedIn == "Chattisgarh") return <Chattisgarh />;
  if (isLoggedIn == "Madhya Pradesh") return <MP />;
  if (isLoggedIn == "West Bengal") return <WB />;
  if (isLoggedIn == "Bihar") return <Bihar />;
  if (isLoggedIn == "Uttar Pradesh") return <UP />;
  if (isLoggedIn == "Rajasthan") return <Rajasthan />;
  if (isLoggedIn == "Gujarat") return <Gujarat />;
  if (isLoggedIn == "Maharastra") return <Maharastra />;
  if (isLoggedIn == "Andhra Pradesh") return <AP />;
  if (isLoggedIn == "Tamil Nadu") return <TN />;
  if (isLoggedIn == "Kerala") return <Kerala />;
  if (isLoggedIn == "Assam") return <Assam />;
  if (isLoggedIn == "Manipur") return <Manipur />;
  if (isLoggedIn == "Mizoram") return <Mizoram />;
  if (isLoggedIn == "Tripura") return <Tripura />;
  if (isLoggedIn == "Himachal Pradesh") return <HP />;
  if (isLoggedIn == "Jammu and Kashmir") return <JK />;
  if (isLoggedIn == "Sikkim") return <Sikkim />;
  if (isLoggedIn == "Nagaland") return <Nagaland />;
  if (isLoggedIn == "Karnataka") return <Karnataka />;
  if (isLoggedIn == "Punjab") return <Punjab />;
  if (isLoggedIn == "Uttrakhand") return <Uttrakhand />;
  if (isLoggedIn == "Haryana") return <Haryana />;
  if (isLoggedIn == "Arunachal Pradesh") return <Arunachal />;
  if (isLoggedIn == "Jharkhand") return <Jharkhand />;
  if (isLoggedIn == "Meghalaya") return <Meghalaya />;
  else return <UP />;
}

class Orissa extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: "-20px",
          marginLeft: "0px",
          width: "95%",
          height: "10%"
        }}
      >
        <Card
          className="card-chart"
          style={{
            marginTop: "0px",
            marginLeft: "0px",
            width: "98.7%",
            height: "1020%"
          }}
        >
          <CardHeader>
            <CardCategory>Orissa</CardCategory>
            <CardTitle tag="h4" />
          </CardHeader>
          <CardBody>
            <p>Area: 155707 sq meter</p>
            <p>Capital: Bhubaneshwar</p>
            <p>Disease Gradient: 5.48</p>
            <p>Growth: 14.05%</p>
            <p>Population: 41,974,218</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function Chattisgarh() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Chattisgarh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 135192 sq meter</p>
          <p>Capital: Raipur</p>
          <p>Disease Gradient: 1.37</p>
          <p>Growth: 22.61%</p>
          <p>Population: 25,545,198</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Uttrakhand() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Uttrakhand</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 53483 sq meter</p>
          <p>Capital: Dehradun</p>
          <p>Disease Gradient: 2.12</p>
          <p>Growth: 18.81%</p>
          <p>Population: 10,086,292</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Jharkhand() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Jharkhand</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 79716 sq meter</p>
          <p>Capital: Ranchi</p>
          <p>Disease Gradient: 3.68</p>
          <p>Growth: 22.42%</p>
          <p>Population: 32,988,134</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Meghalaya() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Meghalaya</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 22429 sq meter</p>
          <p>Capital: Shillong</p>
          <p>Disease Gradient: 15.79</p>
          <p>Growth: 27.95%</p>
          <p>Population: 2,966,889</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Haryana() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Haryana</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 44212 sq meter</p>
          <p>Capital: Chandigarh</p>
          <p>Disease Gradient: 6.05</p>
          <p>Growth: 19.9%</p>
          <p>Population: 25,315,462</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Arunachal() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Arunachal Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 83743 sq meter</p>
          <p>Capital: Itanagar</p>
          <p>Disease Gradient: 6.67</p>
          <p>Growth: 26.03%</p>
          <p>Population: 1,383,727</p>
        </CardBody>
      </Card>
    </div>
  );
}
function MP() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Madhya Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 308252 sq meter</p>
          <p>Capital: Bhopal</p>
          <p>Disease Gradient: 1.32</p>
          <p>Growth: 20.35%</p>
          <p>Population: 72,626,809</p>
        </CardBody>
      </Card>
    </div>
  );
}
function JK() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Jammu and Kashmir</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 222236 sq meter</p>
          <p>Capital: Jammu</p>
          <p>Disease Gradient: 8.6</p>
          <p>Growth: 23.64%</p>
          <p>Population: 12,541,302</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Sikkim() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Sikkim</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 7096 sq meter</p>
          <p>Capital: Gangtok</p>
          <p>Disease Gradient: 22.49</p>
          <p>Growth: 12.89%</p>
          <p>Population: 310,577</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Karnataka() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Karnatka</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 191791</p>
          <p>Capital: Bengaluru</p>
          <p>Disease Gradient: 3.68</p>
          <p>Growth: 15.6</p>
          <p>Population: 61,095,297</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Nagaland() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Nagaland</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 16579 sq meter</p>
          <p>Capital: Kohima</p>
          <p>Disease Gradient: 4.169</p>
          <p>Growth: -0.58%</p>
          <p>Population: 1,978,502</p>
        </CardBody>
      </Card>
    </div>
  );
}
function WB() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>West Bengal</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 88752 sq meter</p>
          <p>Capital: Kolkata</p>
          <p>Disease Gradient: 4.29</p>
          <p>Growth: 13.84%</p>
          <p>Population: 91,276,115</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Bihar() {
  console.log("entered bihar");
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Bihar</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 94163 sq meter</p>
          <p>Capital: Patna</p>
          <p>Disease Gradient: 0.212</p>
          <p>Growth: 25.42%</p>
          <p>Population: 104,099,452</p>
        </CardBody>
      </Card>
    </div>
  );
}
function UP() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Uttar Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 240928 sq meter</p>
          <p>Capital: Lucknow</p>
          <p>Disease Gradient: 0.904</p>
          <p>Growth: 20.23%</p>
          <p>Population: 199,812,341</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Rajasthan() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Rajasthan</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 342239 sq meter</p>
          <p>Capital: Jaipur</p>
          <p>Disease Gradient: 1.99</p>
          <p>Growth: 21.31%</p>
          <p>Population: 68,548,437</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Gujarat() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Gujarat</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 196244 sq meter</p>
          <p>Capital: GandhiNagar</p>
          <p>Disease Gradient: 1.75</p>
          <p>Growth: 19.28%</p>
          <p>Population: 60,439,692</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Maharastra() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Maharastra</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 307713 sq meter</p>
          <p>Capital: Mumbai</p>
          <p>Disease Gradient: 1.051</p>
          <p>Growth: 15.99%</p>
          <p>Population: 112,374,333</p>
        </CardBody>
      </Card>
    </div>
  );
}
function AP() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Andhra Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 275045 sq meter</p>
          <p>Capital: Hyderabad</p>
          <p>Disease Gradient: 6.67</p>
          <p>Growth: 10.98%</p>
          <p>Population: 84,580,777</p>
        </CardBody>
      </Card>
    </div>
  );
}
function TN() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Tamil Nadu</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 130060 sq meter</p>
          <p>Capital: Chennai</p>
          <p>Disease Gradient: 3.67</p>
          <p>Growth: 15.61%</p>
          <p>Population: 72,147,030</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Kerala() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Kerala</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 38852 sq meter</p>
          <p>Capital: Thiruvanandhapuram</p>
          <p>Disease Gradient: 15.87</p>
          <p>Growth: 4.91%</p>
          <p>Population: 33,406,061</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Assam() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Assam</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 78438 sq meter</p>
          <p>Capital: Dispur</p>
          <p>Disease Gradient: 1.48</p>
          <p>Growth: 17.07%</p>
          <p>Population: 31,205,576</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Manipur() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Manipur</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 22327 sq meter</p>
          <p>Capital: Imphal</p>
          <p>Disease Gradient: 1.711</p>
          <p>Growth: 12.05%</p>
          <p>Population: 2,570,390</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Mizoram() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Mizoram</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 21081 sq meter</p>
          <p>Capital: Aizawl</p>
          <p>Disease Gradient: 4.8</p>
          <p>Growth: 23.48%</p>
          <p>Population: 1,097,206</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Tripura() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Tripura</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 10486 sq meter</p>
          <p>Capital: Agartala</p>
          <p>Disease Gradient: 7.75</p>
          <p>Growth: 14.84%</p>
          <p>Population: 3,673,917</p>
        </CardBody>
      </Card>
    </div>
  );
}
function HP() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Himachal Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 55673 sq meter</p>
          <p>Capital: Shimla</p>
          <p>Disease Gradient: 26.16</p>
          <p>Growth: 12.94%</p>
          <p>Population: 6,864,602</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Punjab() {
  return (
    <div
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Punjab</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 50362 sq meter</p>
          <p>Capital: Chandigarh</p>
          <p>Disease Gradient: 3.07</p>
          <p>Growth: 13.89%</p>
          <p>Population: 27,743,338</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Chats(props){
 const isLoggedIn=props.isLoggedIn;
 const data = {
  datasets: [{
    data: [
      props.c,
      props.d,
      props.h
    ],
    backgroundColor: [
      '#4BC0C0',
      '#FFCE56',
      '#FF6384',
    ]
   }],
   labels:[
   'cases',
   'deaths',
   'Healthy people'
   ],
 };
    return (
      <div style={{ marginTop: "20px"}}>
        <h2></h2>
        <Polar data={data} />
      </div>
    );
}


function G(props){
return(
<div>
        <h2>Polar Example</h2>
        <Polar data={props.p} />
</div>
)
}
class App extends React.Component {
	render() {
		const options = {
    backgroundColor:"White",
      height:300,
      width:300,
			animationEnabled: true,
			title: {
				text: "Realtime data"
			},
			subtitles: [{
				text: " ",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Cases", y: this.props.c },
					{ name: "Deaths", y: this.props.d },
					{ name: "Healthy People", y: this.props.z }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
class Gender extends React.Component {
	render() {
		const options = {
    backgroundColor:"White",
      height:300,
      width:300,
			animationEnabled: true,
			title: {
				text: "Gender wise data"
			},
			subtitles: [{
				text: " ",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Females", y: this.props.c },
					{ name: "Males", y: this.props.d }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
class Age extends React.Component {
	render() {
		const options = {
    backgroundColor:"#211e1c",
      height:300,
      width:300,
      theme: "dark2",
			title: {
				text: "Age Wise Outbreak",
        fontColor:"White"
			},
      axisY:{
      title: "Number of cases reported"
      },
      axisX:{
      title: "Age Intervals"
      },

			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "20",  y: this.props.c  },
					{ label: "40", y: this.props.d  },
					{ label: "60", y: this.props.z  },
					{ label: "80",  y: this.props.k  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

class Dashboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateselected: "Uttar Pradesh",
      dataselected : "Both",
      casespoint : [],
      numcases:11,
      numdeaths:0,
      numhealthy:10,
      numfem:27,
      nummale:73,
      u20:3,
      u40:5,
      u60:8,
      u80:2
    };
    this.ap=this.ap.bind(this);
    this.fe=this.fe.bind(this);
    this.male=this.male.bind(this);
    this.age1=this.age1.bind(this);
    this.age2=this.age2.bind(this);
    this.age3=this.age3.bind(this);
    this.age4=this.age4.bind(this);
  }
  componentDidMount() {
    var firebase = getfirebase();
    firebase.database().ref('cases').on('value',(snapshot)=>{
      this.setState({
          casespoint : snapshot.val()
      })
      var keys=Object.keys(snapshot.val());

      for(var i=0;i<keys.length;i++){
         var z=Object.entries(snapshot.val())[i][1].state;
         if(z==" "+this.state.stateselected){
           var z=this.state.numcases;
           var k=this.state.numhealthy;
           var s=this.state.numdeaths;
           this.setState({
              numcases:z+1,
              numhealthy:k-(z+s)
           },() => {
           console.log("state changed", this.state.numcases);
           })
         }

      }


    });


  }
  ap(val){
    var k=val[1].state.substr(1);
    return k==this.state.stateselected;
  }
  fe(val){
    var k=val[1].gender;
    return k=="F";
  }
  male(val){
    var k=val[1].gender;
    return k=="M";
  }
  age1(val){
    var k=val[1].age;
    return k>=0&&k<=20;
  }
  age2(val){
    var k=val[1].age;
    return k>=20&&k<=40;
  }
  age3(val){
    var k=val[1].age;
    return k>=40&&k<=60;
  }
  age4(val){
    var k=val[1].age;
    return k>=60&&k<=80;
  }
  componentWillReceiveProps(nextProp) {

    if (nextProp.state != this.state.stateselected) {
      this.setState({
        stateselected:nextProp.state
      });
    }
    if (nextProp.dataselected != this.state.stateselected) {
      this.setState({
        dataselected:nextProp.dataselected
      });
    }
    var keys=Object.entries(this.state.casespoint);

    var final=keys.filter(this.ap);
    this.setState({
      numcases:final.length
    });
    var f=final.filter(this.fe);
    var m=final.filter(this.male);
    this.setState({
      numfem:f.length,
      nummale:m.length
    });
    var k=final.filter(this.age1);
    this.setState({
      u20:k.length
    })
    var j=final.filter(this.age2);
    this.setState({
      u40:j.length
    })
    var a=final.filter(this.age3);
    this.setState({
      u60:a.length
    })
    var g=final.filter(this.age4);
    this.setState({
      u80:g.length
    })
  }
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Row>
              <Col xs={12} md={8}>
                <Map state={this.state.stateselected} dataselected={this.state.dataselected} />
              </Col>
              <Col xs={12} md={4}>
              <div>
                <Greeting isLoggedIn={this.state.stateselected} />
                <div>
                  <Age c={this.state.u20} d={this.stateu40} z={this.stateu60} k={this.stateu80}/>
                </div>
              </div>
              </Col>
            </Row>
          }
        />
        <div className="content" style={{ marginTop: "50px"}}>
        <Col>
          <Row>
            <Col xs={12} md={6}>
            <div style={{marginLeft:"100px"}}>
              <Gender style={{marginLeft:"-10px"}} c={this.state.numfem} d={this.state.nummale} />
            </div>
            </Col>
            <Col xs={12} md={6}>
            <div style={{ marginTop: "0px",height:"10%"}}>
            <App style={{marginLeft:"-10px"}} c={this.state.numcases} d={this.state.numdeaths} z={this.state.numhealthy}/>
            </div>
            </Col>
          </Row>
          <Row style={{marginTop:"40px"}}>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>
                    Cases Of Cholera in{" "}
                    {this.state.stateselected || "Uttar Pradesh"}
                  </CardCategory>
                  <CardTitle tag="h4" />
                </CardHeader>
                <CardBody>
                  <Line
                    data={
                      getChartCholera(
                        this.state.stateselected || "Uttar Pradesh"
                      ).data
                    }
                    options={
                      getChartCholera(
                        this.state.stateselected || "Uttar Pradesh"
                      ).options
                    }
                  />
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
                  <CardCategory>
                    Cases Of Diarrhea in{" "}
                    {this.state.stateselected || "Uttar Pradesh"}
                  </CardCategory>
                  <CardTitle tag="h4" />
                </CardHeader>
                <CardBody>
                  <Line
                    data={getChartD(this.props.state || "Uttar Pradesh").data}
                    options={
                      getChartD(this.props.state || "Uttar Pradesh").options
                    }
                  />
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
                  <CardCategory>
                    Cases Of Typhoid in{" "}
                    {this.state.stateselected || "Uttar Pradesh"}
                  </CardCategory>
                  <CardTitle tag="h4" />
                </CardHeader>
                <CardBody>
                  <Line
                    data={getChartT(this.props.state || "Uttar Pradesh").data}
                    options={
                      getChartT(this.props.state || "Uttar Pradesh").options
                    }
                  />
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
          </Col>
        </div>

      </div>
    );
  }
}

export default Dashboards;
