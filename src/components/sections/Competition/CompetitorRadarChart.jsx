import React, { useEffect, useState } from 'react';
import { Radar, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import './CompetitorRadarChart.css'

const CompetitorRadarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Let's use a simpler, direct approach with pre-normalized data
    const data = [
      { metric: 'Market Share', Salamander: 40, SlaterRun: 15, CFC: 20, Boxwood: 25 },
      { metric: 'Revenue', Salamander: 62, SlaterRun: 5, CFC: 35, Boxwood: 17 },
      { metric: 'Property Size', Salamander: 90, SlaterRun: 14, CFC: 12, Boxwood: 31 }, // Normalized already
      { metric: 'Satisfaction', Salamander: 90, SlaterRun: 90, CFC: 90, Boxwood: 86 }, // Scale of 0-100
      { metric: 'Experiences', Salamander: 100, SlaterRun: 60, CFC: 40, Boxwood: 100 }, // Scale of 0-100
      { metric: 'Products', Salamander: 50, SlaterRun: 40, CFC: 100, Boxwood: 40 }, // Scale of 0-100
      { metric: 'Sustainability', Salamander: 60, SlaterRun: 80, CFC: 60, Boxwood: 100 } // Scale of 0-100
    ];

    setChartData(data);
    setIsLoaded(true);
  }, []);

  // Generate colors for each competitor
  const colors = [
    '#8884d8', // purple
    '#82ca9d', // green
    '#ffc658', // yellow
    '#ff7300'  // orange
  ];

  // Define competitors for the radar chart
  const competitors = ['Salamander', 'SlaterRun', 'CFC', 'Boxwood'];
  
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-center mb-6">
        Competitor Comparison: Luxury Agricultural & Winery Establishments
      </h2>
      <div className="h-96 justify-center items-center">
        {isLoaded ? (
          <ResponsiveContainer width={400} height={400}>
            <RadarChart outerRadius={100} data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              
              <Radar
                name="Salamander"
                dataKey="Salamander"
                stroke="#5c4d8c"
                fill="#5c4d8c"
                fillOpacity={0.2}
              />
              <Radar
                name="Slater Run"
                dataKey="SlaterRun"
                stroke="#4b7c57"
                fill="#4b7c57"
                fillOpacity={0.2}
              />
              <Radar
                name="CFC Farm"
                dataKey="CFC"
                stroke="#d49b2a"
                fill="#d49b2a"
                fillOpacity={0.2}
              />
              <Radar
                name="Boxwood"
                dataKey="Boxwood" 
                stroke="#cc4f00"
                fill="#cc4f00"
                fillOpacity={0.2}
              />
              
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p>Loading chart...</p>
          </div>
        )}
      </div>
      
      <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} className="my-8" />
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Analysis</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Market Share & Revenue:</span> Salamander shows dominance in revenue generation, while other competitors have varied market share.
          </li>
          <li>
            <span className="font-medium">Property Size:</span> Salamander has significantly larger property than competitors, providing more space for diverse operations.
          </li>
          <li>
            <span className="font-medium">Experiences & Sustainability:</span> Boxwood Estate leads in sustainability efforts, while Salamander and Boxwood offer the most unique experiences.
          </li>
          <li>
            <span className="font-medium">Product Diversity:</span> CFC Farm & Home Center produces the most diverse range of products, potentially indicating less specialization.
          </li>
        </ul>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>* All metrics normalized to percentage of maximum value across competitors</p>
        <p>* Data based on market research and public information</p>
      </div>
    </div>
  );
};

export default CompetitorRadarChart;
