import React from "react";
import { Link } from "react-router-dom";
import './listViewStyle.css';

export const PopUpViewScheme = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                {props.data.sname}
            </div>
        </div>
    ) : "";
}

export const PopUpNewScheme = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export const PopUpVerifyScheme = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
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
                    <td><Link className="roleButtonLink" to="/agencyregister"><button className="roleButton" >Agencies</button></Link></td>
                    <td><Link className="roleButtonLink" to="/heiregister"><button className="roleButton">HEI</button></Link></td>
                    <td><Link className="roleButtonLink" to="/oeregister"><button className="roleButton">OE</button></Link></td>
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
                {props.data.sname}
            </div>
        </div>
    ) : "";
}
