import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundsProfile = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
            <form className="fundProfileForm">
                <h1 className="fundProfileHeading">Fund Profile</h1>
                <table className="fundProfileTable">
                    <tr>
                        <th><h3>Name: </h3></th><td></td>
                        <td><input type="text" name="oename" ></input></td>
                    </tr>
                   <br></br>
                    <tr>
                        <th><h3>Email: </h3></th><td></td>
                        <td><input type="email" name="oemail" ></input></td>
                    </tr>
                    <br></br>
                    <tr>
                        <th><h3>Contact: </h3></th><td></td>
                        <td><input type="number" name="oecontact" ></input></td>
                    </tr>
                    <br></br>
                    <tr>
                        <th><h3>Address: </h3></th><br></br>
                        <td><input type="text" name="oeaddress" ></input></td>
                    </tr>
                    <br></br>
                    <tr><td></td>
                    <td><center><button ><b>Save</b></button></center></td>
                    <td><center><button ><b>Reset</b></button></center></td>
                    
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}
export default FundsProfile;
            
        