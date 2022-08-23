import React from "react";
import { useState } from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";



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
    
    <div className="heiApplyDiv">
        
        <TopBar/>
        
        <div className="sideBySide">
                <HeiSideBar/>
      
    <table className="heiApplying" border='1' cellPadding={5} cellSpacing={5} align="center">
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
                    <tr><td></td>
                            <td><center><button className="btn"><b>Save</b></button></center></td>
                            <td><center><button className="btn"><b>Reset</b></button></center></td>
                        </tr>
                </tbody>
            </table>
            </div>
            
            
            </div>
 )
}

export default HeiApplying;