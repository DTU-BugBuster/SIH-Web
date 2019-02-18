// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const dashboardShippedProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "WELL AT KUYYURA- A.P.",
        "WELL AT TADAVAI A.P.",
        "WELL AT VIJAYWADA- A.P.",
        "WELL AT PEDDAVOORA- A.P.",
        "B/W.- EAST OF SAICHERUVU-PAIDIPALLY (V)-WARANGAL DIST.",
        "B/W -NEAR CKM COLLEGE -ENUMAMULA (V) -WARANGAL DIST.",
        "O/W - BHOOMAIAH NEAR ASHPONDSOF NTPC - KUNDANPALLY (V) - RAMAGUNDAM - KARIMNAGAR- A.P",
        "B/W - MANAKONDUR (V) - KARIMNAGAR DIST.- A.P",
        "B/W - IDA - NEAR CHAITANYA CHLORIDES -PASHAMAYLAM - MEDAK",
        "B/W.- PRIMARY SCHOOL -RUDRAVELLI (V) - BIBINAGAR (M)- NALGONDA DIST.- A.P",
        "B/W - SRI RAMNAGAR COLONY- SAKKAR NAGAR- BODHAN- NIZAMABAD DIST.- A.P",
        "B W.- KRISHNA MURTHY- D.NO.48-16-43 AUTONAGAR VIJJAYAWADA- KRISNA DIST.- A.P.",
        "B/W.- VIJAY KUMAR AUTONAGARVIJAYAWADA- KRISHNA DIST.",
        "B/W.- NAGARAM(V)- PALVONCHA- KHAMMAM DIST.- A.P.",
        "B W OF NAVLOK GARDENS NELLORE",
        "B/W.- TUNGBHADRA RIVER NEAR KURNOOL- A.P.",
        "B/W.- NANDYAL- KURNOOL DIST.- A.P.",
        "B/W.- NAGIRI- CHITTOOR DIST.- A.P",
        "B/W.- SWARNAMUKHI RIVER-SRIKALAHASTI- CHITTOOR DIST.",
        "O/W.- NEAR RAMA TEMPLE - WARD No.2 - MINDI - VISAKHAPATNAM- A.P",
        "O/W.PEDDANUYYI - VIZIANAGARAM",
        "B/W.- NEAR M/S ANDHRA SUGARS LTD.- KOVVUR - W.G.DIST.",
        "O/W.-NEAR PARTAP NAGAR BRIIDGE -KAKINADA - E.G.DIST.- A.P"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartAssam = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "DIGBOI- TINSUKIA DISTT.- ASSAM",
