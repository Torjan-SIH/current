import React from "react";
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const FundSideBar = (props) => {

    return(
        <div className="sideBarDiv">
            <div className="header">
                <p>{props.name}</p>
            </div>
            <hr></hr>
            <nav className="fundNav">
                <Link to="/fundsdashboard" className="linkItem" ><b>Dashboard</b></Link>
                <Link to="/fundsoeevaluation" className="linkItem"><b>OE Evaluation</b></Link>
                <Link to="/fundschemes" className="linkItem"><b>Schemes</b></Link>
                <Link to="/fundsprofile" className="linkItem"><b>Profile</b></Link>
            </nav>

            {/* <ul class="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
                <li><a href="#" data-text="home">home</a></li>
                <li><a href="#" data-text="archives">archives</a></li>
                <li><a href="#" data-text="tags">tags</a></li>
                <li><a href="#" data-text="categories">categories</a></li>
                <li><a href="#" data-text="about">about</a></li>
            </ul> */}
            <div className="bottom">
                <hr></hr>
                <Link to="/" className="linkItem">Logout</Link>
            </div>
        </div>
    )
}

export default FundSideBar