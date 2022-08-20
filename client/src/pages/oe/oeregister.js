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
      const ist = new Date();
      const date = `${ist.getFullYear()}/${ist.getMonth()+1}/${ist.getDate()}`;
      setDOR(date)
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
            <div className="termsBox">
               <center><h3 className="t_c_head">TERMS AND CONDITIONS</h3></center>
               <ul className="termsList">
                  <li className="t_c">Terms and conditions are part of a that ensure parties understand theircontractual rights and obligations.</li>
                  <li className="t_c">They set important boundaries that all contract principals must uphold.</li>
                  <li className="t_c">Each User shall only register once.</li>
                  <li className="t_c"> The User shall register online to become a Member of Climanosco.</li>
                  <li className="t_c">Each User shall only register once.</li>
                  <li className="t_c">They set important boundaries that all contract principals must uphold.</li>
               </ul>
            </div>
         </div>
         <div className="registerDiv">
            <form className="registerForm" onSubmit={(e) => submitValidate(e)}>
            <center><h1>OE REGISTRATION</h1></center>
               <table className="registerTable" cellPadding={15}>
                  <tbody>
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
                           <input className="registerInputField" type="text" name="employeename" pattern="[A-Za-z\s]{2,}" required placeholder="Name of Employee" 
                              onChange={(e) => setEmployeeName(e.target.value)} />
                        </td>
                     </tr>
                     <tr >
                        <td colSpan={2}>
                           <input className="registerInputField" type="text" name="companyname" pattern="[A-Za-z\s]{2,}" required placeholder="Name of Company"
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
                           <input className="registerInputField" type="text" name="state" placeholder="State" required
                              onChange={(e) => setState(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="city" placeholder="City/Town" required
                              onChange={(e) => setCity(e.target.value)} />
                        </td>
                     </tr>
                     {/* <tr>
                         <td>
                           <input className="registerInputField" name="pincode" type="text" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Pincode" required
                              onChange={(e) => setPinCode(e.target.value)} />
                        </td> 
                     </tr> */}
                     <tr>
                        <td>
                           <input className="registerInputField" type="text" name="verificationcode" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Verfication Code" required
                              onChange={(e) => setVerificationCode(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="agencyname" pattern="[A-Za-z\s]{2,}" required placeholder="Name of Agency"
                              onChange={(e) => setAgencyName(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input type="password" className="registerInputField" placeholder="Create Password" name="passwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              onChange={(e) => setPasswd(e.target.value)} />
                        </td>
                        <td>
                           <input type="password" className="registerInputField" placeholder="Create Password" name="cnfrmpasswd"
                              onChange={(e) => setCnfrmPasswd(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <p>{(passwd !== cnfrmpasswd) ? "Password Doesn't Match" : ""}</p>
                     </tr>
                  </tbody>
                  <tfoot>
                     <tr>
                        <td colSpan={2}>
                           <input className="check" type="checkbox" /> I have read and accept the Terms of Service & Privacy Policy
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <button type="reset" className="formButton">Clear</button>
                        </td>
                        <td>
                           <button type="submit" className="formButton">Submit</button>
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