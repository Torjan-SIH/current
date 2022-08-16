import React from "react";
import { useState } from "react";
import './holderstyles.css'

 const AgencyVerify = () =>{
    const column = [
        {heading: 'Name of Agency'},
        {heading: 'Mail of Agency'},
        {heading: 'Contact No'},
        {heading: 'Agency Established Date'},
        {heading: 'Address'},
        {heading: 'Government Authorization Certificate'},
        {heading: 'IT returns(last 3 years'},

    ]
    const row = [
        {
            sname: 'agency1',
            smail: 'xyz',
            sno: 1,
            sdate:'1-1-1',
            sadd:'abc',
            scert:'abc',
            sreturns:3,
        },
        {
            sname: 'agency2',
            smail:' def',
            sno: 2,
            sdate:'2-1-1',
            sadd:'cde',
            scert:'abc',
            sreturns:4,
        },
        {
            sname: 'agency3',
            smail: 'ghi',
            sno: 3,
            sdate:'3-1-1',
            sadd:'ghi',
            scert:'abc',
            sreturns:5,
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="agencyVerify" border='1' cellPadding={15} cellSpacing={15} align="center">
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
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.sadd}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.scert}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.sreturns}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     )
}
export default AgencyVerify;