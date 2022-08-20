import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const FundSideBar = () =>{
    return(
        <div className="sideBarDiv">
            <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                    <MenuItem className="sideBarElement"><Link to="/fundsdashboard" style={{color:"white"}} className="active">Dashboard</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsoeevaluation" style={{color:"white"}} className="active">OE Evaluation</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundschemes" style={{color:"white"}} className="active">Schemes</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsexplorer"style={{color:"white"}} className="active">Explore</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsprofile" style={{color:"white"}} className="active">Profile</Link></MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default FundSideBar