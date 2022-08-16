import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import { ListFundOeEvaluation }from "../../components/ListView/listview";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundsOeEvaluation = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
                <ListFundOeEvaluation/>
            </div>
        </div>
    )
}
export default FundsOeEvaluation;
            
        