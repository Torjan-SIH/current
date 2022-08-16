import React from "react";
import TopBar from "../../components/TopBar/topbar";


const AgencyVerify = () => {
    return(  
        <div className="agencyProfileDiv">
            <TopBar/>
            <div className="btn">
            <button >Agency Verification Requests</button>
            <button >Hei Verification Requests</button>
            </div>
            <div className="sideBySide">
                <form className="agencyProfileForm">
                    <h1 className="agencyProfileHeading">Agency Registrations</h1>
                    <table className="agencyProfileTable" cellPadding={15} cellSpacing={15} border={1} align={"right"}>
                    <tr>
                    <th>Name of Agency</th>
                        <th>Mail of agency</th>
                        <th>Contact No.</th>
                        <th>Agency established Date</th>
                        <th>Address</th>
                        <th>Govt. Authorisation Certificate</th>
                        <th>IT returns(last 3 years)</th>
                    </tr>
                    <tr>
                        <td>VVIT</td>
                        <td>vvit.net </td>
                        <td>0987654321 </td>
                        <td>nambur</td>
                        <td>abcdefgh </td>
                        <td>HEI </td>
                        <button >Accept/Reject</button>
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
export default AgencyVerify;