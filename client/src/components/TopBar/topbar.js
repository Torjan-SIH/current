import React from "react";
import { Link } from "react-router-dom";
import './topBar.css';

const TopBar = () =>{
    return(
        <div className="topBarContent">
            <table className="topBarTable">
                <tr>
                    <th>Welcome, </th>
                    <td><div><Link to="/">Logout</Link></div></td>
                </tr>
            </table>
        </div>
    )
}

export default TopBar