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
    labels: ['Metric A', 'Metric B', 'Metric C', 'Metric D', 'Metric E'],
    datasets: [
      {
        label: 'Performance Metrics',
        data: [data.metricA, data.metricB, data.metricC, data.metricD, data.metricE],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={chartData} />;
}

export default RadarChart;
