import React from "react";
import { Link } from "react-router-dom";
import './navBarStyle.css';

const NavBar = () => {
   return (
    <div className="navBar">
        <ul className="navBarList" >
            <img class="logo" src='https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg' alt=""/> 
            <Link to="/home" ><li className="navList" id="onof"><h2><b>ONE NATION-ONE FUNDING</b></h2></li></Link>
            <Link to="/home" ><li className="navList"><h2><b>Home</b></h2></li></Link>
            <Link to="/about" ><li className="navList"><h2><b>About</b></h2></li></Link>
            <Link to="/contact" ><li className="navList"><h2><b>Contact</b></h2></li></Link>
            {/* <Link to="/events" ><li className="navList"><h2><b>Events</b></h2></li></Link> */}
            <Link to="/login" ><li className="navList"><h2><b>LogIn</b></h2></li></Link>
            
        </ul>

    </div>
     
     
   );
 };
   
 export default NavBar;