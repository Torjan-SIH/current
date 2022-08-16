import React from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import { CardHeiExplorer } from "../../components/CardView/cardview";

const HeiExplorer = () => {
  return(
    <div className="heiExploreDiv">
      <div className="sideBySide">
        <HeiSideBar />
      </div>
      <div className="sideBySide">
        <CardHeiExplorer/>
      </div>
    </div>
  )
}
export default HeiExplorer;