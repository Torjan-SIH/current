import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import { ListFundDashboard }from "../../components/ListView/listview";

const FundsDashboard = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
                <ListFundDashboard/>
            </div>
        </div>
    )
}
export default FundsDashboard;
            
        