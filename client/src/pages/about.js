import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pagesStyle.css";



const About = () =>{
    
  return(
    <body className="about">
      <div className="div1" align="center">
        <center className="centerabout">ABOUT US</center>
      </div>
    <div>
    <br></br>
      <br></br>
    <div className="about1">
     <p className="aboutpara">" The main motto of this scheme is to provide the funds for the better use of education systems and build our nation "</p>
    </div>
    <br></br>
    <br></br>
      {/* <center><h3 className="abouth">" Education should be one of the top financing priorities; talking about it doesn't assist the teachers and children who sorely need promises kept. "</h3></center> */}

      

      <b className="success" align="left">Success Stories</b>

      <div className="flipcards"> 
        
      <br></br>     
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img  className="flip" src="https://images.pexels.com/photos/1571673/pexels-photo-1571673.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.png" alt="hello" width={'300px'} height={'300px'}></img>
            </div>
            <div class="flip-card-back">
              <h2>Faculty funds</h2>
              <br></br>
              <h3>The funds are provided for incomes of the salaries</h3> 
            </div>
          </div>
        </div>


        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">hello</div>
            <div class="flip-card-back">
              <h1>INFRA STRUCTURE</h1> 
              </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">hello</div>
            <div class="flip-card-back">
              <h1>LABORATORY</h1> 
            </div>
          </div>
        </div>
      </div>

      <br></br><br></br>

      
      </div>
      </body>
  )
}

export default About;