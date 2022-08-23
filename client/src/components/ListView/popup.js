import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './listViewStyle.css';

export const PopUpViewScheme = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <div>
                <table>
                        <tbody>
                            <tr>
                                <th>Scheme ID</th>
                                <td>{props.data.sid}</td>
                            </tr>
                            <tr>
                                <th>Scheme Name</th>
                                <td>{props.data.sname}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{props.data.sdesc}</td>
                            </tr>
                            <tr>
                                <th>Document</th>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <th>Scheme data</th>
                                <td>{props.data.sdate}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <button>Save</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    ) : "";
}

export const PopUpNewScheme = (props) =>{

    const [aname, setAname] = useState();
    const [sname, setSname] = useState();
    const [sdesc, setSdesc] = useState();
    const [sdoc, setSdoc] = useState();
    const [sdate, setSdate] = useState();

    const newSchemeSubmit = (e) =>{
        e.preventDefault();
        const ist = new Date();
        const date = `${ist.getFullYear()}/${ist.getMonth()+1}/${ist.getDate()}`;
        setSdate(date);
        Axios.post('http://localhost:3001/fundnewscheme',{
            aname: aname,
            amail: props.name,
            sname: sname,
            sdesc: sdesc,
            sdoc: sdoc,
            sdate: sdate
        }).then((response) => {
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
                <div>
                    <form onSubmit={(e)=>newSchemeSubmit(e)}>
                        <table>
                            <thead>
                                <th colSpan={2}>New Scheme</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Agency Name</th>
                                    <td>
                                        <input type="text" name="aname" 
                                        onChange={(e) => setAname(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Agency Mail</th>
                                    <td>
                                        <input type="email" name="amail" value={props.name} readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Scheme Name</th>
                                    <td>
                                        <input type="text" name="sname" 
                                        onChange={(e) => setSname(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Scheme Description</th>
                                    <td>
                                        <input type="text" name="sdesc"
                                        onChange={(e) => setSdesc(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Scheme Doc</th>
                                    <td>
                                        <input type="file" name="sdoc" onChange={(e) => setSdoc(e.target.value)}/>
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
            </div>
        </div>
    ) : "";
}

export const PopUpVerifyScheme = (props) =>{
    
    const verifyScheme = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3001/verifyscheme',{
            sid : props.data.sid
        }).then((response)=>{
            if(response.data === "updated"){
                props.setTrigger(false)
                window.location.reload();
            }
            else{
                alert("Verification Request has sent before")
            }
        })
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <div>
                    <form onSubmit={(e) => verifyScheme(e)}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Scheme ID</th>
                                    <td>{props.data.sid}</td>
                                </tr>
                                <tr>
                                    <th>Scheme Name</th>
                                    <td>{props.data.sname}</td>
                                </tr>
                                <tr>
                                    <th>HEI Name</th>
                                    <td>{props.data.hname}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{props.data.adesc}</td>
                                </tr>
                                <tr>
                                    <th>Document</th>
                                    <td>{}</td>
                                </tr>
                                <tr>
                                    <th>Applied data</th>
                                    <td>{props.data.adate}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button >verify</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
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

    const deleteProposal = (e) =>{

    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <div>
                    <form>
                        <table>
                            <tr>
                                <td>Scheme ID</td>
                                <td>{props.data.sid}</td>
                            </tr>
                            <tr>
                                <td>Scheme Name</td>
                                <td>{props.data.sname}</td>
                            </tr>
                            <tr>
                                <td>Agency name</td>
                                <td>{props.data.aname}</td>
                            </tr>
                            <tr>
                                <td>Applied Date</td>
                                <td>{props.data.adate}</td>
                            </tr>
                            <tr>
                                <td>Scheme Description</td>
                                <td>{props.data.adesc}</td>
                            </tr>
                            <tr>
                                <td>Scheme Doc.</td>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{props.data.sstatus}</td>
                            </tr>
                            <tr>
                                <td><button onClick={(e) => deleteProposal(e)}>Delete</button></td>
                            </tr>
                        </table>
                    </form>
                </div>
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

