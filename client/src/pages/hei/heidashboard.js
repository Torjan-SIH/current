import { React, useEffect, useState } from "react";
import { ListHeiDashboard } from "../../components/ListView/listview";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import TopBar from "../../components/TopBar/topbar";
import Axios from 'axios';
import './heiStyles.css';
import { NavBarMedium} from "../../components/Navbar/index";

const HeiDashBoard = () => {

    const [name, setName] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3001/heidashboard').then((response)=>{
            setName(response.data)
        })
    },[name])

    return(  
        <div className="heiProfileDiv">
            <TopBar/>
            <div>
                <NavBarMedium/>
            </div>
            <div className="sideBySide">
                <HeiSideBar/>
            </div>
            <div className="sideBySide">
                <ListHeiDashboard/>
            </div>
        </div>
                
    )
}
export default HeiDashBoard;

