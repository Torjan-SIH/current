import { React, useEffect, useState } from "react";
import { ListFundScheme }from "../../components/ListView/listview";
import { PopUpNewScheme } from "../../components/ListView/popup";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import Axios from 'axios';
import './fundsStyles.css';
import { NavBarMedium } from "../../components/Navbar";

const FundSchemes = () =>
{
    const [popupstatus, setPopUpStatus] = useState(false);
    const [name, setName] = useState('blank');

    useEffect(() => {
        Axios.get('http://localhost:3001/funddashboard').then((response)=>{
            setName(response.data)
        })
    },[name])

    return(
        <div className="fundProfileDiv" >
            <div>
                <NavBarMedium/>
            </div>
            
            <div className="sideBySide">
                <FundSideBar name={name}/>
            </div>
            <div className="sideBySide">
                <div className="content">
                    <ListFundScheme/>
                </div>
            </div>
            <div className="sideBySide">
                <button onClick={() => setPopUpStatus(true)} >New Scheme</button>
            </div>
            <PopUpNewScheme trigger={popupstatus} setTrigger={setPopUpStatus} name={name}></PopUpNewScheme>
        </div>
    )
}
export default FundSchemes;
            
        