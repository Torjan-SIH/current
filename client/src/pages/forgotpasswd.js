import React, { useState } from "react";

const ForgotPasswd = () =>{
   const [fEmail,setfEmail]=useState(null);
   const setValue =(e) =>
   {
      setfEmail(e.target.value);
   }
   const submitForgotpassword =(e) =>
   {
      e.preventDefault();
     
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
               <input type="email" className="loginInput2" placeholder="Enter your registered mail ID" value={fEmail}  required onChange={(e) => setValue(e)}  name="forgotEmail"/>
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