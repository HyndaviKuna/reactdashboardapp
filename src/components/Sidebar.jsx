import React from 'react';
import './Sidebar.css';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="inner-sidebar">
        <div className="sidebar-contain">
          <GridViewRoundedIcon className='sidebar-icon active' />
        </div>
        <div className="sidebar-contain border-active">
          <HomeIcon className="sidebar-icon active" />
        </div>
        <div className="sidebar-contain">
          <BarChartIcon className="sidebar-icon" />
        </div>
        <div className="sidebar-contain">
          <ListAltIcon className="sidebar-icon" />
        </div>
        <div className="sidebar-contain">
          <EventNoteIcon className="sidebar-icon" />
        </div>
        <div className="sidebar-contain">
          <PaymentIcon className="sidebar-icon" />
        </div>
        {/* <SettingsIcon className="sidebar-icon" /> */}
      </div>


      <LogoutIcon className="sidebar-icon" />
    </div>
  );
}

export default Sidebar;