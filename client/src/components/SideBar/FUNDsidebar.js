import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const FundSideBar = () =>{
    return(
        <div className="sideBarDiv">
            {/* <ProSidebar>
                <Menu iconShape='square' className="sideBar">
<<<<<<< HEAD
                    <MenuItem className="sideBarElement"><Link to="/fundsdashboard" style={{color:"white"}} className="active">Dashboard</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsoeevaluation" style={{color:"white"}} className="active">OE Evaluation</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundschemes" style={{color:"white"}} className="active">Schemes</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsexplorer"style={{color:"white"}} className="active">Explore</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsprofile" style={{color:"white"}} className="active">Profile</Link></MenuItem>
=======
                    <MenuItem className="sideBarElement"><Link to="/fundsdashboard">Dashboard</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsoeevaluation">OE Evaluation</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundschemes">Schemes</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/fundsprofile">Profile</Link></MenuItem>
>>>>>>> 5ffb1ccea8ec660b0e6926f78306052152aafed1
                </Menu>
            </ProSidebar> */}
            <nav className="fundNav">
            <Link to="/fundsdashboard" className="active"><b>Dashboard</b></Link>
            <br></br>
            <Link to="/fundsoeevaluation" className="active"><b>OE Evaluation</b></Link>
            <br></br>
            <Link to="/fundschemes" className="active"><b>Schemes</b></Link>
            <br></br>
            <Link to="/fundsprofile" className="active"><b>Profile</b></Link>
                
            </nav>
        </div>
    )
}

export default FundSideBar