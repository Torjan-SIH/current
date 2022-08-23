import React, { useState } from "react";
import Axios from 'axios';
import './cardviewstyles.css';

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
            </div>
        </div>
    ) : "";
}

