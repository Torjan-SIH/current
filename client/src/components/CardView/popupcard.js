import React, { useState } from "react";
import Axios from 'axios';
import './cardviewstyles.css';
import { Link } from "react-router-dom";

export const PopUpHeiCard = (props) =>{

    const [hname, setHname] = useState("");
    const [hmail, setHmail] = useState("");
    const [adesc, setAdesc] = useState("");
    const [adoc, setAdoc] = useState();
    const [adate, setAdate] = useState();


    const applySubmit = (e) =>{
        e.preventDefault();
        const ist = new Date();
        const date = `${ist.getFullYear()}/${ist.getMonth()+1}/${ist.getDate()}`;
        setAdate(date);
        Axios.post('http://localhost:3001/heiapplyscheme',{
            sid: props.data.sid,
            sname: props.data.sname,
            hname: hname,
            hmail: hmail,
            adesc: adesc,
            adoc: adoc,
            adate: adate,
        }).then((response) => {
            console.log(response.data)
            if(response.data === "inserted"){
                props.setTrigger(false)
                window.location.reload();
            }  
        })
    } 
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
<<<<<<< HEAD
=======

>>>>>>> 7d89f121768b1a6acc886888b29b1c9460542734
                <div>
                    <form onSubmit={(e) => applySubmit(e)}>
                        <table>
                            <thead>
                                <th colSpan={2}>Apply Scheme</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Agency Name</th>
                                    <td>
                                        {props.data.aname}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Agency Mail</th>
                                    <td>
                                        {props.data.amail}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Scheme Name</th>
                                    <td>
                                        {props.data.sname}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Scheme Description</th>
                                    <td>
                                        {props.data.sdesc}
                                    </td>
                                </tr>
                                <tr>
                                    <th>HEI Name</th>
                                    <td>
                                        <input type="text" name="hname" onChange={(e) => setHname(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>HEI Mail</th>
                                    <td>
                                        <input type="email" name="hmail" onChange={(e) => setHmail(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>
                                        <input type="text" name="adesc" onChange={(e) => setAdesc(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Document</th>
                                    <td>
                                        <input type="file" name="adoc" onChange={(e) => setAdoc(e.target.value)}/>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}>
                                        <button type="submit" >submit</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
=======
                <table>
                    <tr>
                        <td>Scheme Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme ID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme Desc</td>
                        <td></td>
                    </tr>
                </table>
<<<<<<< HEAD
=======

>>>>>>> 7d89f121768b1a6acc886888b29b1c9460542734
            </div>
        </div>
    ) : "";
}

export const PopUpFundCard = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <table>
                    <tr>
                        <td>Scheme ID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    ) : "";
}

export const PopUpVerifyScheme = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <table>
                <tr>
                        <td><button>Accept</button></td>
                        <td><button>Reject</button></td>
                    </tr>
                </table>
            </div>
        </div>
    ) : "";
}

export const PopUpOeDashboard = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <table>
                    <tr>
                        <td>HEI Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme ID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Applied Date</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Documents</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><button>Accept</button></td>
                        <td><button>Reject</button></td>
                    </tr>
                </table>
            </div>
        </div>
    ) : "";
}



export const PopUpHeiDashboard = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <table>
                    <tr>
                        <td>HEI Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme ID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Applied Date</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Documents</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><button>Accept</button></td>
                        <td><button>Reject</button></td>
                    </tr>
                </table>
            </div>
        </div>
    ) : "";
}


export const PopUpSelectRoles = (props) =>{
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <tr>
                    <td colSpan="2"><h4>Select your role to register</h4></td>
                </tr>
                <tr>
                    <td><button className="roleButton" ><Link className="roleButtonLink" to="/agencyregister"><h4>Agencies</h4></Link></button></td>
                    <td><button className="roleButton"><Link className="roleButtonLink" to="/heiregister"><h4>HEI</h4></Link></button></td>
                    <td><button className="roleButton"><Link className="roleButtonLink" to="/oeregister"><h4>OE</h4></Link></button></td>
                </tr>
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}


export const PopUpViewHeiProposal = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <table>
                    <tr>
                        <td>Proposal ID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Proposal Name </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scheme Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Raised On</td>
                        <td></td>
                    </tr>
                </table>
                {props.data.sname}
            </div>
        </div>
    ) : "";
}