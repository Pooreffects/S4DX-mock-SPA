import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: 'rgb(199,1,131)',
      },
    },
    title: {
      display: true,
      text: 'Blood Samples Per Type',
    },
  },
};

function ChartData() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchChartData = async () => {
      let chartDataset = [];
      let chartLabels = [];

      const response = await fetch(
        'https://616d5f766dacbb001794c9c0.mockapi.io/samples-chart'
      );
      const result = await response.json();
      result.samplesPerType.forEach((sample) => {
        chartDataset.push(sample.total);
        chartLabels.push(sample.sampleType);
      });

      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: 'Samples Per Type',
            data: chartDataset,
            borderColor: 'rgb(199,1,131)',
            backgroundColor: 'rgb(199,1,131, 0.4)',
          },
        ],
      });
    };

    fetchChartData();
  }, []);

  return (
    <div className="container w-4/5 h-2/4">
      <h1 className="text-gray-800 font-primary font-medium text-2xl text-center">
        Data Visualization
      </h1>
      <Bar options={options} data={chartData} />
    </div>
  );
}

export default ChartData;
