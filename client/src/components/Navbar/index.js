import React from "react";
import { Link } from "react-router-dom";
import './navBarStyle.css';

const NavBar = () => {
   return (
    <div className="navBar">
        <ul className="navBarList" >
            <img class="logo" src='https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg' alt=""/> 
            <Link to="/home" ><li className="navList" id="onof"><h4><b>ONE NATION-ONE FUNDING</b></h4></li></Link>
            <Link to="/home" ><li className="navList"><h4><b>Home</b></h4></li></Link>
            <Link to="/about" ><li className="navList"><h4><b>About</b></h4></li></Link>
            <Link to="/contact" ><li className="navList"><h4><b>Contact</b></h4></li></Link>
            <Link to="/login" ><li className="navList"><h4><b>LogIn</b></h4></li></Link>
        </ul>

    </div>
     
     
   );
 };
   
 export default NavBar;