import { React, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { PopUpFundCard, PopUpHeiCard } from "./popupcard";

export const CardHeiExplorer= ()=>{
  const HeiSchemeInfo=[
    {sname:"Hostel Scheme ",
    sid: 1,
    sdesc:"useful for hostel students",
    fund:10000
    },
    {sname:"canteen Scheme ",
    sid: 1,
    sdesc:"useful for hostel students",
    fund:1000
    },
    {sname:"Hotel Scheme ",
    sid: 5,
    sdesc:"useful for hostel students",
    fund:100000
    },
  ];  

  const [popupstatus, setPopUpStatus] = useState(false);

  const HeiCard = (card,index) => {
    return(
         <div>
            <Card  style={{ width: "25rem" }} key={index} >
              <Card.Body>
                <Card.Title><h6>Scheme Name:</h6>{card.sname}</Card.Title>
                <Card.Text>Scheme ID:{card.sid}</Card.Text>
                <Card.Text>Scheme Description:{card.sdesc}</Card.Text>
                <Card.Text>Fund:{card.fund}</Card.Text>
                <Button variant="primary" onClick={() => setPopUpStatus(true)}>Apply</Button>
              </Card.Body>
            </Card>
          </div>
      )
  }
  return (
    <div className="heiExplorer">
      {HeiSchemeInfo.map(HeiCard)}
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
        {pname:"canteen Scheme ",
        pid: 202,
        pdesc:"useful for hostel students",
        rfund:1000
        },
        {pname:"Hotel Scheme ",
        pid: 203,
        pdesc:"useful for hostel students",
        rfund:100000
        },
     ]; 
    
    const [popupstatus, setPopUpStatus] = useState(false);

    const FundCard = (card,index) => {
          return(
             <div>
                <Card  style={{ width: "25rem" }} key={index} >
                  <Card.Body>
                    <Card.Title><h6>Proposal Name:</h6>{card.pname}</Card.Title>
                    <Card.Text>Proposal ID:{card.pid}</Card.Text>
                    <Card.Text>proposal Description:{card.pdesc}</Card.Text>
                    <Card.Text>Required Fund:{card.rfund}</Card.Text>
                    <Button variant="primary" onClick={() => setPopUpStatus(true)}>View</Button>
                  </Card.Body>
                </Card>
              </div>
          )
        }
    return (
        <div >
            {HeiOwnSchemeInfo.map(FundCard)}
            <PopUpFundCard trigger={popupstatus} setTrigger={setPopUpStatus} />
        </div>
      );
}
  

