import { React, useState, useEffect} from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import './fundsStyles.css';
import Axios from 'axios';
import { NavBarMedium } from "../../components/Navbar";

const FundsProfile = () =>{

    const [name, setName] = useState('blank');

    useEffect(() => {
        Axios.get('http://localhost:3001/fundprofile').then((response)=>{
            setName(response.data)
        })
    },[name])

    return(
        <div className="fundMainDiv">
            <div className="fundProfileDiv">
            <div>
                <NavBarMedium/>
            </div>
            <div className="sideBySide">
                <FundSideBar name={name}/>
            </div>
            <div className="sideBySide">
                <div className="content">
                    <form className="fundProfileForm">
                        <h1 className="fundProfileHeading">Fund Profile</h1>
                        <table className="fundProfileTable">
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
                            <tr>
                                <td><center><button className="btn"><b>Save</b></button></center></td>
                                <td><center><button className="btn"><b>Reset</b></button></center></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
export default FundsProfile;
            
        