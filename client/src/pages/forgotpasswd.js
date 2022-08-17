import React, { useState } from "react";
import  Axios from "axios";


const ForgotPasswd = () =>{
   const [fEmail,setfEmail]=useState(null);
   const [frole,setfRole]=useState("");
  
   const submitForgotpassword =(e) =>
   {
      e.preventDefault();
      console.log("in submit");
      Axios.post('http://localhost:3001/forgotpage',{
        email:fEmail,
         role:frole
       }).then((response)=>{
         if(response.data.message){
            console.log("mail sent"); 
            alert("check your mail") //you have to display "check your mails"
         }
         else if(response.data.wrong){
            console.log("mail wasn't sent"); //you have to display "an error occured"
         }
         else if(response.data.noone){
            console.log("check your email"); //you have to display "wrong email"
         }
         else
         {
            console.log(response.data[0].password);
         }
         
         
       });
     
   }
   return(
      <div className="forgotPassword" >
         <form className="forgotPwd" onSubmit={submitForgotpassword}>
          <center> <table border="1" className="forgottable">
            <tr cellpadding={'10'}><td>
            <center><b className="trouble">Trouble Logging In?</b></center>
            </td></tr>
            <br></br>
            <tr><td><center>
            <h5>Enter your registered email and we'll send you a link to get back into your account.</h5>
            </center></td></tr>
            <br></br>
            <tr><td><center>
               <input type="email" className="loginInput2" placeholder="Enter your registered mail ID" value={fEmail}  required onChange={(e) => setfEmail(e.target.value)}  name="forgotEmail"/>
            </center></td></tr>
            <br></br>
            <br></br>
            <tr><td><center>
            <select className="loginInput" name="role" value={frole} required onChange={(e) => setfRole(e.target.value)} > 
                     <option name="role" value="">--Role--</option>
                     <option name="role" value="agencies" >Agencies</option>
                     <option name="role" value="hei" >HEI's</option>
                     <option name="role" value="oe" >OE's</option>
                     </select>
            </center></td></tr>
            <br></br>
            <tr><td><center>
               <input type="submit" className="forgotbutton2" name="forgotButton" value="submit" />
            </center></td></tr>
            </table></center> 
         </form>
      </div>
   )
}

export default ForgotPasswd