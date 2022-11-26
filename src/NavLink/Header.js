import React from "react"
import { NavLink } from "react-router-dom";
import '../styles.css'
const Header=()=>{


return(
  <div className="Header">
    <ul>
        <NavLink to='/Temperature' className='Temperature'>Temperature</NavLink>
       


    </ul>
  </div>  
)
}
export default Header;