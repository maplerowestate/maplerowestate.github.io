import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2012, LoudounHorses: 14000, FauquierHorses: 10000, LoudounRevenue: 150, FauquierRevenue: 50 },
  { year: 2013, LoudounHorses: 14500, FauquierHorses: 10500, LoudounRevenue: 160, FauquierRevenue: 52 },
  { year: 2014, LoudounHorses: 15000, FauquierHorses: 10700, LoudounRevenue: 170, FauquierRevenue: 55 },
  { year: 2015, LoudounHorses: 15500, FauquierHorses: 11000, LoudounRevenue: 180, FauquierRevenue: 58 },
  { year: 2016, LoudounHorses: 16000, FauquierHorses: 11200, LoudounRevenue: 190, FauquierRevenue: 60 },
  { year: 2017, LoudounHorses: 16500, FauquierHorses: 11500, LoudounRevenue: 200, FauquierRevenue: 63 },
  { year: 2018, LoudounHorses: 17000, FauquierHorses: 11800, LoudounRevenue: 210, FauquierRevenue: 65 },
  { year: 2019, LoudounHorses: 17500, FauquierHorses: 12000, LoudounRevenue: 220, FauquierRevenue: 67 },
  { year: 2020, LoudounHorses: 18000, FauquierHorses: 12200, LoudounRevenue: 230, FauquierRevenue: 70 },
  { year: 2021, LoudounHorses: 18500, FauquierHorses: 12500, LoudounRevenue: 240, FauquierRevenue: 73 },
  { year: 2022, LoudounHorses: 19000, FauquierHorses: 12700, LoudounRevenue: 250, FauquierRevenue: 75 },
  { year: 2023, LoudounHorses: 19500, FauquierHorses: 13000, LoudounRevenue: 260, FauquierRevenue: 78 },
  { year: 2024, LoudounHorses: 20000, FauquierHorses: 13200, LoudounRevenue: 270, FauquierRevenue: 80 },
  { year: 2025, LoudounHorses: 20500, FauquierHorses: 13500, LoudounRevenue: 280, FauquierRevenue: 82 },
];

const HorseBoardingMarketChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="LoudounHorses" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="FauquierHorses" stroke="#82ca9d" />
      <Line type="monotone" dataKey="LoudounRevenue" stroke="#ff7300" />
      <Line type="monotone" dataKey="FauquierRevenue" stroke="#d88f00" />
    </LineChart>
  </ResponsiveContainer>
);

export default HorseBoardingMarketChart;
