import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

console.log("Rendering LineChart");

function LineChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: data.labels, // Expects an array of labels
    datasets: [
      {
        label: 'Line Data',
        data: data.values, // Expects an array of values
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default LineChart;
