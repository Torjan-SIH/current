import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavBarMedium } from "../../components/Navbar";

const AdminDash = () =>{

    const [heicount, setHeiCount] = useState(0);
    const [agencycount, setAgencyCount] = useState(0);
    const [oecount, setOeCount] = useState(0);

    useEffect(()=>{
        Axios.get('http://localhost:3001/admindashboard',{

        }).then((response)=>{
          setAgencyCount(response.data.a);
          setHeiCount(response.data.h);
          setOeCount(response.data.o);
            
        })
    },[])
    
    return(
        <div>
            
            <div className="dashContent">
                <div>
                    <h1>{heicount}</h1>
                    <h1>HEI</h1>
                </div>
                <div>
                    <h1>{agencycount}</h1>
                    <h1>Agency</h1>
                </div>
                <div>
                    <h1>{oecount}</h1>
                    <h1>OE</h1>
                </div>
            </div>
        </div>
    )
}
export default AdminDash