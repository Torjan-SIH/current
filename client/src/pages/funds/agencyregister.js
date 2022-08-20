import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { NavBarSmall } from "../../components/Navbar";
import Axios from 'axios';
import './fundsStyles.css';

const AgencyRegister = () => {
   
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [contact, setContact] = useState("");
   const [address, setAddress] = useState("");
   // const [country, setCountry] = useState("india");
   const [state, setState] = useState("");
   const [city, setCity] = useState("");
   const [pincode, setPinCode] = useState("");
   const [estdate, setEstDate] = useState("");
   const [govtcert, setGovtCert] = useState();
   const [itcert, setItCert] = useState();
   const [passwd, setPasswd] = useState("");
   const [cnfrmpasswd, setCnfrmPasswd] = useState("");
   const [dor, setDOR] = useState();
   const [userstatus, setUserStatus] = useState("");

   const submitValidate = (e) =>{
      e.preventDefault();
      const ist = new Date();
      const date = `${ist.getFullYear()}/${ist.getMonth()+1}/${ist.getDate()}`;
      setDOR(date)
      Axios.post('http://localhost:3001/agencyregister',{
         name:name,
         email:email,
         contact:contact,
         address:address,
         // country:country,
         state:state,
         city:city,
         // pincode:pincode,
         estdate:estdate,
         govtcert:govtcert,
         itcert:itcert,
         passwd:passwd,
         dor:dor,
         userstatus:userstatus,
      }).then((response) => {
         console.log(response.data);
         if(response.data==="inserted1")
            navigate('/registeredpage');
         else if(response.data==="Error")
            alert("Technical error Failed to Register");
         else if(response.data==="exist")
               alert("mail already exist");
         else
            alert("Something Went Wrong");
         });
   }

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

      
            <div className="registerDiv">
         <form className="registerForm" >
            <table className="registerTable" cellPadding={15} >
               
               <tr>
                  <th><center><h1><b>REGISTRATION</b></h1></center></th>
               </tr>

               <tbody>
                  <tr >
                     <td colSpan={2}>
                        <input className="registerInputField" type="text" name="name" pattern="[A-Za-z]{2,}" required placeholder="Name of Agency"
                           onChange={(e) => setName(e.target.value)} />
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <input className="registerInputField" type="email" name="email" required placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)} />
                     </td>
                     
                     <td>
                        <input className="registerInputField" type="text" name="contact" maxLength={10} minLength={10} pattern="[789][0-9]{9}" required placeholder="Contact no."
                           onChange={(e) => setContact(e.target.value)} />
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <input className="registerInputField" id="addressField" type="text" name="address" required placeholder="Office Address"
                           onChange={(e) => setAddress(e.target.value)} />
                     </td>
                  </tr>
                  <tr>
                  
                     <td>
                        <input className="registerInputField" type="text" name="state" placeholder="State" required
                           onChange={(e) => setState(e.target.value)} />
                     </td>
                     <td>
                     &nbsp;&nbsp;&nbsp;
                     <input type="radio" value="india" className="radio" name="country" defaultChecked disabled />&nbsp;&nbsp;&nbsp; India
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
                     <th className="labels">
                        Agency Est. Date
                     </th>
                     <td>
                        <input className="registerInputField" type="date" name="estdate" 
                           onChange={(e) => setEstDate(e.target.value)} />
                     </td>
                     
                  </tr>
                  <tr>
                     <th className="labels">
                        Govt. authorised certificate
                     </th>
                     <td>
                        <input  type="file" className="labels" name="govtcertificate" />
                     </td>
                  </tr>
                  <tr>
                     <br></br>
                  </tr>
                  <tr>
                     <th className="labels">
                        IT returns doc(past 3yrs )
                     </th>
                     <td>
                        <input  className="labels" type="file" name="itreturn" />
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <input type="password" className="registerInputField" name="passwd" placeholder="Create Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                           onChange={(e) => setPasswd(e.target.value)} />
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <input type="password" className="registerInputField" name="cnfrmpasswd" placeholder="Confirm Password"
                           onChange={(e) => setCnfrmPasswd(e.target.value)} />
                     </td>
                  </tr>
                  <p>{(passwd !== cnfrmpasswd) ? "Password Doesn't Match" : ""}</p>
               </tbody>
               <tfoot>
                  <tr>
                     <td colSpan={2}>
                     <h3><input className="check" type="checkbox" /> I have read and accept the Terms of Service & Privacy Policy</h3>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <br></br>
                        <button type="submit" className="registerButton">Submit</button>
                     </td>
                  </tr>
               </tfoot>
            </table>

         </form>
   </div>
   </div>
</div>
        
   )

}

export default AgencyRegister;
