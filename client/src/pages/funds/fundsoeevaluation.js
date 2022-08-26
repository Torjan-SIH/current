import { React, useState, useEffect} from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import { ListFundOeEvaluation }from "../../components/ListView/listview";
import TopBar from "../../components/TopBar/topbar";
import Axios from 'axios'
import './fundsStyles.css';
import { NavBarMedium } from "../../components/Navbar";

const FundsOeEvaluation = () =>{

    const [name, setName] = useState("blank");

    useEffect(() => {
        Axios.get('http://localhost:3001/fundoe').then((response)=>{
            setName(response.data)
        })
    },[name])
    
    return(
        <div className="fundProfileDiv" >
            <div>
                <NavBarMedium/>
            </div>
            <div className="sideBySide">
                <FundSideBar name={name}/>
            </div>
            <div className="sideBySide">
                <div>
                    <ListFundOeEvaluation/>
                </div>
            </div>
        </div>
    )
}
export default FundsOeEvaluation;
            
        