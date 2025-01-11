import React from 'react';
import { Doughnut } from 'react-chartjs-2';

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

console.log("Rendering CircleChart");

function CircleChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: ['Population', 'GDP'],
    datasets: [
      {
        label: 'Country Data',
        data: [data.population, data.gdp],
        backgroundColor: ['#f44336', '#ffeb3b'],
      },
    ],
  };

  return <Doughnut data={chartData} />;
}

export default CircleChart;
