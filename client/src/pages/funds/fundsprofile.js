import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';
import { NavBarMedium } from "../../components/Navbar";

const FundsProfile = () =>
{
    return(
        <div className="fundMainDiv">
        <div className="fundProfileDiv" >
            <TopBar/>
            <div>
                <NavBarMedium/>
            </div>
            <div className="sideBySide">
                <FundSideBar/>
            
            <form className="fundProfileForm">
                <h1 className="fundProfileHeading">Fund Profile</h1>
                <table className="fundProfileTable" cellPadding={10} >
                <tr>
                        <th><h5>ID: </h5></th><br></br>
                        <td ><input type="text" name="id" disabled value="IND001" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>Name: </h5></th><td></td>
                        <td><input type="text" name="oename" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>Email: </h5></th><td></td>
                        <td><input type="email" name="oemail" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>Contact: </h5></th><td></td>
                        <td><input type="number" name="oecontact" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>past 3yrs IT returns doc: </h5></th><br></br>
                        <td><input type="file" name="itdoc" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>Office Address: </h5></th><br></br>
                        <td><input type="text" name="oeaddress" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>State: </h5></th><br></br>
                        <td><input type="text" name="oestate"className="inputBox" ></input></td>
                    </tr>
                    <tr>
                        <th><h5>City/Town: </h5></th><br></br>
                        <td><input type="text" name="oecity" className="inputBox"></input></td>
                    </tr>
                    <tr>
                        <th><h5>Pincode: </h5></th><br></br>
                        <td><input type="text" name="oepincode" className="inputBox"></input></td>
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
        </div>
    )
}
export default FundsProfile;
            
        