import React from "react";
import { Link } from "react-router-dom";
import './navBarStyle.css';

export const NavBar = () => {
    return (
        <div className='nav'>
            < nav className='navbar' >
                <img className='logo' src='onofLogo.png' alt="" />
                <div className='navbar__title navbar__item'><Link to="/home" className="H_link">ONE NATION-ONE FUNDING</Link></div>
                <div className='navbar__item'><Link to="/home" className="I_link">Home</Link></div>
                <div className='navbar__item'><Link to="/about" className="I_link">About Us</Link></div>
                <div id="lastitem" className='navbar__item'><Link to="/login" className="I_link">Login</Link></div>
            </nav >
        </div>



    );
};


export const NavBarSmall = () => {
    return (
        <div className='navSmall'>
            < div className='navbarSmall' >
                <img className='logoSmall' src='onofLogo.png' alt="" />
                <div className='navbar__title_small'><Link to="/home" className="H_link_small">ONE NATION-ONE FUNDING</Link></div>
                {/* <div className='navbar__item'><Link to="/home" className="I_link">Home</Link></div>
                <div className='navbar__item'><Link to="/about" className="I_link">About Us</Link></div>
                <div className='navbar__item'><Link to="/contact" className="I_link">Contact</Link></div> */}
                <div id="lastitem" className='navbar__item'><Link to="/login" className="I_link">Login</Link></div>
            </div >
        </div>
    )
}