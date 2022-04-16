export default async function fetchChartData(setChartData) {
  let url = 'https://616d5f766dacbb001794c9c0.mockapi.io/samples-chart';
  let chartDataset = [];
  let chartLabels = [];

  const response = await fetch(url);
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
        label: 'Samples',
        data: chartDataset, // this returns total:[num]
        borderColor: 'rgb(199,1,131)',
        backgroundColor: 'rgb(199,1,131, 0.4)',
      },
    ],
  });
}
