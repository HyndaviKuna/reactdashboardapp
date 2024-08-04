import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <SearchIcon className="search-icon"/>
        <input type="text" placeholder="Search" />
      </div>
      <div className="icons">
        <EmailIcon className="header-icon"/>
        <SettingsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <AccountCircleIcon className="header-icon"/>
      </div>
    </div>
  );
}

export default Header;