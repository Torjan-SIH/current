import React from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import './heiStyles.css';

const HeiProposal = () => {
    return(  
        <div className="heiProfileDiv">
            <TopBar/>
            <div className="btn">
            <button >Edit/Cancel</button>
            </div>
            <div className="sideBySide">
                <HeiSideBar/>
            </div>
            <div className="sideBySide">
                <form className="heiProfileForm">
                    <h1 className="heiProfileHeading">Proposals</h1>
                    <table className="heiProfileTable">
                    <tr>
                    <th>Proposal ID</th>
                        <th>Proposal Name </th>
                        <th>Raised On </th>
                        
                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>

                    </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default HeiProposal;