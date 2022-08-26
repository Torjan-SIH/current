import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const PopUpViewHei = (props) =>{
   
    const verify=(e,mail)=>
    {
            console.log(e.target.value);
            if(e.target.value==="suc"){
        Axios.post('http://localhost:3001/adminverify', {
            mail: mail,
          }).then((response) => {
            if (response.data) {
              alert("succesfully accepted");
            }
            
         });
            }
            else
            {
                Axios.post('http://localhost:3001/adminheirej', {
                    mail: mail,
                  }).then((response) => {
                    if (response.data) {
                      alert("succesfully rejected");
                    }
                    
                 });
            }
    }
    return (props.trigger) ? (

        <div className="popup">
            <div className="popupInner">
                {/* {setUser(props.data.hmail)} */}
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <div>
                <table>
                        <tbody>
                            <tr>
                                <th>Address</th>
                                <td>{props.data.haddress}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{props.data.state}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{props.data.city}</td>
                            </tr>
                            
                            <tr>
                                <th>Certificates</th>
                                <td><a href={props.data.govtcert} >click here to view the certificates</a></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <button className="verifySubmit" type="submit" value="suc" onClick={(e)=>{verify(e,props.data.hmail)}}>Accept</button>
                                </td>
                                <td>
                                    <button className="verifyReject" type="submit" value="rej" onClick={(e)=>{verify(e,props.data.hmail)}}>Reject</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    ) : "";
    }





    
export const PopUpViewAgency = (props) =>{
   
    const verify=(e,mail)=>
    {
            console.log(e.target.value);
            if(e.target.value==="suc"){
        Axios.post('http://localhost:3001/adminfunverify', {
            mail: mail,
          }).then((response) => {
            if (response.data) {
              alert("succesfully accepted");
            }
            
         });
            }
            else
            {
                Axios.post('http://localhost:3001/adminfunrej', {
                    mail: mail,
                  }).then((response) => {
                    if (response.data) {
                      alert("succesfully rejected");
                    }
                    
                 });
            }
    }
    return (props.trigger) ? (

        <div className="popup">
            <div className="popupInner">
                {/* {setUser(props.data.hmail)} */}
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
                <div>
                <table>
                        <tbody>
                            <tr>
                                <th>Established Date</th>
                                <td>{props.data.estdate}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{props.data.aaddress}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{props.data.state}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{props.data.city}</td>
                            </tr>
                            
                            <tr>
                                <th>Certificates</th>
                                <td><a href={props.data.cert} >click here to view the certificates</a></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <button className="verifySubmit" type="submit" value="suc" onClick={(e)=>{verify(e,props.data.amail)}}>Accept</button>
                                </td>
                                <td>
                                    <button className="verifyReject" type="submit" value="rej" onClick={(e)=>{verify(e,props.data.amail)}}>Reject</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    ) : "";
    }