"KARBI ANGLONG DISTT.- ASSAM",
"SIBSAGAR - ASSAM",
"SIBSAGAR- ASSAM",
"(JORHAT- ASSAM",
"SILCHAR- ASSAM",
"BARPETA- ASSAM",
"BONAIGAON- ASSAM",
"GUWAHATI- ASSAM",
"GUWAHATI- ASSAM",
"GROUND WATER FROM LEDO-MARGHERITA",
"GROUND WATER FROM NAZIRA",
"GROUND WATER FROM NUMALIGARH(NEAR NRL TE LABOR COLONY)",
"GROUND WATER FROMSEMENCHAPARI",
"GROUND WATER FROM SILAPATHAR",
"GROUND WATER FROM LAKHIMPURTOWN",
"GROUND WATER FROM TEZPUR(MISSION CHARIALI)",
"GROUND WATER FROM NAGAON(PANIGAON)",
"GROUND WATER FROM JAGIROAD NRHPC EFFLUENT DISCHARGE POINT",
"GROUND WATER NR MSW DUMPING SITE AT GARCHUK-GUWAHATI",
"GROUND WATER FROM NALBARI",
"GROUND WATER FROM BARPETA ROAD(RLY STATION)",
"GROUND WATER NEAR BPRL-DHALIGAON",
"GROUND WATER FROM KOKRAJHAR DISTRICT (HS SCHOOL )",
"GROUND WATER FROM DHUBRIDISTRICT (COLLEGE NAGAR )",
"GROUND WATER FROM GOALPARA DIST.(GOALPARA COLLEGE )",
"GROUND WATER FROM DIPHU (GOVT.COLLEGE)",
"GROUND WATER FROM HAMREN",
"GROUND WATER FROM HAFLONG",
"GROUND WATER FROM KARIMGANJ(COLLEGE)",
"GROUND WATER FROM HIALAKANDI (NEAR ASTC BUS STAND )",
"GROUND WATER IN PANCHGRAMMARKET NEAR CACHAR PAPER MILL"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartMizoram = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "WELL AT KUYYURA- A.P.",
        "WELL AT TADAVAI A.P.",
        "WELL AT VIJAYWADA- A.P.",
        "WELL AT PEDDAVOORA- A.P.",
        "B/W.- EAST OF SAICHERUVU-PAIDIPALLY (V)-WARANGAL DIST.",
        "B/W -NEAR CKM COLLEGE -ENUMAMULA (V) -WARANGAL DIST.",
        "O/W - BHOOMAIAH NEAR ASHPONDSOF NTPC - KUNDANPALLY (V) - RAMAGUNDAM - KARIMNAGAR- A.P",
        "B/W - MANAKONDUR (V) - KARIMNAGAR DIST.- A.P",
        "B/W - IDA - NEAR CHAITANYA CHLORIDES -PASHAMAYLAM - MEDAK",
        "B/W.- PRIMARY SCHOOL -RUDRAVELLI (V) - BIBINAGAR (M)- NALGONDA DIST.- A.P",
        "B/W - SRI RAMNAGAR COLONY- SAKKAR NAGAR- BODHAN- NIZAMABAD DIST.- A.P",
        "B W.- KRISHNA MURTHY- D.NO.48-16-43 AUTONAGAR VIJJAYAWADA- KRISNA DIST.- A.P.",
        "B/W.- VIJAY KUMAR AUTONAGARVIJAYAWADA- KRISHNA DIST.",
        "B/W.- NAGARAM(V)- PALVONCHA- KHAMMAM DIST.- A.P.",
        "B W OF NAVLOK GARDENS NELLORE",
        "B/W.- TUNGBHADRA RIVER NEAR KURNOOL- A.P.",
        "B/W.- NANDYAL- KURNOOL DIST.- A.P.",
        "B/W.- NAGIRI- CHITTOOR DIST.- A.P",
        "B/W.- SWARNAMUKHI RIVER-SRIKALAHASTI- CHITTOOR DIST.",
        "O/W.- NEAR RAMA TEMPLE - WARD No.2 - MINDI - VISAKHAPATNAM- A.P",
        "O/W.PEDDANUYYI - VIZIANAGARAM",
        "B/W.- NEAR M/S ANDHRA SUGARS LTD.- KOVVUR - W.G.DIST.",
        "O/W.-NEAR PARTAP NAGAR BRIIDGE -KAKINADA - E.G.DIST.- A.P"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartManipur = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "WELL AT KUYYURA- A.P.",
        "WELL AT TADAVAI A.P.",
        "WELL AT VIJAYWADA- A.P.",
        "WELL AT PEDDAVOORA- A.P.",
        "B/W.- EAST OF SAICHERUVU-PAIDIPALLY (V)-WARANGAL DIST.",
        "B/W -NEAR CKM COLLEGE -ENUMAMULA (V) -WARANGAL DIST.",
        "O/W - BHOOMAIAH NEAR ASHPONDSOF NTPC - KUNDANPALLY (V) - RAMAGUNDAM - KARIMNAGAR- A.P",
        "B/W - MANAKONDUR (V) - KARIMNAGAR DIST.- A.P",
        "B/W - IDA - NEAR CHAITANYA CHLORIDES -PASHAMAYLAM - MEDAK",
        "B/W.- PRIMARY SCHOOL -RUDRAVELLI (V) - BIBINAGAR (M)- NALGONDA DIST.- A.P",
        "B/W - SRI RAMNAGAR COLONY- SAKKAR NAGAR- BODHAN- NIZAMABAD DIST.- A.P",
        "B W.- KRISHNA MURTHY- D.NO.48-16-43 AUTONAGAR VIJJAYAWADA- KRISNA DIST.- A.P.",
        "B/W.- VIJAY KUMAR AUTONAGARVIJAYAWADA- KRISHNA DIST.",
        "B/W.- NAGARAM(V)- PALVONCHA- KHAMMAM DIST.- A.P.",
        "B W OF NAVLOK GARDENS NELLORE",
        "B/W.- TUNGBHADRA RIVER NEAR KURNOOL- A.P.",
        "B/W.- NANDYAL- KURNOOL DIST.- A.P.",
        "B/W.- NAGIRI- CHITTOOR DIST.- A.P",
        "B/W.- SWARNAMUKHI RIVER-SRIKALAHASTI- CHITTOOR DIST.",
        "O/W.- NEAR RAMA TEMPLE - WARD No.2 - MINDI - VISAKHAPATNAM- A.P",
        "O/W.PEDDANUYYI - VIZIANAGARAM",
        "B/W.- NEAR M/S ANDHRA SUGARS LTD.- KOVVUR - W.G.DIST.",
        "O/W.-NEAR PARTAP NAGAR BRIIDGE -KAKINADA - E.G.DIST.- A.P"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartTripura = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL AT UDAIPUR (TUBEWELL)-",
