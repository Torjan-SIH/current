import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel, Navbar } from "react-bootstrap";
import "./pagesStyle.css";
import { NavBar } from "../components/Navbar";
import Footers from "../components/HeaderFooter/footer";



const Home = () => {

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="home">
        <div className="slideShowHome">
          <img className="d-block w-100" src="fundingrf.jpg" height="500" alt="First slide" />
        </div>

        <div className="marqueeScrollHome">
          <marquee className="marqueeHome" width="90%" direction="left" height="fit-content" scrollamount="10">
            One Nation - One Funding.
          </marquee>
        </div>

        <div className="illustrations">
          <div className="sideBySideHome">
            <img className="illustrate1" src="3.jpg" alt="illustrate" />
            <p><h4><b>HEI's analyse the funding requirmensts
              of Institution.</b></h4></p>
          </div>
          <div className="sideBySideHome">
            <img className="illustrate2" src="IMG_1174.PNG" />
            <p><h4><b>Agencies provide the funding</b></h4></p>
          </div>
        </div>

        <div className="sketchs">
          <div className="sketch-1">
            <img className="sketch1" src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/Slider/instructor.png" alt="" />
          </div>
          <div className="sketch-1">
            <h4 className="sketch-1">The institutions should analyse the needs of the institution and  along with the funds to be raised</h4>
          </div>
          <div className="sketch-2">

            <h4><b>The required documenataion must be prepared and submitted in the form of document.</b></h4>
          </div>

          <div className="sketch-2">
            <img className="sketch2" src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/Slider/credits_transfer.png" alt="" />
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
      <div>
        <Footers />
      </div>
    </div>
  )
}

export default Home
/* <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg" height="500"  alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg" height="500" alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg" height="500"  alt="Third slide"/>
            </Carousel.Item>
          </Carousel>*/