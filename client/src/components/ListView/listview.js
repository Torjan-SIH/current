import React, { useEffect } from "react";
import { useState } from "react";
import { PopUpViewScheme,  PopUpVerifyScheme, PopUpOeDashboard , PopUpHeiDashboard ,PopUpViewHeiProposal} from "./popup";
import Axios from 'axios';

export const ListFundScheme = () =>{
    
    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupdata, setPopUpData] = useState();
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/fundschemelist').then((response) => {
                setRow(response.data);
            }).catch(err=>{
                console.log(err)
          });
    },[])
    
    return(
        <div>
            <h3>FUND SCHEME</h3>
            <table className="listFundTable" cellPadding={15}>
                <thead>
                    <tr className="listFundMetaData">
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpData(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpViewScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupdata}>this is popup</PopUpViewScheme>
        </div>
     )
}

//List component for Funds Dashboard page 

export const ListFundDashboard = () =>{
    
    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupdata, setPopUpData] = useState([]);
    
    useEffect(()=>{
        
        Axios.get('http://localhost:3001/funddashboardlist').then((response)=>{
                setRow(response.data);
            }).catch(err=>{
                console.log(err)
            });
    },[])

    return(
        <div>
            <h3>FUND DASHBOARD</h3>
            <table className="listFundTable" cellPadding={15}>
                <thead>
                    <tr className="listFundMetaData">
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>HEI Name</th>
                        <th>Applied Date</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.hname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.adate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sstatus}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpData(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpVerifyScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupdata}></PopUpVerifyScheme>
        </div>
    )
}

export const ListFundOeEvaluation = () =>{

    const[row,setRow]=useState([]);
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/fundoelist').then((response)=>{
                setRow(response.data);
            }).catch(err=>{
                console.log(err)
          });
    },[])
   
    return(
        <div>
            <h3>FUND OE Evaluation</h3>
            <table className="listFundTable" cellPadding={15}>
                <thead>
                    <tr className="listFundMetaData">
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>HEI Name</th>
                        <th>Scheme Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.hname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.adate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sstatus}</tr>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const ListOeDashboard = () =>{
    
    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    useEffect(()=>{    
        Axios.get('http://localhost:3001/oeDashboard').then((response)=>{
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          });
    },[])

    return(
        <div>
            <h3>OE DASHBOARD</h3>
            <table className="listFundTable" cellPadding={15}>
                <thead>
                    <tr className="listFundMetaData">
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                        <th>HEI Name</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpOeDashboard trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpOeDashboard>
        </div>
    )
}

export const ListHeiDashboard = () =>{
   
    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupdata, setPopUpData] = useState();

    useEffect(()=>{ 
        Axios.get('http://localhost:3001/heidashboardlist').then((response)=>{
                setRow(response.data);
            }).catch(err=>{
                console.log(err)
          })
    },[])

    return(
        <div>
            <tr><center><b><h2>HEI DASHBOARD</h2></b></center></tr>
            <table className="listHeiTable" cellPadding={20} cellSpacing={5}>
                <thead>
                    <tr className="listHeiMetaData">
                       {/* {column.map((head,index) => <td className="listHeiMetaData"><h3><b><center>{head.heading}</center></b></h3></td>)} */}
                       <th>Scheme ID</th>
                       <th>Scheme Name</th>
                       <th>Agency Name</th>
                       <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sid}</h5></tr>)}</td>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sname}</h5></tr>)}</td>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.aname}</h5></tr>)}</td>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sstatus}</h5></tr>)}</td>
                        <td className="listHeidData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpData(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpHeiDashboard trigger={popupstatus} setTrigger={setPopUpStatus} data={popupdata}></PopUpHeiDashboard>
        </div>
    )
}