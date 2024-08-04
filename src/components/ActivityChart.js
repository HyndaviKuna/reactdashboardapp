import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ActivityChart.css';

const data = [
  { name: '1', uv: 4000 },
  { name: '2', uv: 3000 },
  { name: '3', uv: 2000 },
  { name: '4', uv: 2780 },
  { name: '5', uv: 1890 },
  { name: '6', uv: 2390 },
  { name: '7', uv: 3490 },
  { name: '8', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '10', uv: 2000 },
  { name: '11', uv: 2780 },
  { name: '12', uv: 1890 },
  { name: '13', uv: 2390 },
  { name: '14', uv: 3490 },
];

const ActivityChart = () => {
  return (
    <div className="activity">
       <div className="chart-h2"><h2>Activity</h2></div>
      <div className="chart-dropdown">
    
        <select>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={130}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;