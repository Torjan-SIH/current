import React from "react";
import { useState, useEffect } from "react";

const HeiRegister = () =>{
   
   const passwdlen = 8;
 
   const [NameOfInstitution, setNameOfInstitution] = useState(null);
   const [email, setEmail] = useState(null);
   const [GovernmentAuthorizationCertification, setGovernmentAuthorizationCertification] = useState(null);
   const [addressInput, setAddressInput] = useState(null);
   const [passwdRegister, setPasswdRegister] = useState("");
   const [roleInput, setRoleInput] = useState(null);
   const [passwdConfirm, setPasswdConfirm] = useState("");
   const [validLength, setValidLength] = useState("");
   const [hasNumber, setHasNumber] = useState(null);
   const [upperCase, setUpperCase] = useState(null);
   const [lowerCase, setLowerCase] = useState(null);
   const [specialChar, setSpecialChar] = useState(null);
   const [match, setMatch] = useState(null);
   const [contactNo,setContactNo]=useState(null);
   const [dateOfAuthorization,setdateOfAuthorization]=useState(null);
   
   
   const changeRegisterHandler=(e) =>{
      const{name} = e.target;
      if(name === "NameOfInstitution")
      setNameOfInstitution(e.target.value);
      if(name === "GovernmentAuthorizationCertification")
      setGovernmentAuthorizationCertification(e.target.value); 
      if(name === "email")
      setEmail(e.target.value); 
      if(name === "address")
      setAddressInput(e.target.value);
      if(name === "contactNo")
      setContactNo(e.target.value);
      if(name === "dateOfAuthorization")
      setdateOfAuthorization(e.target.value)
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
      <div className="heiregister">
      <form onSubmit={validate} className="heiform">
         <table className="tableRegister">
         <tr><th colSpan='2'><center><b><h2>HEI REGISTER</h2></b></center></th></tr>
         <tr className="firstName">
            <th>
            <label className="firstNameLabel" for="NameOfInstitution"><center><h5><b>Name of Institution</b></h5></center></label>
            </th>
            <td>
            <input className="firstNameInput" type="text" id="heireg" name="NameOfInstitution" placeholder="NameOfInstitution" value={NameOfInstitution} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="email">
            <th>
            <label className="emailLabel" for="email"><center><h5><b>Email</b></h5></center></label>
            </th>
            <td>
            <input className="emailInput" type="email" id="heireg" name="email" placeholder="Email" value={email} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="contactNo">
            <th>
            <label className="contactNoLabel" for="contactNo"><center><h5><b>Contact Number</b></h5></center></label>
            </th>
            <td>
            <input className="contactNoInput" type="contactNo" name="contactNo" id="heireg" placeholder="ContactNo" value={contactNo} minlength="10" maxlength="10"  required onChange = {(e) => changeRegisterHandler(e)}  ></input> 
            </td>
         </tr>
         <tr className="address">
            <th>
            <label className="addressLabel" for="address"><center><h5><b>Address</b></h5></center></label>
            </th>
            <td>
            <input className="addressInput" type="text" name="address" id="heireg" placeholder="Complete Address" value={addressInput} required onChange = {(e) => changeRegisterHandler(e)} ></input>
            </td>
         </tr>
         
            <tr className="lastName">
            <th>
            <label className="lastNameLabel" for="GovernmentAuthorizationCertification"><center><h5><b>Government Authorized Certificate</b></h5></center></label>
            </th>
            <td>
            <input className="lastNameInput" type="text" id="heireg" name="GovernmentAuthorizationCertification" placeholder="Government Authorized Certificate" value={GovernmentAuthorizationCertification} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="dateOfAuthorization">
            <th>
            <label className="dateOfAuthorization" for="dateOfAuthorization"><center><h5><b> Date of Authorization</b></h5></center></label>
            </th>
            <td>
            <input className="authorizationInput" type="dateOfAuthorization" id="heireg" name="dateOfAuthorization" placeholder="date of Authorization" value={dateOfAuthorization} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="registerPassword">
            <th>
            <label className="registerLabel" for="passwdRegister"><center><h5><b>Password</b></h5></center></label>
            </th>
            <td>
            <input className="registerInput" type="password" id="heireg" name="password" value={passwdRegister} required onChange={(e) => changeRegisterHandler(e)}></input>
            </td>
         </tr>
         <tr className="confirmPassword">
            <th>
            <label className="confirmLabel" for="passwdConfirm"><center><h5><b>confirmPassword</b></h5></center></label>
            </th>
            <td>
            <input className="confirmInput" type="password" id="heireg" name="passwordcnfrm" value={passwdConfirm} required onChange={(e) => changeRegisterHandler(e)}></input>
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
                  {specialChar ? <span className="valid">Symbols[!@#$&-+?,.]</span> : <span className="invalid">Symbols[!@#$&-+?,.]</span>}
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

export default HeiRegister