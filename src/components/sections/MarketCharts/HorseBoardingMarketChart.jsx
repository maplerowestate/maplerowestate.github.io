import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2012, LoudounHorses: 14000, FauquierHorses: 10000 },
  { year: 2013, LoudounHorses: 14500, FauquierHorses: 10500 },
  { year: 2014, LoudounHorses: 15000, FauquierHorses: 10700 },
  { year: 2015, LoudounHorses: 15500, FauquierHorses: 11000 },
  { year: 2016, LoudounHorses: 16000, FauquierHorses: 11200 },
  { year: 2017, LoudounHorses: 16500, FauquierHorses: 11500 },
  { year: 2018, LoudounHorses: 17000, FauquierHorses: 11800 },
  { year: 2019, LoudounHorses: 17500, FauquierHorses: 12000 },
  { year: 2020, LoudounHorses: 18000, FauquierHorses: 12200 },
  { year: 2021, LoudounHorses: 18500, FauquierHorses: 12500 },
  { year: 2022, LoudounHorses: 19000, FauquierHorses: 12700 },
  { year: 2023, LoudounHorses: 19500, FauquierHorses: 13000 },
  { year: 2024, LoudounHorses: 20000, FauquierHorses: 13200 },
  { year: 2025, LoudounHorses: 20500, FauquierHorses: 13500 },
];

const HorseBoardingMarketChart = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '0px' }}>Number of Horses in Northern Virginia</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Year", position: 'insideBottom', offset: 0 }} />
          <YAxis label={{ value: "# of Horses", angle: -90, position: 'insideLeft', offset: 0 }} />
          <Tooltip />
          <Legend layout="horizontal" align="center" verticalAlign="top" />
          <Line type="monotone" dataKey="LoudounHorses" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="FauquierHorses" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorseBoardingMarketChart;
