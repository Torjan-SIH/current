import { React, useEffect, useState } from "react";
import { ListFundScheme }from "../../components/ListView/listview";
import { PopUpNewScheme } from "../../components/ListView/popup";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import Axios from 'axios';
import './fundsStyles.css';

const FundSchemes = () =>
{
    const [popupstatus, setPopUpStatus] = useState(false);
    const [name, setName] = useState();

    useEffect(() => {
        Axios.get('http://localhost:3001/funddashboard').then((response)=>{
            setName(response.data)
        })
    },[name])

    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
                <ListFundScheme/>
            </div>
            <div className="sideBySide">
                <button onClick={() => setPopUpStatus(true)} >New Scheme</button>
            </div>
            <PopUpNewScheme trigger={popupstatus} setTrigger={setPopUpStatus} name={name}></PopUpNewScheme>
        </div>
    )
}
export default FundSchemes;
            
        