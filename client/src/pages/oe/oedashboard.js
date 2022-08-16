import React from "react";
import { ListOeDashboard } from "../../components/ListView/listview";
import TopBar from "../../components/TopBar/topbar";
import OeSideBar from "../../components/SideBar/oesidebar";
import './oeStyles.css';


const OeDashBoard=() =>{
    return(
        <div className="oeProfileDiv">
            <TopBar/>
            <div className="sideBySide">
                <OeSideBar/>
            </div>
            <div className="sideBySide">
                <ListOeDashboard/>    
            </div>
        </div>
    )
}

export default OeDashBoard;