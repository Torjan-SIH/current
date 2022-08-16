import React from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import './heiStyles.css';

const HeiDashBoard = () => {
    return(  
        <div className="heiProfileDiv">
            <TopBar/>
            <div className="sideBySide">
                <HeiSideBar/>
            </div>
            <div className="sideBySide">
                <form className="heiProfileForm">
                    <h1 className="heiProfileHeading">HEI Dashboard</h1>
                    <table className="heiProfileTable">
                    <tr>
                    <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>Status</td>
                        
                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>Status</td>
                        <td><button >Edit/Cancel</button></td>

                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>Status</td>
                        <td><button >Edit/Cancel</button></td>

                    </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default HeiDashBoard;
