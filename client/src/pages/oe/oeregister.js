import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { NavBarSmall } from "../../components/Navbar";
import './oeStyles.css';


const OeRegister = () => {

   const navigate = useNavigate();
   const [employeename, setEmployeeName] = useState("");
   const [employeerole, setEmployeeRole] = useState("");
   const [companyname, setCompanyName] = useState("");
   const [companyemail, setCompanyEmail] = useState("");
   const [companycontact, setCompanyContact] = useState("");
   const [companyaddress, setCompanyAddress] = useState("");
   const [country, setCountry] = useState("india");
   const [state, setState] = useState("");
   const [city, setCity] = useState("");
   const [pincode, setPinCode] = useState("");
   const [verficationcode, setVerificationCode] = useState("");
   const [agencyname, setAgencyName] = useState("");
   const [passwd, setPasswd] = useState("");
   const [cnfrmpasswd, setCnfrmPasswd] = useState("");
   const [dor, setDOR] = useState();
   const [userstatus, setUserStatus] = useState("");

   const submitValidate = (e) =>{
      e.preventDefault();
      setDOR(Date());
      Axios.post('http://localhost:3001/oeregister',{
         employeename: employeename,
         employeerole: employeerole,
         companyname: companyname,
         companyemail: companyemail,
         companycontact: companycontact,
         companyaddress: companyaddress,
         country: country,
         state: state,
         city: city,
         pincode: pincode,
         verficationcode: verficationcode,
         agencyname: agencyname,
         passwd: passwd,
         dor:dor,
         userstatus:userstatus,
      }).then((response) => {
         console.log(response.data);
         if(response.data==="inserted1")
            navigate('/registeredpage');
         else if(response.data==="Error")
            alert("Technical error Failed to Register");
         else
            alert("Something Went Wrong");
         });
   };

   return (
      <div className="mainDiv">
         <div>
            <NavBarSmall/>
         </div>
         <div className="termsDiv">
            <table className="registerTable1" >
            <th ><h1><b>TERMS AND CONDITIONS</b></h1></th>
                           <tr><h3><i>
                              <br></br>
                           ➢Terms and conditions are part of a that ensure parties understand their<br></br>
                           contractual rights and obligations.<br></br>
                           <br></br>
                           ➢Parties draft them into a legal contract, also called a legal agreement,<br></br>
                           in accordance with local, state,<br></br>
                           and federal contract laws.<br></br>
                           <br></br>
                           ➢They set important boundaries that all contract principals must uphold.<br></br>
                           <br></br>
                           ➢Each User shall only register once.<br></br>
                           <br></br>
                           ➢The User shall register online to become a Member of Climanosco.<br></br>
                           <br></br>
                           ➢Terms and conditions are part of a that ensure parties understand their<br></br>
                           contractual rights and obligations.<br></br>
                           <br></br>
                           ➢Parties draft them into a legal contract, also called a legal agreement,<br></br>
                           in accordance with local, state,<br></br>
                           and federal contract laws.<br></br>
                           <br></br>
                           ➢They set important boundaries that all contract principals must uphold.<br></br>
                           <br></br>
                           ➢Each User shall only register once.<br></br>
                           <br></br>
                           ➢The User shall register online to become a Member of Climanosco.<br></br>
                           <br></br>
                           ➢Terms and conditions are part of a that ensure parties understand their<br></br>
                           contractual rights and obligations.<br></br>
                           <br></br>
                           ➢Parties draft them into a legal contract, also called a legal agreement,<br></br>
                           in accordance with local, state,<br></br>
                           and federal contract laws.<br></br>
                           <br></br>
                           ➢They set important boundaries that all contract principals must uphold.<br></br>
                           <br></br>
                           ➢Each User shall only register once.<br></br>
                           <br></br>
                           ➢The User shall register online to become a Member of Climanosco.<br></br>
                           <br></br></i></h3>
                           </tr>        
            </table>
         </div>
         <div className="registerDiv">
            <form className="registerForm" onSubmit={(e) => submitValidate(e)}>
               <table className="registerTable" cellPadding={15}>
                  <tbody>
                     <tr >
                        <td colSpan={2}>
                           <input className="registerInputField" type="text" name="employeename" pattern="[A-Za-z]{2,}" required placeholder="Name of Employee" 
                              onChange={(e) => setEmployeeName(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <th>
                           Employee Role
                        </th>
                        <td>
                           <select name="employeerole" onChange={(e) => setEmployeeRole(e.target.value)}>
                              <option value="null">-select-</option>
                              <option value="employee">Employee</option>
                              <option value="manager">Manager</option>
                           </select>
                        </td>
                     </tr>
                     <tr >
                        <td colSpan={2}>
                           <input className="registerInputField" type="text" name="companyname" pattern="[A-Za-z]{2,}" required placeholder="Name of Company"
                              onChange={(e) => setCompanyName(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="email" name="companyemail" required placeholder="Company Email"
                              onChange={(e) => setCompanyEmail(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="companycontact" maxLength={10} minLength={10} pattern="[789][0-9]{9}" required placeholder="Company Contact no."
                              onChange={(e) => setCompanyContact(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input className="registerInputField" id="addressField" type="text" name="companyaddress" required placeholder="Office Address"
                              onChange={(e) => setCompanyAddress(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input type="radio" className="radio" value="india" name="country" defaultChecked disabled />&nbsp; India
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="state" placeholder="State" required
                              onChange={(e) => setState(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="text" name="city" placeholder="City/Town" required
                              onChange={(e) => setCity(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" name="pincode" type="text" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Pincode" required
                              onChange={(e) => setPinCode(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="text" name="verificationcode" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Verfication Code" required
                              onChange={(e) => setVerificationCode(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="agencyname" pattern="[A-Za-z]{2,}" required placeholder="Name of Agency"
                              onChange={(e) => setAgencyName(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input type="password" className="registerInputField" placeholder="Create Password" name="passwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              onChange={(e) => setPasswd(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input type="password" className="registerInputField" placeholder="Create Password" name="cnfrmpasswd"
                              onChange={(e) => setCnfrmPasswd(e.target.value)} />
                        </td>
                        <p>{(passwd !== cnfrmpasswd) ? "Password Doesn't Match" : ""}</p>
                     </tr>
                  </tbody>
                  <tfoot>
                     <tr>
                        <td colSpan={2}>
                        <h3><input className="check" type="checkbox" /> I have read and accept the Terms of Service & Privacy Policy</h3>
                        </td>
                     </tr>
                     <tr>
                        <td>
                        <button type="submit" className="registerSubmitButton">Submit</button>
                        </td>
                     </tr>
                  </tfoot>
               </table>
            </form>
         </div>
      </div>
   )

}

export default OeRegister