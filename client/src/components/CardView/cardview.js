import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PopUpFundCard, PopUpHeiCard } from "./popupcard";
import './cardviewstyles.css';
import { Axios } from "axios";

export const CardHeiExplorer= ()=>{
  
  const [heiexplorerinfo, setHeiExploreInfo] = useState("")

  // useEffect(()=>{
  //   Axios.get('http://localhost:3001/heiexplorer').then((response)=>{  
  //     setHeiExploreInfo(response.data);
  //     }).catch(err=>{
  //     console.log(err)
  //   });
  // },[])

  const [popupstatus, setPopUpStatus] = useState(false);

  const HeiCard = (card,index) => {
    return(
         <div>
          <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card className="cardExplorer"  style={{ width: "25rem" }} key={index} >
              <Card.Body>
                <Card.Title><h6>Scheme Name:</h6>{card.sname}</Card.Title>
                <Card.Text>Scheme ID:{card.sid}</Card.Text>
                <Card.Text>Scheme Description:{card.sdesc}</Card.Text>
                <Card.Text>Fund:{card.fund}</Card.Text>
                <Button variant="primary" onClick={() => setPopUpStatus(true)}>Apply</Button>
              </Card.Body>
            </Card>
             </Col>
             ))}
           </Row>
          </div>
      )
  }
  return (
    <div className="gridLayout">
      {/* {heiexplorerinfo.map(HeiCard)} */}
      <PopUpHeiCard setTrigger={setPopUpStatus} trigger={popupstatus} />
    </div>
  );
}

export const CardFundExplorer = () =>{
    const HeiOwnSchemeInfo=[
     
        {pname:"Hostel Scheme ",
        pid: 200,
        pdesc:"useful for hostel students",
        rfund:10000
        },
        {pname:"VVIT Scheme ",
        pid: 300,
        pdesc:"useful for college students",
        rfund:20000
        },
        {pname:"Engineering Scheme ",
        pid: 400,
        pdesc:"useful for college students",
        rfund:20000
        },
        {pname:"College Scheme ",
        pid: 500,
        pdesc:"useful for college students",
        rfund:20000
        },
     ]; 
    
    const [popupstatus, setPopUpStatus] = useState(false);

    const FundCard = (card,index) => {
          return(
             <div className="fundCard">
             <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
                <Card  style={{ width: "25rem" }} key={index}>
                  <Card.Body>
                    <Card.Title><h6>Proposal Name:</h6>{card.pname}</Card.Title>
                    <Card.Text>Proposal ID:{card.pid}</Card.Text>
                    <Card.Text>proposal Description:{card.pdesc}</Card.Text>
                    <Card.Text>Required Fund:{card.rfund}</Card.Text>
                    <Button variant="primary" onClick={() => setPopUpStatus(true)}>View</Button>
                  </Card.Body>
                </Card>
               </Col>
             ))}
      </Row>
              </div>
          )
        }
    return (
        <div className="gridLayout">
            {HeiOwnSchemeInfo.map(FundCard)}
            <PopUpFundCard trigger={popupstatus} setTrigger={setPopUpStatus} />
        </div>
      );
}