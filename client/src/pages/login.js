import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { PopUpSelectRoles } from "../components/ListView/popup";
import './pagesStyle.css';

const Login = () =>{
   
   const [popupstatus, setPopUpStatus] = useState(false);
   
   const [userLogin, setUserLogin] = useState(null);
   const [passwdLogin, setPasswdLogin] = useState("");
   const [roleLogin, setRoleLogin] = useState(null);
   const [validPasswd, setValidPasswd] = useState(null);
   
   const changeLoginHandler = (e) =>{
      const{name} = e.target;
      if(name === "username")
         setUserLogin(e.target.value);
      if(name === "password")
         setPasswdLogin(e.target.value);
      if(name === "role")
         setRoleLogin(e.target.value);
      }
   
   useEffect(() =>{
      setValidPasswd((passwdLogin.length >= 8)? true : false)
   },[passwdLogin])

   const submitLoginHandler = (e) =>{
      e.preventDefault();
         
   }

   

   return(
      <body className="loginb">




      <div class="contactform"><center>
         <form onSubmit={submitLoginHandler} className="myform">
            <table className="loginTable" >
               <tr>
                  <th><center><h2><b>LOG IN</b></h2></center></th>
               </tr>
               <tr className="loginItem" >
                  <td >
                     <input className="loginInput"  type="email" name="username" placeholder="Username"value={userLogin} required onChange = {(e) => changeLoginHandler(e)} ></input> 
                  </td>
               </tr>
               <tr className="loginItem">
                  <td >
                     <input className="loginInput" type="password" placeholder="Password" name="password" value={passwdLogin} required onChange = {(e) => changeLoginHandler(e)}></input>
                  </td>
               </tr>
               <tr className="loginItem">
                  <td>
                     <select className="loginInput" name="role" value={roleLogin} required onChange={(e) => changeLoginHandler(e)} > 
                     <option name="role" value="">--Role--</option>
                     <option name="role" value="agencies" >Agencies</option>
                     <option name="role" value="hei" >HEI's</option>
                     <option name="role" value="oe" >OE's</option>
                     </select>
                  </td>
                </tr>
               <tr>
                  <td>
                     <center>
                        {validPasswd ? <span className="valid">Password Length</span> : <span className="invalid">Password Length</span>}
                     </center>
                  </td>
               </tr>
               <tr className="loginSubmit" >
                  <td >
                     <center>
                        <button type="submit" className="loginSubmitButton"> Login</button> 
                     </center>
                  </td>
               </tr> 
               <tr className="forgotPasswd">
                  <td>
                     <center>
                        <Link to="/forgotpasswd" ><p style={{color:"black"}}>Forgot Password?</p></Link>
                     </center>
                  </td>
               </tr>
               <tr className="loginRegister">
                  <td >
                     <center>
                        <h5>Don't have an account?</h5>
                        {/* <h4><Link to="/register" onClick={() => setPopUpStatus(true)}><p>Sign-up</p></Link></h4> */}
                        <h4 onClick={() => setPopUpStatus(true)}><a href="#/">Sign-Up</a></h4>
                     </center>
                  </td>       
               </tr>
            </table>
         </form> 
      </center>


      <PopUpSelectRoles trigger={popupstatus} setTrigger={setPopUpStatus}/>
   </div> 
</body>
   )
   
}

export default Login