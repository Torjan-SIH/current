import React from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import './heiStyles.css';
import { ViewHeiProposal } from "../../components/ListView/listview";

const HeiProposal = () => {
    return( 
        <body className="heiproposal">
        <div>
        <div className="heiProposalDiv">
        <TopBar/>
        <div className="sideBySide">
            <HeiSideBar/>
        </div>
        
        <div className="sideBySide">
            <ViewHeiProposal/>    
        </div>
    </div>
    </div>
    </body>
    )
}
export default HeiProposal;