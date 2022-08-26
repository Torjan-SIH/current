import React, { useEffect, useState } from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import { ListFundDashboard }from "../../components/ListView/listview";
import { NavBarMedium } from "../../components/Navbar";
import Axios from "axios";
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
                <div>
                    <NavBarMedium/>
                </div>
                <div className="sideBySide">
                        <FundSideBar name={name}/>
                </div>
                <div className="sideBySide">
                    <div className="content">
                        <ListFundDashboard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FundsDashboard;
            
    