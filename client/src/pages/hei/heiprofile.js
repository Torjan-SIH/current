import React from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import './heiStyles.css';

const HeiProfile = () => {
    return(  
        <div className="heiProfileDiv">
            <TopBar/>
            <div className="sideBySide">
                <HeiSideBar/>
                <form className="heiProfileForm">
                    <h1 className="heiProfileHeading">HEI Profile</h1>
                    <table className="heiProfileTable" cellPadding={10}>
                    <tr>
                            <th>ID: </th>
                            <td><input type="text" name="id"  disabled value="IND001" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>Name: </th>
                            <td><input type="text" name="heiname" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>Email: </th>
                            <td><input type="email" name="heimail" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>Contact: </th>
                            <td><input type="number" name="heicontact" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>Office Address: </th>
                            <td><input type="text" name="heiaddress" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>State: </th>
                            <td><input type="text" name="heistate" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>City/Town: </th>
                            <td><input type="text" name="heicity" className="inputBox"></input></td>
                        </tr>
                        <tr>
                            <th>Pincode: </th>
                            <td><input type="text" name="heipincode" className="inputBox"></input></td>
                        </tr>
                    
                        <br></br>
                    <tr><td></td>
                            <td><center><button className="btn"><b>Save</b></button></center></td>
                            <td><center><button className="btn"><b>Reset</b></button></center></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default HeiProfile;