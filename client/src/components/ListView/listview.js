import React from "react";
import { useState, useEffect } from "react";
import { PopUpViewScheme,  PopUpVerifyScheme, PopUpOeDashboard } from "./popup";
import Axios from "axios";


export const ListFundScheme = () =>{
    
    // const [metaData, setMetaData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    useEffect(() => {
        // Axios.get('http://localhost:3001/bokk').then((response) => {
        //     console.log(response.data);
        //     setMetaData(response.data);
        // });
        Axios.get('http://localhost:3001/fundscheme').then((response) => {
            console.log(response.data);
            setTableData(response.data);
        });
    })

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        {/* {metaData.map((head,index) => <td className="listFundMetaData">{head}</td>)} */}
                        <th>S.NO</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{index+1}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
          
            <PopUpViewScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpViewScheme>
        </div>
     )
}

//List component for Funds Dashboard page 

export const ListFundDashboard = () =>{
    
    const [tableData, setTableData] = useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    useEffect(() => {
        Axios.get('http://localhost:3001/funddashboard').then((response) => {
            console.log(response.data);
            setTableData(response.data);
        });
    })

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        <th>S.No</th>
                        <th>HEI Name</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                        {/* {metaData.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{index+1}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.heiname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpVerifyScheme trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpVerifyScheme>
        </div>
    )
}

export const ListFundOeEvaluation = () =>{

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/fundoeevaluation').then((response) => {
            console.log(response.data);
            setTableData(response.data);
        });
    })
    
    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        <th>S.No</th>
                        <th>HEI Name</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                        <th>Status</th>
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{index+1}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.heiname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.status}</tr>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const ListOeDashboard = () => {
    
    const [tableData, setTableData] = useState([]);
    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

    useEffect(() => {
        Axios.get('http://localhost:3001/oedashboard').then((response) => {
            console.log(response.data);
            setTableData(response.data);
        });
    })

    return(
        <div>
            <table className="listFundTable">
                <thead>
                    <tr className="listFundMetaData">
                        <th>S.No</th>
                        <th>HEI Name</th>
                        <th>Scheme ID</th>
                        <th>Scheme Name</th>
                        <th>Scheme Date</th>
                        {/* {column.map((head,index) => <td className="listFundMetaData">{head.heading}</td>)} */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{index+1}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.heiname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sid}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr >{data.sdate}</tr>)}</td>
                        <td className="listFundData">{tableData.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{index+1}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
            <PopUpOeDashboard trigger={popupstatus} setTrigger={setPopUpStatus} data={popupinfo}>this is popup</PopUpOeDashboard>
        </div>
    )
}