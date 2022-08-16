import React from "react";
import { ListHeiDashboard } from "../../components/ListView/listview";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import './heiStyles.css';

const HeiDashBoard = () => {
    return(  
        <div className="heiProfileDiv">
            <TopBar/>
            <div className="sideBySide">
                <HeiSideBar/>
            </div>
            <div className="sideBySide">
                <ListHeiDashboard/>
            </div>
        </div>
                
    )
}
export default HeiDashBoard;

