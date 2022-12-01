import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
const Header = () => {
  return (
    <>
    <div className="Header">
      <ul>
        <NavLink to="/Temperature" className="Temperature">
          Temperature
        </NavLink>
        <NavLink to="/BMICalculator" className="TemperatureTwo">
          BMI CalCulator
        </NavLink>
      </ul>
    </div>
    {/* <div style={{backgroundColor: 'grey',
        width: '1240px',
        height: '490px'}}>
        
    </div> */}
    </>
  );
};
export default Header;
