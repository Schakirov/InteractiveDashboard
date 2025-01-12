import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

console.log("Rendering BarChart");

function BarChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: ['Rhodes Island', 'Switzerland', 'Berlin', 'Vermont', 'California', 'Leiden', 'Hague', 'Brussels', 'Barcelona', 'Cologne'],
    datasets: [
      {
        label: 'Integral Metric',
        data: [89, 87, 84, 78, 75, 72, 69, 68, 67, 65],
        backgroundColor: ['#2196f3'],
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Makes the bars horizontal
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to resize dynamically
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: 'end', // Position labels at the end of the bar
        align: 'right', // Align labels inside the bar
        color: '#444444', // White color for better contrast with the blue bar
        offset: 1,
        formatter: (value) => value, // Display the raw value
        font: {
          size: 12,
        },
      },
    },
    layout: {
      padding: 20, // Adds internal padding around the chart area
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        ticks: {
          maxTicksLimit: 5, // Ensure all labels are visible
          autoSkip: false, // Prevent auto-skipping of labels
        },
      },
    },
  };

  const containerStyle = {
    height: '90%', // Makes it occupy most of the placeholder height
    width: '95%', // Adjusts width to fit within the placeholder
    margin: '10px auto', // Adds margins around the container
  };

  return (
    <div style={containerStyle}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChart;
