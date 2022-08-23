import {React, useEffect, useState } from "react";
import { ListOeDashboard } from "../../components/ListView/listview";
import TopBar from "../../components/TopBar/topbar";
import OeSideBar from "../../components/SideBar/oesidebar";
import './oeStyles.css';
import { useSearchParams } from "react-router-dom";
import { NavBarMedium } from "../../components/Navbar";


const OeDashBoard=() =>{

    const [searchparams] = useSearchParams();
    const [name, setName] = useState("");
    const [passwd, setPasswd] = useState("");

    useEffect(() =>{
        setName(searchparams.get('name'));
        setPasswd(searchparams.get('passwd'));
    },[name,passwd,searchparams])

    return(
                <div className="oeProfileDiv">
                    <TopBar name={name}/>
            <div>
                <NavBarMedium/>
            </div>
                <div className="sideBySide">
                    <OeSideBar name={name}/>
                </div>
                <div className="sideBySide">
                    <ListOeDashboard name={name}/>    
                </div>
            </div>
    )
}

export default OeDashBoard;