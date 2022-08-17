import { Axios } from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import './oeStyles.css';

const OeRegister = () => {

   const navigate = useNavigate();
   const [employeename, setEmployeeName] = useState("");
   const [companyname, setCompanyName] = useState("");
   const [companyemail, setCompanyEmail] = useState("");
   const [companycontact, setCompanyContact] = useState("");
   const [companyaddress, setCompanyAddress] = useState("");
   const [state, setState] = useState("");
   const [city, setCity] = useState("");
   const [pincode, setPinCode] = useState("");
   const [employeerole, setEmployeeRole] = useState("");
   const [verficationcode, setVerificationCode] = useState("");
   const [agencyname, setAgencyName] = useState("");
   const [passwd, setPasswd] = useState("");
   const [cnfrmpasswd, setCnfrmPasswd] = useState("");

   const submitValidate = (e) =>{
      //navigate('/');
   }

   return (
      <div className="registerDiv">
         <form className="registerForm" onSubmit={(e) => submitValidate(e)}>
            <table className="registerTable">
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
                        <input type="radio" value="india" name="country" defaultChecked disabled />&nbsp; India
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
                     <td>
                        <input type="checkbox" /> .......
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="submit" >Submit</button>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </form>
      </div>
   )

}

export default OeRegister