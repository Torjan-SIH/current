import { React, useState, useEffect } from "react";
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import { CardHeiExplorer } from "../../components/CardView/cardview";
import Axios from 'axios';
import TopBar from "../../components/TopBar/topbar";
import { NavBarMedium} from "../../components/Navbar/index";


const HeiExplorer = () => {
  
  const [name, setName] = useState("blank");

    useEffect(() => {
        Axios.get('http://localhost:3001/heiexplore').then((response)=>{
            setName(response.data)
        })
    },[name])

  return(
    <div className="heiExploreDiv">
      <TopBar/>
      <div>
          <NavBarMedium/>
      </div>
      <div className="sideBySide">
        <HeiSideBar />
      </div>
      <div className="sideBySide">
        <CardHeiExplorer/>
      </div>
    </div>
  )
}
export default HeiExplorer;