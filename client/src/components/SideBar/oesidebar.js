import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const OeSideBar = () =>{
    return(
        <div className="sideBarDiv">
            {/* <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                    <MenuItem className="sideBarElement"><Link to="/oedashboard" style={{color:"white"}}><h3><b>Dashboard</b></h3></Link></MenuItem><br></br>
                    <MenuItem className="sideBarElement"><Link to="/oeprofile" style={{color:"white"}} ><h3><b>Profile</b></h3></Link></MenuItem><br></br>
                </Menu>
            </ProSidebar> */}
            <nav className="oeNav">
            <Link to="/oedashboard" className="active"><h3><b>Dashboard</b></h3></Link>
            <br></br>
            <Link to="/oeprofile" className="active"><h3><b>Profile</b></h3></Link>
            </nav>
        </div>
    )
}

export default OeSideBar