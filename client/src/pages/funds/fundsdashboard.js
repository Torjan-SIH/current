import React, { useEffect } from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import { ListFundDashboard }from "../../components/ListView/listview";
import './fundsStyles.css';
import { NavBarMedium } from "../../components/Navbar";

const FundsDashboard = () =>
{
    return(
        <div className="fundMainDiv">
        <div className="fundProfileDiv" >
            <TopBar/>
            <div>
                <NavBarMedium/>
            </div>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
                <ListFundDashboard/>
            </div>
        </div>
    </div>
    )
}
export default FundsDashboard;
            
        