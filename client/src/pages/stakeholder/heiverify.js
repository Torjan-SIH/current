import React from "react";
import { useState,useEffect,Link } from "react";
import  Axios from "axios";
import './holderstyles.css'


 const HeiVerify = () =>{
    const column = [
        {heading: 'Name of HEI/Individual'},
        {heading: 'Mail'},
        {heading: 'Contact No'},
        {heading: 'Government Authorization Certificate'},
        {heading: 'Address'},
        {heading: 'Role'},
        {heading: 'Address'},
        {heading: 'state'},
        {heading: 'city'}

    ]
   

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();
    const[row,setRow]=useState([]);
    useEffect(()=>{ 
        
      
        Axios.get('http://localhost:3001/heiverify').then((response)=>
        {
           
           
            setRow(response.data);
            console.log(response.data);
          

        }).catch(err=>{console.log(err);})

    },[])

    return(
        <div>
            <table className="heiVerify" border='1' cellPadding={15} cellSpacing={15} align="center">
                <thead>
                    <tr className="heiVerifyMetaData">
                        {column.map((head,index) => <td className="heiVerifyMetaData">{head.heading}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.hname}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.hmail}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.hcontact}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.govtcert}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.cat}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.haddress}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.state}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.city}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     )
}
export default HeiVerify;