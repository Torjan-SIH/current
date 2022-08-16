import React from "react";
import { useState } from "react";
import './holderstyles.css'


 const HeiVerify = () =>{
    const column = [
        {heading: 'Name of HEI/Individual'},
        {heading: 'Mail'},
        {heading: 'Contact No'},
        {heading: 'Address'},
        {heading: 'Government Authorization Certificate'},
        {heading: 'Role'},

    ]
    const row = [
        {
            sname: 'hei1',
            smail: 'xyz',
            sno: 1,
            sadd:'abc',
            scert:'abc',
            srole:'a'
        },
        {
            sname: 'hei2',
            smail: 'xyz',
            sno: 2,
            sadd:'abc',
            scert:'abc',
            srole:'a'
        },
        {
            sname: 'hei3',
            smail: 'xyz',
            sno: 3,
            sadd:'abc',
            scert:'abc',
            srole:'a'
        },
    ]

    const [popupstatus, setPopUpStatus] = useState(false);
    const [popupinfo, setPopUpInfo] = useState();

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
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.sname}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.smail}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.sno}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.sadd}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.scert}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr >{data.srole}</tr>)}</td>
                        <td className="heiVerifyMetaData">{row.map((data,index) => <tr ><button key={index} onClick={() => {setPopUpStatus(true); setPopUpInfo(data)}}>view{data.sno}</button></tr>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     )
}
export default HeiVerify;