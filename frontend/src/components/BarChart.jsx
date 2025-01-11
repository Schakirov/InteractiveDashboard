import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

console.log("Rendering BarChart");

function BarChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: ['Population (millions)', 'GDP (billions)'],
    datasets: [
      {
        label: 'Country Data',
        data: [data.population, data.gdp],
        backgroundColor: ['#4caf50', '#2196f3'],
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default BarChart;
