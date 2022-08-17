import React, { useEffect } from "react";
import { useState } from "react";
import { PopUpViewScheme,  PopUpVerifyScheme, PopUpOeDashboard , PopUpHeiDashboard ,PopUpViewHeiProposal} from "./popup";
import Axios from 'axios';

export const ListFundScheme = () =>{
    const column = [
        {heading: 'S.No'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
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
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const[row,setRow]=useState([]);
    
    useEffect(()=>
    {
        
        Axios.get('http://localhost:3001/fundsDashboard').then((response)=>{
            console.log("HEllo ")
            console.log(response.data);
            setRow(response.data);
            }).catch(err=>{
            console.log(err)
          });
     

    },[])

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
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
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
        {heading: 'Status'}
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
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
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)}
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
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
        {
            sno: 4,
            sid: 126,
            sname: 'scheme4',
            sdate: '4-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div>
            <tr><center><b><h2>HEI DASHBOARD</h2></b></center></tr>
            <table className="listHeiTable" cellPadding={20} cellSpacing={5}>
                <thead>
                    <tr className="listHeiMetaData">
                       {column.map((head,index) => <td className="listHeiMetaData"><h3><b><center>{head.heading}</center></b></h3></td>)}
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
    const column = [
        {heading: 'HEI Name'},
        {heading: 'Scheme ID'},
        {heading: 'Scheme Name'},
        {heading: 'Scheme Date'},
    ]
    const row = [
        {
            sno: 1,
            sid: 123,
            sname: 'scheme1',
            sdate: '1-1-22',
        },
        {
            sno: 2,
            sid: 124,
            sname: 'scheme2',
            sdate: '2-1-22',
        },
        {
            sno: 3,
            sid: 125,
            sname: 'scheme3',
            sdate: '3-1-22',
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    return(
        <div className="proposaltable">
            <center><h2>PROPOSALS</h2></center>
            <table className="listProposalTable" cellPadding={'30'} cellSpacing={'5'} >
                
                <thead>
                    <tr className="listProposalMetaData">
                        {column.map((head,index) => <td className="listProposalMetaData"><h3><b><center>{head.heading}</center></b></h3></td>)}
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