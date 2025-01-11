import React from 'react';
import { Bubble } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

console.log("Rendering BubbleChart");

function BubbleChart({ data }) {
  if (!data) return null;

  const chartData = {
    datasets: [
      {
        label: 'Bubble Data',
        data: data.bubbles, // Expects an array of {x: number, y: number, r: number}
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return <Bubble data={chartData} />;
}

export default BubbleChart;
