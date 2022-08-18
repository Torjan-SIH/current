import React from "react";
import { Link } from "react-router-dom";
import './topBar.css';

const TopBar = () =>{
    return(
        <div className="topBarContent">
            <table className="topBarTable">
                <tr>
                   {/* <th> <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button></th>*/}
                    <th>WELCOME</th><td><br></br></td>
                    <td><div><Link to="/">Logout</Link></div></td>
                </tr>
            </table>
        </div>
    )
}

export default TopBar