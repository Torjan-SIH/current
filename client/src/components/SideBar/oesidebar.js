import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const OeSideBar = () =>{
    return(
        <div className="sideBarDiv">
            <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                    <MenuItem className="sideBarElement"><Link to="/oedashboard"><h3><b>Dashboard</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/oeprofile"><h3><b>Profile</b></h3></Link></MenuItem><br></br>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default OeSideBar