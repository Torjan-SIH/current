import React from "react";
import './cardviewstyles.css';
import { Link } from "react-router-dom";

export const PopUpHeiCard = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
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