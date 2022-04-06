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

/* 
- Components Registration is required for this package version
- The docs are straightforward and all main components are configurable and customizable
- For this example, Bar takes in Options and dynamic Datasets as props 
*/

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
      /* This fetches and populates data into the arrays for updating the chartData state */
      result.samplesPerType.forEach((sample) => {
        chartDataset.push(sample.total);
        chartLabels.push(sample.sampleType);
      });

      setChartData({
        labels: chartLabels, // this returns sampleType:[str]
        datasets: [
          {
            label: 'Samples Per Type',
            data: chartDataset, // this returns total:[num]
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
