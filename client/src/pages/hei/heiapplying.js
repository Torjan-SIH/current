import React from "react";
import TopBar from "../../components/TopBar/topbar";


const HeiApplying=()=>
{
    
    return(
    <><TopBar />
    <div className="heiApply">
            <div className="schemeName">
                <h6><b>SCHEME NAME:</b></h6>
            </div>
            <div className="heiSchemeId">
                <h6><b>SCHEME ID:</b></h6>
            </div>
            <div className="heiScheme">
                <h6><b>SCHEME DESCRIPTION:</b></h6>
            </div>
            {/* <div className="search">
            <input id="search-input" type="search" class="form-control" />
            <label class="form-label" for="form1">Search</label>
            <button id="search-button" type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
            </button>
            </div> */}
           
            <button className="accept" >SUBMIT</button>
           &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="reject">CANCEL</button>
          
        </div></>
    )
}
export default HeiApplying;