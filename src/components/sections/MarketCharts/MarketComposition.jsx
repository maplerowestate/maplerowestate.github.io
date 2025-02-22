import React, { useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const MarketComposition = () => {
  const chartRef = useRef(null); // Ref for the canvas element

  // Data for the pie chart
  const data = {
    labels: [
      'High-Net-Worth Private Club Members (DC Area)',
      'Local Equestrian Community',
      'Agricultural Buyers (Local Farms/Stables)',
      'Wine & Spirit Enthusiasts',
      'Tourism & Experience Seekers',
    ],
    datasets: [{
      data: [35, 25, 20, 12, 8],
      backgroundColor: [
        '#495A58', // Sage
        '#D4967D', // Copper
        '#303636', // Charcoal
        '#E5E3DC', // Cream
        '#7B8B8A'  // Light sage
      ],
      borderWidth: 1,
    }],
  };

  // Chart configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          font: {
            family: "'EB Garamond', serif",
            size: 16,
          },
        },
      },
      tooltip: {
        titleFont: {
          family: "'EB Garamond', serif",
        },
        bodyFont: {
          family: "'EB Garamond', serif",
        },
        callbacks: {
          label: function (context) {
            return ` ${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      {/* Chart */}
      <Pie ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default MarketComposition;
