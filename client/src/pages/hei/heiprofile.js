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
            </div>
            <div className="sideBySide">
                <form className="heiProfileForm">
                    <h1 className="heiProfileHeading">HEI Profile</h1>
                    <table className="heiProfileTable">
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
                            <td><button>Save</button></td>
                            <td><button>Reset</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default HeiProfile;