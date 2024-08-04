import React from 'react';
import './Goals.css';
import { FaBullseye, FaHamburger, FaUtensils } from 'react-icons/fa';
import { BiDish } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

const Goals = () => {
  return (
    <div className="container">
      <div className="menu-item">
        <GoGoal className="icon goals-icon" />
        <div className="text">Goals</div>
        <div className="arrow"></div>
      </div>
      <div className="menu-item">
        <GiHamburger className="icon dishes-icon" />
        <div className="text">Popular Dishes</div>
        <div className="arrow"></div>
      </div>
      <div className="menu-item">
      <BiDish  className="icon menus-icon" />
        <div className="text">Menus</div>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Goals;