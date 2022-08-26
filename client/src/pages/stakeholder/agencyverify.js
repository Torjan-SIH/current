import React from "react";
import { useState,useEffect } from "react";
import  Axios  from "axios";
import './holderstyles.css'
import { PopUpViewAgency } from "./popupadmin";

 const AgencyVerify = () =>{
    const column = [
        {heading: 'Name of Agency'},
        {heading: 'Mail of Agency'},
        {heading: 'Contact No'},
        {heading: 'Status'}
        // {heading: 'Agency Established Date'},
        // {heading: 'certificates'},
        // {heading: 'Address'},
        // {heading: 'state'},
        // {heading: 'city'}

    ]
 

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupdata, setPopUpData] = useState();
    const[row,setRow]=useState([]);
    useEffect(()=>{ 
        
      
        Axios.get('http://localhost:3001/fundverify').then((response)=>
        {
           
           
            setRow(response.data);
            

        }).catch(err=>{console.log(err);})

    },[])

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
                        
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.aname}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.amail}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.acontact}</tr>)}</td>
                        {/* <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.estdate}</tr>)}</td> */}
                        {/* <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.cert}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.aaddress}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.state}</tr>)}</td>
                        <td className="agencyVerifyMetaData">{row.map((data,index) => <tr >{data.city}</tr>)}</td> */}
                         <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.status}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpData(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpViewAgency trigger={popupstatus} setTrigger={setPopUpStatus} data={popupdata}>this is popup</PopUpViewAgency>
        </div>
     )
}
export default AgencyVerify;