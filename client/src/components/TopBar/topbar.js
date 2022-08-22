import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import './topBar.css';

const TopBar = (props) => {

    const [name, setName] = useState("blank");

    useEffect(() => {
        Axios.get('http://localhost:3001/topbar').then((response)=>{
            setName(response.data)
        })
    },[name])
    
    return (
        <div className="topBarContent">
            <table className="topBarTable">
                <tr>
                    <th>Welcome, {name}</th>
                    <td><Link to="/">Logout</Link></td>
                </tr>
            </table>
        </div>
    )
}

export default TopBar