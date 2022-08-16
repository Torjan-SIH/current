import React from "react";
import { useState, useEffect } from "react";
import './oeStyles.css';

const OeRegister = () =>{
   
   const passwdlen = 8;
 
   const [firstName, setFirstName] = useState(null);
   const [lastName, setLastName] = useState(null);
   const [email, setEmail] = useState(null);
   const [roleInput, setRoleInput] = useState(null);
   const [addressInput, setAddressInput] = useState(null);
   const [passwdRegister, setPasswdRegister] = useState("");
   const [passwdConfirm, setPasswdConfirm] = useState("");
   const [validLength, setValidLength] = useState("");
   const [hasNumber, setHasNumber] = useState(null);
   const [upperCase, setUpperCase] = useState(null);
   const [lowerCase, setLowerCase] = useState(null);
   const [specialChar, setSpecialChar] = useState(null);
   const [match, setMatch] = useState(null);
   const [contactNo,setContactNo]=useState(null);
   
   
   const changeRegisterHandler=(e) =>{
      const{name} = e.target;
      if(name === "firstName")
      setFirstName(e.target.value);
      if(name === "lastName")
      setLastName(e.target.value); 
      if(name === "email")
      setEmail(e.target.value); 
      if(name === "address")
      setAddressInput(e.target.value);
      if(name === "contactNo")
      setContactNo(e.target.value);
      if(name === "role")
      setRoleInput(e.target.value);
      if(name === "password")
      setPasswdRegister(e.target.value);  
      if(name === "passwordcnfrm")
      setPasswdConfirm(e.target.value)
      
   }
   const validate=(e) =>{
      e.preventDefault();
   }
 
   useEffect(() => {
      setUpperCase(/[A-Z]/.test(passwdRegister));
      setLowerCase(/[a-z]/.test(passwdRegister));
      setHasNumber(/\d/.test(passwdRegister));
      setMatch(passwdRegister === passwdConfirm);
      setSpecialChar(/[!@#$&*-_+?,.]/.test(passwdRegister));
      setValidLength((passwdRegister.length >= 8)? true : false)
      },[passwdRegister, passwdConfirm, passwdlen]);

   return(
      <div className="oeregister">
      <form onSubmit={validate} className="oeform">
         <table className="tableRegister">
         <tr><th colSpan='2'><center><h2><b>OE REGISTER</b></h2></center></th></tr>
         <tr className="firstName">
            <th>
            <label className="firstNameLabel" for="firstName"><center><h5><b>First Name</b></h5></center></label>
            </th>
            <td>
            <input className="firstNameInput" type="text" name="firstName" id="oereg" placeholder="First Name" value={firstName} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="lastName">
            <th>
            <label className="lastNameLabel" for="lastName"><center><h5><b>Last Name</b></h5></center></label>
            </th>
            <td>
            <input className="lastNameInput" type="text" name="lastName" id="oereg" placeholder="Last Name" value={lastName} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="email">
            <th>
            <label className="emailLabel" for="email"><center><h5><b>Email</b></h5></center></label>
            </th>
            <td>
            <input className="emailInput" type="email" name="email" id="oereg" placeholder="Email" value={email} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="contactNo">
            <th>
            <label className="contactNoLabel" for="contactNo"><center><h5><b>Contact Number</b></h5></center></label>
            </th>
            <td>
            <input className="contactNoInput" type="contactNo" id="oereg" name="contactNo" placeholder="ContactNo" value={contactNo} minlength="10" maxlength="10"  required onChange = {(e) => changeRegisterHandler(e)}  ></input> 
            </td>
         </tr>
         <tr className="address">
            <th>
            <label className="addressLabel" for="address"><center><h5><b>Address</b></h5></center></label>
            </th>
            <td>
            <input className="addressInput" type="text" id="oereg" name="address" placeholder="Address" value={addressInput} required onChange = {(e) => changeRegisterHandler(e)} ></input>
            </td>
         </tr>
         <tr className="registerPassword">
            <th>
            <label className="registerLabel" for="passwdRegister"><center><h5><b>Password</b></h5></center></label>
            </th>
            <td>
            <input className="registerInput" type="password" id="oereg" name="password" value={passwdRegister} required onChange={(e) => changeRegisterHandler(e)}></input>
            </td>
         </tr>
         <tr className="confirmPassword">
            <th>
            <label className="confirmLabel" for="passwdConfirm"><center><h5><b>confirmPassword</b></h5></center></label>
            </th>
            <td>
            <input className="confirmInput" type="password" id="oereg" name="passwordcnfrm" value={passwdConfirm} required onChange={(e) => changeRegisterHandler(e)}></input>
            </td>
         </tr>
         <tr className="passwdWarning"> 
            <td>
            <ul>
               <li className="warn">
                  {hasNumber ? <span className="valid">Number[0-9]</span> : <span className="invalid">Number[0-9]</span>}
               </li>
               <li className="warn">
                  {upperCase ? <span className="valid">UpperCase[A-Z]</span> : <span className="invalid">UpperCase[A-Z]</span>}
               </li>
               <li className="warn">
                  {lowerCase ? <span className="valid">LowerCase[a-z]</span> : <span className="invalid">LowerCase[a-z]</span>}
               </li>
               <li className="warn">{match ? <span className="valid">Password Match</span> : <span className="invalid">Password Match</span>}</li>
               <li className="warn">
                  {validLength ? <span className="valid">Password Length </span> : <span className="invalid">Password Length</span>}
               </li>
               <li className="warn">
                  {specialChar ? <span className="valid">Symbols[!@#$&-_+?,.]</span> : <span className="invalid">Symbols[!@#$&-_+?,.]</span>}
               </li>
            </ul>
            </td>
         </tr><tr className="RegisterSubmit" ><td colSpan='2'>
         <div className="button" align="center">
         
            
            <button type="submit" align="center "className="RegisterSubmitButton" style={{background:"#191970",color:"#f5fffa"}} colspan="2">Register</button>
            </div></td>
         </tr>
         
      </table>
    </form>
    </div>

   )
}

export default OeRegister