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
          <center> <table>
               <tr>
            <input type="email" placeholder="Enter your registered mail ID" value={fEmail}  required onChange={(e) => setValue(e)}  name="forgotEmail"/>
            </tr>
            <tr>
            <input type="submit" name="forgotButton" value="submit" />
            </tr>
            </table></center> 
         </form>
      </div>
   )
}

export default ForgotPasswd