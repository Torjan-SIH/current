import React, { useEffect } from "react";
import { useState } from "react";
import { PopUpViewScheme,  PopUpVerifyScheme, PopUpOeDashboard , PopUpHeiDashboard ,PopUpViewHeiProposal} from "./popup";
import Axios from 'axios';

export const ListFundScheme = () =>{
    
    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/fundSchemes').then((response)=>{
           
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          });
    },[])
    
    return(
        <div>
            <h2>FUNDS SCHEMES</h2>
            <table className="listFundTable" cellPadding={15}>
                <thead>
                    <tr className="listFundMetaData">
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                        <th>S.No</th>
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
            <PopUpViewScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpViewScheme>
        </div>
     )
}

//List component for Funds Dashboard page 

export const ListFundDashboard = () =>{
    
    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();
    
    useEffect(()=>{
        
        Axios.get('http://localhost:3001/fundsDashboard').then((response)=>{
           
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          });
    },[])

    return(
        <div>
            <h2>FUNDS DASHBOARD</h2>
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
            <PopUpVerifyScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpVerifyScheme>
        </div>
    )
}

export const ListFundOeEvaluation = () =>{

    const[row,setRow]=useState([]);
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/fundOeEvaluate').then((response)=>{
           
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          });
    },[])
   
    return(
        <div>
            <h2>OE EVALUATION</h2>
            <table className="listFundTable" cellPadding={15}>
                <thead>
                    <tr className="listFundMetaData">
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                        <th>HEI Name</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="listFundData">{row.map((data,index) => <tr >{data.status}</tr>)}</td>
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
            <h2>OE DASHBOARD</h2>
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
    const [popupinfo, setPopUpInfo] = useState();

    useEffect(()=>{ 
        Axios.get('http://localhost:3001/heiDashboard').then((response)=>{
            
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          })
    },[])

    return(
        <div>
            <tr><center><b><h2>HEI DASHBOARD</h2></b></center></tr>
            <table className="listHeiTable" border='2'cellPadding={15} cellSpacing={5}>
                <thead>
                    <tr className="listHeiMetaData">
                       {/* {column.map((head,index) => <td className="listHeiMetaData"><h3><b><center>{head.heading}</center></b></h3></td>)} */}
                       <th>HEI Name</th>
                       <th>Scheme ID</th>
                       <th>Scheme Name</th>
                       <th>Scheme Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sid}</h5></tr>)}</td>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sname}</h5></tr>)}</td>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sdate}</h5></tr>)}</td>
                        <td className="listHeiData">{row.map((data,index) => <tr ><h5>{data.sno}</h5></tr>)}</td>
                        <td className="listHeidData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpHeiDashboard trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpHeiDashboard>
        </div>
    )
}
export const ViewHeiProposal = () =>{

    const[row,setRow]=useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();
    
    useEffect(()=>{  
        Axios.get('http://localhost:3001/viewHeiPropo').then((response)=>{
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          });
    },[])

    return(
        <div className="proposaltable">
            <h2>HEI PROPOSALS</h2>
            <table className="listProposalTable" border='2'cellPadding={'15'} cellSpacing={'5'} color="blue">
                
                <thead>
                    <tr className="listProposalMetaData">
                        {/* {column.map((head,index) => <td className="listProposalMetaData"><h3><b><center>{head.heading}</center></b></h3></td>)} */}
                        <th>HEI Name</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="listProposalData">{row.map((data,index) => <tr><h5>{data.sid}</h5></tr>)}</td>
                        <td className="listProposalData">{row.map((data,index) => <tr><h5>{data.sname}</h5></tr>)}</td>
                        <td className="listProposalData">{row.map((data,index) => <tr><h5>{data.sdate}</h5></tr>)}</td>
                        <td className="listProposalData">{row.map((data,index) => <tr><h5>{data.sno}</h5></tr>)}</td>
                        <td className="listProposalData">{row.map((data,index) => <tr><h5></h5><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpViewHeiProposal trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpViewHeiProposal>
        </div>
    )
}