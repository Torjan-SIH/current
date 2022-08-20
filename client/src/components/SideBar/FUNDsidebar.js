import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const FundSideBar = () =>{
    return(
        <div className="sideBarDiv">
            {/* <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                    <MenuItem className="sideBarElement"><Link to="/fundsdashboard">Dashboard</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsoeevaluation">OE Evaluation</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundschemes">Schemes</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsprofile">Profile</Link></MenuItem>
                </Menu>
            </ProSidebar> */}
            <nav className="fundNav">
            <Link to="/fundsdashboard">Dashboard</Link>
            <Link to="/fundsoeevaluation">OE Evaluation</Link>
            <Link to="/fundschemes">Schemes</Link>
            <Link to="/fundsprofile">Profile</Link>
                
            </nav>
        </div>
    )
}

export default FundSideBar