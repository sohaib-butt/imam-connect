"use client";

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CanvasJSChartComponent = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      minimum: 5000, // Start from 5k
      maximum: 60000, // End at 60k
      interval: 5000, // Increment by 5k
      labelFormatter: function(e) {
        // Format x-axis labels to 5k, 10k, 15k, etc.
        return (e.value / 1000) + "k";
      },
      labelFontColor: "#2B303466", // Set x-axis label font color
      lineColor: "#2B303466", // Set x-axis line color
      tickColor: "#2B303466", // Set x-axis tick color
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        color: "#2B3034", // Set crosshair color
        valueFormatString: "0k"
      }
    },
    axisY: {
      minimum: 20, // Start from 20%
      maximum: 100, // End at 100%
      interval: 20, // Increment by 20%
      labelFormatter: function(e) {
        // Format y-axis labels to percentages
        return e.value + "%";
      },

      labelFontColor: "#2B303466", // Set y-axis label font color
      lineColor: "#2B303466", // Set y-axis line color
      tickColor: "#2B303466", // Set y-axis tick color
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        color: "#2B3034", // Set crosshair color
        labelFormatter: function(e) {
          return e.value + "%";
        }
      }
    },
    data: [{
      type: "area",
      xValueFormatString: "0",
      yValueFormatString: "#0%",
      color: "#00BAC2", // Set the color of the area chart
      dataPoints: [
        { x: 5000, y: 85.3 },
        { x: 10000, y: 83.97 },
        { x: 15000, y: 83.49 },
        { x: 20000, y: 84.16 },
        { x: 25000, y: 84.86 },
        { x: 30000, y: 84.97 },
        { x: 35000, y: 85.13 },
        { x: 40000, y: 85.71 },
        { x: 45000, y: 84.63 },
        { x: 50000, y: 84.17 },
        { x: 55000, y: 85.12 },
        { x: 60000, y: 85.86 }
      ]
    }]
  };

  return (
    <div style={{ backgroundColor: "#2B303466" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CanvasJSChartComponent;