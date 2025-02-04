import React from 'react';
import { PolarArea } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

console.log("Rendering PolarAreaChart");

function PolarAreaChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: data.labels, // Expects an array of labels
    datasets: [
      {
        label: 'Polar Area Data',
        data: data.values, // Expects an array of values
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={chartData} />;
}

export default PolarAreaChart;
