import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ListHeiDashboard } from "../../components/ListView/listview";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import './heiStyles.css';

const HeiDashBoard = () => {

    const [name, setName] = useState("");

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

