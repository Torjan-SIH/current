import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const HeiSideBar = () =>{
    return(
        <div className="sideBarDiv">
            {/* <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                <MenuItem className="sideBarElement"><Link to="/heiexplorer"  style={{color:"white"}}><h3><b>Explore</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/heidashboard"  style={{color:"white"}}><h3><b>Dashboard</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/heiproposal"  style={{color:"white"}}><h3><b>Proposal</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/heiprofile"  style={{color:"white"}}><h3><b>Profile</b></h3></Link></MenuItem><br></br>
                </Menu>
            </ProSidebar> */}
            <nav className="heiNav">
            <Link to="/heiexplorer" className="linkItem"><h3><b>Explore</b></h3></Link>
            <br></br>
            <Link to="/heidashboard" className="linkItem"><h3><b>Dashboard</b></h3></Link>
            <br></br>
            <Link to="/heiprofile" className="linkItem"><h3><b>Profile</b></h3></Link>
            
            </nav>
        </div>
    )
}

export default HeiSideBar