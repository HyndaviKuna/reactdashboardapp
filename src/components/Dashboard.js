import React from 'react';
import Header from './Header';
import Overview from './Overview';
import ActivityChart from './ActivityChart';
import DonutChart from './DonutChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import Goals from './Goals';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      {/* <br/> */}
      <div className="main-content">
        <div className="left-content">
        <Overview />
      {/* <br/> */}
          <ActivityChart />
          <RecentOrders />
        </div>
        <div className="right-content">
         <DonutChart/>
          <Goals />
          <Feedback />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;