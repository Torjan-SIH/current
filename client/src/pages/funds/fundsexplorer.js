import React from "react";
import { CardFundExplorer } from "../../components/CardView/cardview";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";

const FundExplorer = () =>{
  return(
    <div className="fundsExploreDiv">
      <TopBar/>
      <div className="sideBySide">
        <FundSideBar />
      </div>
      <div className="sideBySide">
        <CardFundExplorer/>
      </div>
    </div>
  )
}
export default FundExplorer;