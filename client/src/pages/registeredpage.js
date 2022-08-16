import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const  Registered = () =>{
  return (
   <div className='registeredPage'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/tick-mark-icon-flat-illustration-check-mark-vector-tick-mark-icon-flat-illustration-check-mark-vector-164317151.jpg/50px180" />
      <Card.Body>
        <Card.Title><h3>Successfully Registered</h3></Card.Title>
        <Card.Text>
          Please check your registered email<br></br>
          for email verification
        </Card.Text>
        <Button variant="primary" style={{backgroundColor: "green"}}>Continue</Button>
      </Card.Body>
    </Card>
    </div>
  );
 }

 export default Registered;