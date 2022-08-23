import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PopUpHeiCard } from "./popupcard";
import './cardviewstyles.css';
import Axios from "axios";

export const CardHeiExplorer= ()=>{
  
  const [heiexplorerinfo, setHeiExploreInfo] = useState([])
  const [popupstatus, setPopUpStatus] = useState(false);
  const [popupdata, setPopUpData] = useState();

  useEffect(()=>{
    Axios.get('http://localhost:3001/heiexplorecard').then((response)=>{  
        setHeiExploreInfo(response.data);
      }).catch(err=>{
      console.log(err)
    });
  },[])


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
                      {/* <Card.Text>Scheme Description:{card.sdesc}</Card.Text> */}
                      <Card.Text>Agency:{card.aname}</Card.Text>
                      <Button variant="primary" onClick={() => {setPopUpStatus(true); setPopUpData(card)}}>Apply{index+1}</Button>
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
      {heiexplorerinfo.map(HeiCard)}
      <PopUpHeiCard setTrigger={setPopUpStatus} trigger={popupstatus} data={popupdata}/>
    </div>
  );
}
