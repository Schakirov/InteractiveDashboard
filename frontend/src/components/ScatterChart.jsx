import React from 'react';
import { Scatter } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

console.log("Rendering ScatterChart");

function ScatterChart({ data }) {
  if (!data) return null;

  const chartData = {
    datasets: [
      {
        label: 'Scatter Data',
        data: data.points, // Expects an array of {x: number, y: number}
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Scatter data={chartData} />;
}

export default ScatterChart;
