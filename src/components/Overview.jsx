import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-card">
        <div className="icon-container">
          <ShoppingCartIcon className="overview-icon1" />
        </div>
        <div className='total-orders'>
          <p>Total Orders</p>
          <div className="stats-contain">
            <h3>75</h3>
            <p className='stat'>3%</p>
          </div>
        </div>
      </div>
      <div className="overview-card">
        <div className="icon-container">
          <LocalShippingIcon className="overview-icon2" />
        </div>
        <div className='total-orders'>
          <p className='total-del'>Total Delivered</p>
          <div className="stats-contain">
            <h3>70</h3>
            <p className='stat-red'>3%</p>
          </div>
        </div>
      </div>
      <div className="overview-card">
        <div className="icon-container">
          <CancelIcon className="overview-icon3" />
        </div>
        <div className='total-orders'>
          <p>Total Cancelled</p>
          <div className="stats-contain">
            <h3>5</h3>
            <p className='stat'>3%</p>
          </div>
        </div>
      </div>
      <div className="overview-card">
        <div className="icon-container">
          <MonetizationOnIcon className="overview-icon4" />
        </div>
        <div className='total-orders'>
          <p>Total Revenue</p>
          <div className="stats-contain">
            <h3>$12k</h3>
            <p className='stat-red'>3%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;