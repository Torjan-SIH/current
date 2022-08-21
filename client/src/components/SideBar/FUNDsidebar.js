import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import './sideBarStyle.css';

const FundSideBar = (props) =>{

    return(
        <div className="sideBarDiv">
            <nav className="fundNav">
                <Link to="/fundsdashboard">Dashboard</Link>
                <Link to="/fundsoeevaluation">OE Evaluation</Link>
                <Link to="/fundschemes" >Schemes</Link>
                <Link to="/fundsprofile">Profile</Link>
            </nav>
        </div>
    )
}

export default FundSideBar