"WELL AROUND UDAIPUR (TUBEWELL)-TRIPURA",
"KUNJBAN- AGARTALA- TRIPURA",
"LANKAMURA- TRIPURA",
"A.D.NAGAR- AGARTALA- TRIPURA",
"SHIBNAGAR- AGARTALA- TRIPURA",
"GANDHIGRAM- AGARTALA- TRIPURA"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartChattisgarh = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "AT RAIPUR REGION- CHHATISSGARH",
"AT RAIPUR REGION-CHHATISSGARH",
"AT BILASPUR REGION",
"AT BILASPUR REGION"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartMP = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "OPEN WELL/TUBE WELL INDUSTRIAL AREA- GOVINDPURA- BHOPAL",
"OPEN WELL/TUBE WELL INDL AREAMANDIDEEP- RAISEN",
"GW SAMPLING AT TWO POINTS IN INDUSTRIAL AREA MALANPUR- M.P",
"GROUND WATER SAMPLING AT TWOPOINTS IN INDL AREA MALANPUR",
"TUBE WELL AT JAINABAD- NEAR TAPTI RIVER BRIDGE- PUMPING STN-BURHANPUR",
"KATHODA- JABALPUR",
"MADAI GRAM- JABALPUR",
"MEHATWAS- NAGDA",
"BHAGATPURI VILLAGE- NAGDA",
"PRATAL NAGAR- DEWAS",
"CULVERT ON A.B.ROAD- MAKSI",
"TRENCHING GROUND- NEAR GARDEN- DEV GURADIYA ROAD- INDORE",
"TRENCHING GROUND IN THE PREMISES OF M/S RISHABH MASALA UDYOG- INDORE",
"TRENCHING GROUND IN THE PREMISES OF M/S LAKHANI FOOT WEAR- INDORE"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartHP = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "AT KALA AMB- H.P",
"AT PAONTA SAHIB- H.P",
"AT PARWANOO- H.P",
"AT BADDI- H.P",
"AT BAROTIWALA- H.P",
"AT NALAGARH- H.P",
"AT DAMTAL- H.P",
"AT UNA- H.P",
"SHIMLA DOWNSTREAM OF MSW DUMPING SITE",
"DHARAMSHALA KANGRA DOWNSTREAM OF MSWDUMPING SITE",
"MANDI-DOWNSTREAM OF MSW DUMPING SITE",
"PARWANOO INDUSTRIAL AREA",
"BADDI INDUSTRIAL AREA",
"BAROTIWALA INDUSTRIAL AREA",
"NALAGARH INDUSTRIAL AREA",
"KALA AMB INDUSTRIAL AREA",
"PAONTA SAHIB INDUSTRIAL AREA",
"MEHATPUR INDUSTRIAL AREA",
"UNA INDUSTRIAL AREA"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartChandigarh = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "SECTOR 15",
"SECTOR  22",
"SECTOR  34",
"SECTOR 47",
"PALSORA VILLAGE",
"DHANAS VILLAGE",
"DADU MAJRA"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartPunjab = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "PETROL PUMP OPP. HERO CYCLE-LUDHIANA",
"BHAGWAN SINGH- H.NO.907- DASMESH NAGAR- GALI NO. 6- LUDHIANA",
"GURCHAARAN SINGH HAIBOWAL DAIRY COMPLEX- LUDHIANA",
"DUSSHERA GROUND INDUSTRIAL ESTATE- LUDHIANA",
"SHUKLA TEA STAL POINT- LUDHIANA",
"PUNJAB AGRICULTUREAL UNIVERSITY- LUDHIANA"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartKerala = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL AT ELOOR- KERALA",
"WELL AT CHUNGAPALLY- KERALA",
"WELL AT PUNALUR- KERALA",
"PAPPANAMKODE-THIRUVANANTHAPURAM",
"NEDUMANGAD-THIRUVANANTHAPURAM",
"NEDUMANGAD-THIRUVANANTHAPURAM",
"CHERTHALA-ALLEPPY- KERALA",
"VYTTILA-ERNAKULAM",
"EDAYAR ERNAKULAM DISTT.",
"KALAMASSERY ERNAKULAM",
"PUNKUNNAM TRISSUR DISTT.",
"MALAPURAM - KERALA",
"MAVOOR- KOZHIKKODE DISTT.- KERALA",
"KANNUR (MUNICIPALITY) KANNUR",
"PAYYANNUR- KANNUR DISTT.",
"FATHIMAPURAM (CHANGANASSERY)",
"KAROOR (PALA)",
"VAIKOM",
"VADAVATHOOR (KOTTAYAM)",
"SARVODAPURAM- ALAPPUZHA",
"KUREEPUZHA (KOLLAM)",
"K.M.M.L.(KOLLAM)",
"CHELLORA TRENCHING GROUND(KANNUR)",
"PUNNALPETTIPPALAM (TELLICHERRYMUNICIPALITY)",
"MANJERI",
"LALOOR (THRISSUR)",
"OLLUR (THRISSUR)",
"BRAHMAPURAM M.S.W.DUMPARK (ERNAKULAM)",
"HAZARDOUS WASTE DUMP(AMBALAMUGHAL)",
"KARUKAMANI"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartTN = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL AT MUSIRI- TAMIL NADU",
"COLLECTOR WELL AT THIRUPUVANAM FOR MADURAI WAT. SUPPLY SCHEME"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartPondicherry = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL AT MUTHIALPET AREA(I)",
"WELL AT THENGAITHITTU AREA-(II)",
"WELL AT MUTHARAPLATYAM (PWD)",
"WELL AT KALAPET-PONDI.UNIVER.ADMN.BLOCK",
"NEHRU STATUE- PONDICHERRY",
"KATTERIKUPPAM- PODICHERRY",
"CHUNMBAR RIVER- PONDICHERRY",
"KURUMBAPET",
"METTUPALAYAM",
"URUVAIYAR",
"KARUVADIKUPPAM",
"T.R.PATTINAM- KARAIKAL",
"VADAMATTAM- KARAIKAL"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartDAD = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL AT SOMNATH INDL ESTATE"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartMaharastra = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "INDL.ESTATE TARAPUR",
"MIRA-BHAYANDER",
"DAHANU",
"VASAI",
"PALGHAR",
"BMW SITE- BURUDGAON- AHMEDNAGAR",
"MSW SITE- PATHARDI- NASIK",
"MSW SITE- PIMPRI-CHINCHWAD- PUNE",
"PHANDARPUR- GANGAPUR-AURANGABAD",
"KHAPERKHEDA- NAGPUR",
"KORADI- NAGPUR",
"RAIPUR- NAGPUR",
"BHAHMNI- KALMESHWAR- NAGPUR",
"SANGERA GONDIA",
"BHANDEWARI- NAGPUR",
"SUKALI- AMRAVATI",
"AKOT- AKOLA",
"SAWARGAON- YAVATMAL",
"PARVATI INDL.ESTATE- SHIROL",
"MIDC- SHINOLI- CHENDGAD",
"SAVALI- SANGLI",
"RASULWADI-SAMBARWADI- SANGLI",
"BORE WELL AT KATPUR- NEAR Z.PSCHOOL.",
"DUG WELL AT RANJANGAON.",
"HAND PUMP IN THE PREMISES OFZILLA PARISHAD PRIMARY SCHOOL"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartGujarat = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL AT AHMEDABAD",
"WELL AT NAROL- AHMEDABAD",
"JUNAGADH",
"RAJKOT",
"SURENDRANAGAR",
"PALANPUR",
"MEHASANA",
"SIDDHPUR (DIST.PATAN)",
"HIMATNAGAR",
"NADIAD",
"DAHOD",
"GODHARA",
"VADODARA (INDUSTRIAL-NANDESARI)",
"ANKLESHWAR (INDUSTRIAL AREA)",
"PANDESARA (INDSTRIAL) SURAT",
"MORA-HAJIRA (INDUSTRIAL)- HAJIRA",
"GABHENI VILL- SURAT (INDUSTRIAL)",
"BORE WELL OF CHHATRAL GIDC.",
"BORE WELL OF PALSANA VILLAGE.",
"ORE WELL OF SANTEJ VILLAGE.",
"B/W- HAZARDOUS W.DISPOSAL SITE (GUJ.ENVIRO P.& I.LTD.)",
"BORE WELL OF SACHIN GIDC.",
"WELL AT OLPAD.",
"BORE WELL OF NAVSARI GIDCINDUSTRIES ASSOCIATION OFFICE.",
"FROM WATER WORKS OF NAVSARINEAR DHUDIA TALAV.",
"BORE WELL - BARDOLI REST HOUSE.",
"WELL AT ANKLESHWAR INDUSTRIAL AREA (BORE WELL OF M/S INDUSTRIAL CARBON AT ANKLESHWAR- RAJPIPLA ROAD.",
"BORE WELL AT STP MADHAPAR- DIST. RAJKOT",
"B/W- SNR. VINAYAK JAL SUDDHIKARAN SAHAKARI MANDALI LTD.(CETP )- BAVLA- AHMEDABAD",
"B/W OF SOMESHWAR RICE MILL- NR. BAVLA ECO PROJECT- (CETP )- BAVLA- AHMEDABAD",
"BORE WELL OF PIRANA TERMINAL PUMPING STN- PIRANA- NR. V. N. BDG- AHMEDABAD",

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartRajasthan = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "WELL OF LOOMJI- CHAUDHARY- NEARNAYAGAON- PALI- (UPSTREAM 1 KM.FROM PALI TOWN)",
"WELL (UPSTREAM 1 KM FROM JODHPUR TOWN)",
"WELL (U/S 1 KM FROM JODHPUR TOWN)",
"RIICO PUMP HOUSE NEAR MONTOMOTORS- MIA- ALWAR",
"BORE WELL IN MODI ALKALIS & CHEMICALS- MIA- ALWAR",
"WELL KOTHI IN VILLAGE BAGARRAJPUT- ALWAR",
"WELL AT VILLAGE SANTHLA VERY NEAR BHIWADI INDUSTRIAL AREA- BHIWADI",
"WELL AT VILLAGE ALUPUR- VERYNEAR BHIWADI INDUSTRIAL AREA- BHIWADI",
"WELL AT VILLAGE HARCHANDPUR- VERY NEAR- BHIWADI TO BHIWADI INDUSTRIAL AREA- BHIWADI",
"WELL AT VILLAGE BHIWADI - VERYNEAR- BHIWADI TO BHIWADI INDUSTRIAL AREA- BHIWADI",
"WELL AT VILLAGE GATTAL- NEAR-BHIWADI TO BHIWADI INDUSTRIAL AREA- BHIWADI",
"HAND PUMP NEAR SECONDARY SCHOOL ABOUT 300mt.FROM KANSUA NALLAH KOTA",
"CHAUDHARY KA WELL VILLAGEPANIALA- KOTAPUTALI NEAR ASSOCIATED ALCOHOL BREVERIES LTD JAIPUR",
"PHED WELL NEAR RAILWAY LINE JHOTAWARA- JAIPUR",
"PHED WELL NEAR NEI- KHATIPURA",
"HAND PUMP OF VIDHANI VILLAGEGONER ROAD JAIPUR",
"WELL OF GOOJARON KI TALAI-MOHANA ROAD SANGANER JAIPUR",
"PUBLIC HAND PUMP BEFORESANGANER PULIA",
"PABUPURA ROAD NEAR CIVIL AIRPORT- JODHPUR (MANGILAL RATHOR)",
"VILLAGE VINAYAKIA- JODHPUR(HIRALAL KUMHAR)",
"VILLAGE VINAYAKIA- JODHPUR (BADRIKUMHAR)",
"VILLAGE VINAYAKIA- JODHPUR(HUKUM SINGH RATHORE)",
"NEAR UIT BRIDGE- UDAIPUR",
"NEW FATEHPURA- 200 FT.FROMPANCHWATI NALLAH- UDAIPUR",
"NEAR ARVIND GENERAL STORE- ALOO FACTORY- KACCHI BASTI- SARDARPURA- UDAIPUR",
"NEAR RANA PRATAP NAGAR- RAILWAYSTATION- UDAIPUR",
"HOTEL ORIENT PLACE- SUBHAS NAGAR- UDAIPUR",
"IN SIDE SHIV TEMPLE NEAR AIRFORCE STATION AMER ROAD- JAIPUR",
"NEAR SHREE KALYANESHWAR MAHADEV TEMPLE- JAI SINGH PURA KHURD- JAIPUR",
"NEAR FOJI NAGAR- KACCHI BASTI-AMBABARI- JAIPUR",
"NEAR ABN CENTRAL ACADEMY- SUSILPURA- SODALA- JAIPUR",
"NEAR SAMSHAN VISHWAKARMANAGAR- MAHARANIFARM- JAIPUR",
"NEAR GANDHI BHWAN- AJMER",
"OPPOSITE PRIVATE BUS STAND- AJMER",
"NEAR 9 NO.PETROL PUMP- NEARADARSH NAGAR GATE- AJMER",
"NEAR KHANPURA TALAB- AJMER",
"OUTSIDE JLN HOSPITAL- AJMER",


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartUP = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "GW QUALITY STATION SARDARNAGAR",
"GW QUALITY STATION CAPTANGANJ",
"SITE 1- INDUSTRIAL AREA NEAR M/SWOODWARM CHEMICAL LTD.- UNNAO",
"SITE 2- INDUSTRIAL AREA NEAR M/SAMIN SONS- UNNAO-U.P",
"AT ROADWAYS BUS STATION- UNNAO",
"MAGAWARA INDUSTRIAL AREA NEARM/S JAMJAM TANNERS- UNNAO- U.P",
"CHINHAT INDUSTRIAL AREA IN LUCKNOW NEAR M/S INDIA PESTICIDES LUCKNOW",
"AISHBAGH INDUSTRIAL AREA AT LUCKNOW NEAR M/S EVEREADY INDUSTRIES LTD.",
"JAJMAU INDL AREA No.6 KANPUR",
"PANKI INDUSTRIAL AREA NEARINDUSTRY OF AMMONIA FERTIZER KANPUR- U.P",
"NAGAR PALIKA TUBE WELL-SULTANPUR- U.P",
"INDIA MARKA HAND PUMP IN SAROWNIBLOCK AT RAIBAREILLY",
"TUBE WELL AT MEERUT CITY",
"TUBE WELL AT BAGPAT CITY",
"TUBE WELL IN INDUSTRIAL AREA ATGAJRAULA-MORADABAD- U.P",
"SAHIBABAD INDUSTRIAL AREA-GHAZIABAD- U.P",
"MEERUT ROAD INDUSTRIAL AREAGHAZIABAD- U.P",
"HAPUR ROAD INDUSTRIAL AREAGHAZIABAD- U.P",
"PILKHUA INDUSTRIAL AREAGHAZIABAD- U.P",
"GOPIGANJ INDUSTRIAL AREABHADOHI- VARANASI- U.P",
"MIRZAPUR INDUSTRIAL AREA- U.P",
"GROUND AROUND STPDINAPUR-VARANASI- U.P",
"IFFCO- PHOOLPUR-ALLAHABAD- U.P",
"M/S KANORIA CHEMICAL SONBHADRA-U.P",
"TUBE WELL-SINGRAULI INDL AREA- U.P",

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartOrrisa = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "JAGATPUR INDUSTRIAL AREA-CUTTACK ORISSA",
"MADHUPATNA- KALYAN NAGAR AREA-CUTTACK- ORISSA",
"BIDANASHI - TULASIPUR AREA-CUTTACK- ORISSA",
"BADAMBARI AREA- CUTTACK- ORISSA",
"RANIHAT- MANGALABAGH AREA-CUTTACK- ORISSA",
"KHANDAGIRI AREA- BHUBANESWAR-ORISSA",
"CAPITAL HOSPITAL AREA-BHUBANESWAR- ORISSA",
"OLD TOWN- SAMANTARAAIPUR AREA-BHUBANESWAR-ORISSA",
"KALPNA - LAXMINAGAR AREA-BHUBANESWAR- ORISSA",
"MANCHESWAR INDUSTRIAL AREA- BHUBANESWAR",
"SECRETARIAT- GOVERNOR HOUSE-OLDBUS STAND AREA- BHUBANESWAR- ORISSA",
"NEAR SEA BEACH- PURI- ORISSA",
"NEAR JAGANNATH TEMPLE- PURI-ORISSA",
"HOSPITAL - BUSSTAND- MAUSHIMATEMPLE AREA- PURI- ORISSA",
"NEAR RIVER KUSHABHADRA- PURI"

      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,30,22,23,23,24,24,22,21,25,30,30,27,31,25,25,25,23,28,31,28,27]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[0.5,0.8,0.8,0,0.3,0.4,0.45,0.35,0,0,0,1,0.8,2.2,3,1.6,1.4,1.6,2.1,1.1,1,1,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartBihar = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "PATNA",
      "PATNA",
      "PATNA",
      "PATNA",
      "PATNA",
      "MUZAFFARPUR",
      "MUZAFFARPUR",
      "BEGUSARAI",
      "BEGUSARAI",
      "PURNEA",
      "PURNEA",
      "BEGUSARAI",
      "BEGUSARAI",
      "MUNGER",
      "MUNGER",
      "MOTIHARI",
      "GAYA",
      "GAYA-",
      "RAJGIR",
      "CHAPRA"
      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[25,24,25,24,23,26,26,23,23,25,25,23,24,24,24,25,25,26,27,26]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.1,7,7.4,8,7.1,7,7.3,7.3,7.6,7.6,7.6,7.5,7.4,7.6,7.2,7.4,7.7,7.6,7.8,7.2,7.8,7.8,7.5]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

        data:[7.5,7.6,7.5,7.9,7.6,8,8.1,8.2,8.4,7.8,7.9,7.7,7.6,8.8,8,8.1,8.2,7.7]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartWB = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
      "MINE PIT WATER ASSANSOL- WESTBENGAL",
      "DURGAPUR TOWN-NEAR IISCO-BURDWAN- WEST BENGAL",
      "DURGAPUR TOWN- BURDWAN- WESTBENGAL",
      "INSIDE HINDUSTAN LIVER FACTORY-HALDIA- WEST BENGAL",
      "NEAR IOC REFINERY HALDIA- WESTBENGAL",
      "KALYANI INDUSTRIAL AREA- NADIA-WEST BENGAL",
      "BARSAT MUNICIPALITY NORTH 24-P-WEST BENGAL",
      "TANGRA- CALCUTTA -WEST BENGAL",
      "TOPSIA CALCUTTA- WEST BENGAL",
      "DHAPA CALCUTTA- WEST BENGAL",
      "GARIA CALCUTTA- WEST BENGAL",
      "BEHALA CALCUTTA- WEST BENGAL",
      "DOMJUR HOWRAH- WEST BENGAL",
      "DANKUNI (NEAR COAL COMPLEX)- WEST BENGAL",
      "COSSIPORE - NORTH KOLKATA",
      "CENTRAL KOLKATA",
      "NEAR GALVANISATION UNIT- HOWRAH",
      "CENTRAL HOWRAH-RESIDENTAILAREA",
      "INSIDE KOLKATA LEATHER COMPLEX",
      "RESIDENTIAL AREA - SONARPUR",
      "RAJARHAT - NEW TOWNSHIP",
      "BSIRHAT MUNICIPALITY",
      "BARRAKPORE MUNICIPALITY",
      "NEAR THE PHOSPHATE COMPANY-RISHRA",
      "NEAR FLY ASH DUMPING SITE-KUNTIGHAT- BANDEL",
      "NEAR EXIDE INDUSTRIES-HALDIA",
      "INSIDE TATA METALIKS- KHARAGPUR",
      "KHARAGPUR INDUSTRIAL AREA",
      "ENGLISH BAZAR- MALDAH"


      ],
      datasets: [
        {
          label:"Mean Temprature",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data:[32,33,31,32,33,28,28,30,28,29,28,30,28,29,29,28,28,28,29,25,28,30,28,30,28,32,31,30,29]
        },{
          label:"pH",
          type:'line',
          borderColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[7.7,8.3,7.6,7.3,7.4,7.5,7.8,7.5,7.7,7.9,7.8,8,8.1,7.6,7.4,8,8,7.8,7.9,8,8,7.7,8.5,7.9,7.6,7.6,7.4,7.8,7.5,8]
        },
        {
          label:"B.O.D",
          type:'line',
          borderColor: '#800000',
          pointBorderColor: '#800000',
          pointBackgroundColor: '#800000',
          pointHoverBackgroundColor: '#800000',
          pointHoverBorderColor: '#800000',
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data:[2.1,0.6,0.1,0.7,0.6,0.8,0.6,1.1,0.7,1.3,0.8,1.1,0.9,0.7,1.5,1.5,1.3,1.4,0.8,1.2,1.3,0.5,0.2,0.8,0.8,0.7,1.4,0.9,0.9]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};

module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
  dashboardAllProductsChart, // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart // Chart for Dashboard view - 24 Hours Performance Card
};
