import React from 'react';
import { Radar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

console.log("Rendering RadarChart");

function RadarChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: ['Life expectancy', 'Politics', 'Business', 'Life quality', 'Innovation'],
    datasets: [
      {
        label: 'Rhodes Island',
        data: [7, 6, 8, 8, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(192, 173, 75)',
        borderWidth: 1,
      },
      {
        label: 'Switzerland',
        data: [9, 9, 8, 9, 8],
        backgroundColor: 'hsla(55, 48.10%, 52.40%, 0.20)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to resize dynamically
    layout: {
      padding: {
        left: 10, // Adds space to the left
        right: 10, // Adds space to the right
      },
    },
    scales: {
      r: {
        beginAtZero: true, // Start the scale at zero
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)', // Optional: Customize angle line color
        },
        ticks: {
          display: true, // Show ticks on the scale
          stepSize: 1, // Increment ticks by 1
          color: '#666', // Tick color
          font: {
            size: 10, // Smaller font size for tick labels
          },
        },
        pointLabels: {
          font: {
            size: 10, // Smaller font size for axis labels
          },
          color: '#333', // Axis label color
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom', // Move the legend to the bottom
        labels: {
          font: {
            size: 12, // Adjust font size for legend
          },
          padding: 10, // Add padding for better spacing
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };
  
  const containerStyle = {
    height: '100%', // Adjust as needed
    width: '400px', // Adjust as needed
    margin: '10px auto',
  };
  

  return (
    <div style={containerStyle}>
      <Radar data={chartData} options={options} />
    </div>
  );
}

export default RadarChart;
