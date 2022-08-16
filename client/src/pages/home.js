import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import "./pagesStyle.css";



const Home = () =>{
    
  return(
      <div className="home">
        <div className="slideShowHome">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg" height="500"  alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg" height="500" alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg" height="500"  alt="Third slide"/>
            </Carousel.Item>
          </Carousel>
        </div>
        
        <div className="marqueeScrollHome">
          <marquee className="marqueeHome" width="90%" direction="left" height="fit-content" scrollamount="10">
            One Nation - One Funding.
          </marquee>
        </div>
        
        <div className="illustrations">
          <div className="sideBySideHome">
            <img className="illustrate1" src="https://designstripe-secure.imgix.net/scene-snapshots/40951b2b-d4a7-4213-97ae-da4d222fbc0b/1646878019817/default?auto=format&h=1080&s=7074fd3d0446697132b5646f33fb1535" alt="illustrate"/>
            <p>Enter any content about HEI</p>
          </div>
          <div className="sideBySideHome">
            <img className="illustrate2" src="https://designstripe-secure.imgix.net/scene-snapshots/67d64904-5447-4f7a-a19f-9a12e14e0a5e/1637162893425/default?auto=format&h=1080&s=8c487a2fcc02c87ca1fc7cbc3d3d8799" alt="illustrate"/>
            <p>Enter any content about Agencies</p>
          </div>
        </div>

        <div className="sketchs">
          <div className="sketch-1">
            <h3>Best-in-Class</h3>
            <h2>--Enter any content--</h2>
          </div>
          <div className="sketch-1">
            <img className="sketch1" src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/Slider/instructor.png" alt=""/>
          </div>

          <div className="sketch-2">
            <img className="sketch2" src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/Slider/credits_transfer.png" alt=""/>
          </div>
          <div className="sketch-2">
            <h2>With knowledge and skills.</h2>
            <h2>--Enter any content--</h2>
          </div>
        </div>

        <center>
          <div className="adiv">
            <table cellPadding={'80'}>
              <tr>
                <td colSpan={'3'}>
                  <center><h3><b>Poweredby or Supportedby</b> </h3></center>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/NC_logo/AICTE_logo_128.png" alt="Go to AICTE" width="200px" height="200px"></img>
                </td>
                <td>
                  <img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/NC_logo/UGC_logo_128.png" alt="Go to UGC" width="200px" height="200px"></img>      
                </td>
                <td>
                  <img src="https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png" alt="Go to AICTE" width="400px" height="150px" ></img>
                </td>
              </tr> 
            </table> 
          </div>
        </center>
      </div>
  )
}

export default Home