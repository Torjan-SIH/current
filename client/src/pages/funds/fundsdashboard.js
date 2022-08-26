import React, { useEffect, useState } from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import { ListFundDashboard }from "../../components/ListView/listview";
import Axios from "axios";
import { NavBarMedium } from "../../components/Navbar";
import './fundsStyles.css';


const FundsDashboard = () =>{

    const [name, setName] = useState("blank");

    useEffect(() => {
        Axios.get('http://localhost:3001/funddashboard').then((response)=>{
            setName(response.data)
        })
    },[name])

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
            
    