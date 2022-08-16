import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const HeiSideBar = () =>{
    return(
        <div className="sideBarDiv">
            <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                <MenuItem className="sideBarElement"><Link to="/heiexplorer"><h3><b>Explore</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/heidashboard"><h3><b>Dashboard</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/heiproposal"><h3><b>Proposal</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/heiprofile"><h3><b>Profile</b></h3></Link></MenuItem><br></br>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default HeiSideBar