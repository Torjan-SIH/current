import React from "react";
import { useState } from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";


/*const HeiApplying=()=>
{
    
    return(
    <><TopBar/>
    <div className="heiSideBar">
                <HeiSideBar/>
    </div>
    <div className="sideBySide">
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
            </div> }
           
            <button className="accept" >SUBMIT</button>
           &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="reject">CANCEL</button>
          
        </div>
        </div></>
    )
}*/
const HeiApplying = () =>{
    
    const column = [
        {heading: 'Scheme Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Description'},

    ]
    const row = [
        {
            sname: 'agency1',
            smail: 'xyz',
            sno: 1,
            
        },
        {
            sname: 'agency2',
            smail:' def',
            sno: 2,
            
        },
        {
            sname: 'agency3',
            smail: 'ghi',
            sno: 3,
            
        },
    ]
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

return(
    
    <div>
        <TopBar/>
        <div className="heiSideBar">
                <HeiSideBar/>
    </div>
    <table className="heiApplying" border='1' cellPadding={15} cellSpacing={15} align="center">
                <thead>
                    <tr className="agencyVerifyMetaData">
                        {column.map((head,index) => <td className="agencyVerifyMetaData">{head.heading}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.smail}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                       
                    </tr>
                </tbody>
            </table>
            <button className="accept" >SUBMIT</button>
           &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="reject">CANCEL</button>
            </div>
 )
}

export default HeiApplying;