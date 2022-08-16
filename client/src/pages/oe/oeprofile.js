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
                <table className="oeProfileTable">
                    <tr>
                        <th>Name: </th>
                        <td><input type="text" name="oename" ></input></td>
                    </tr>
                    <tr>
                        <th>Email: </th>
                        <td><input type="email" name="oemail" ></input></td>
                    </tr>
                    <tr>
                        <th>Contact: </th>
                        <td><input type="number" name="oecontact" ></input></td>
                    </tr>
                    <tr>
                        <th>Address: </th>
                        <td><input type="text" name="oeaddress" ></input></td>
                    </tr>
                    <tr>
                        <td><button >Save</button></td>
                        <td><button >Reset</button></td>
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}

export default OeProfile;