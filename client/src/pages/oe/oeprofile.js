import React from "react";
import TopBar from "../../components/TopBar/topbar";
import OeSideBar from "../../components/SideBar/oesidebar";
import './oeStyles.css';
const OeProfile=() =>
{
    return(
        <div className="oeProfileDiv">
            <TopBar/>
            
            <div className="sideBySide">
            <OeSideBar/>
            <form className="oeProfileForm">
                <h1 className="oeProfileHeading">OE Profile</h1>
                <table className="oeProfileTable" cellPadding={10}>
                    <tr>
                        <th>ID: </th>
                        <td><input type="text" name="id" disabled value="IND001" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th>Name: </th>
                        <td><input type="text" name="oename" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th>Email: </th>
                        <td><input type="email" name="oemail" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th>Contact: </th>
                        <td><input type="number" name="oecontact" className="inputBox"></input></td>
                    </tr>
                    
                    <tr>
                        <th>Office Address: </th>
                        <td><input type="text" name="oeaddress" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th>State: </th>
                        <td><input type="text" name="oestate" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th>City/Town: </th>
                        <td><input type="text" name="oecity" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th>Pincode: </th>
                        <td><input type="text" name="oepincode" className="inputBox"></input></td>
                    </tr>
                    <tr>
                    <td><center><button className="btn"><b>Save</b></button></center></td>
                    <td><center><button className="btn"><b>Reset</b></button></center></td>
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}

export default OeProfile;