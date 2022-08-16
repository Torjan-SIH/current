import { React, useState } from "react";
import { ListFundScheme }from "../../components/ListView/listview";
import { PopUpNewScheme } from "../../components/ListView/popup";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundSchemes = () =>
{
    const [popupstatus, setPopUpStatus] = useState(false);

    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="btn">
            <button onClick={() => setPopUpStatus(true)} >New Scheme</button>
            </div>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
                <ListFundScheme/>
            </div>
            <PopUpNewScheme trigger={popupstatus} setTrigger={setPopUpStatus}>New Scheme Data</PopUpNewScheme>
        </div>
    )
}
export default FundSchemes;
            
        