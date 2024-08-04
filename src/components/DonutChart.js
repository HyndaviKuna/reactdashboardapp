import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './DonutChart.css';

const data = [
  { name: 'Completed', value: 70 },
  { name: 'Pending', value: 30 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const DonutChart = () => {
  return (
    <div className="donut-chart">
      <div className="chart-text">
        <p>Net Profit</p>
        <h1>$6759.25</h1>
      </div>
      <div className="chart-container">
       <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={25}
              outerRadius={40}
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DonutChart;