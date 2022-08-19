import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarSmall } from "../../components/Navbar";
import Axios from "axios";
import './heiStyles.css';

const HeiRegister = () => {

   const navigate = useNavigate();
   const [category, setCategroy] = useState("");

   const selectCategory = () => {
      if (category === "individual")
         return <RegisterIndividual />
      if (category === "organization")
         return <RegisterOrganization />
   }

   const RegisterIndividual = () => {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [contact, setContact] = useState("");
      const [address, setAddress] = useState("");
      const [country, setCountry] = useState("india");
      const [state, setState] = useState("");
      const [city, setCity] = useState("");
      const [pincode, setPinCode] = useState("");
      const [passwd, setPasswd] = useState("");
      const [cnfrmpasswd, setCnfrmPasswd] = useState("");
      const [govtcert, setGovtCert] = useState(null)
      const [dor, setDOR] = useState("");
      const [userstatus, setUserStatus] = useState("");
      
      const IndividualSubmit = (e) => {
         e.preventDefault();
         setDOR(Date());
         Axios.post('http://localhost:3001/heiregister',{
               category:category,
               name:name,
               email:email,
               contact:contact,
               address:address,
               country:country,
               state:state,
               city:city,
               pincode:pincode,
               passwd:passwd,
               govtcert:govtcert,
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
      }

      return (
         <div className="mainDiv">
            <div className="termsDiv">
               <table className="registerTable1">
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
            <form className="registerForm" onSubmit={(e) => IndividualSubmit(e)}>
               <table className="registerTable" cellPadding={15}>
                  <tbody>
                     <tr >
                        <td colSpan={2}>
                           <input className="registerInputField" type="text" name="name" pattern="[A-Za-z]{2,}" required placeholder="Name"
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
                           <input className="registerInputField" type="text" name="pincode" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Pincode" required
                              onChange={(e) => setPinCode(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input type="password" className="registerInputField" name="passwd" placeholder="Create Password" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
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
                           <button type="submit" >Submit</button>
                        </td>
                     </tr>
                  </tfoot>
               </table>
            </form>
            </div>
         </div>
      )
   }


   const RegisterOrganization = () => {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [contact, setContact] = useState("");
      const [address, setAddress] = useState("");
      const [country, setCountry] = useState("india");
      const [state, setState] = useState("");
      const [city, setCity] = useState("");
      const [pincode, setPinCode] = useState("");
      const [passwd, setPasswd] = useState("");
      const [cnfrmpasswd, setCnfrmPasswd] = useState("");
      const [govtcert, setGovtCert] = useState(null)
      const [dor, setDOR] = useState("");
      const [userstatus, setUserStatus] = useState("");

      const OrganizationSubmit = (e) => {
         setDOR(Date());
         e.preventDefault();
         Axios.post('http://localhost:3001/heiregister',{
               category:category,
               name:name,
               email:email,
               contact:contact,
               address:address,
               country:country,
               state:state,
               city:city,
               pincode:pincode,
               passwd:passwd,
               govtcert:govtcert,
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
      }

      return (
         <div className="mainDiv">
            <div className="termsDiv">
               <table className="registerTable1">
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
               <form className="registerForm" onSubmit={(e) => OrganizationSubmit(e)}>
                  <table className="registerTable" cellPadding={15}>
                     <tbody>
                        <tr >
                           <td colSpan={2}>
                              <input className="registerInputField" type="text" name="name" pattern="[A-Za-z]{2,}" required placeholder="Name"
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
                              <input type="radio"className="radio" value="india" name="country" defaultChecked disabled />&nbsp; India
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
                              <input className="registerInputField" type="text" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Pincode" required
                                 onChange={(e) => setPinCode(e.target.value)} />
                           </td>
                        </tr>

                        <tr>
                           <th>Govt. Authorization</th>
                           <td>
                              <input type="file" onChange={(e) => setGovtCert(e.target.value)}/>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <input type="password" className="registerInputField" placeholder="Create Password" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                                 onChange={(e) => setPasswd(e.target.value)} />
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <input type="password" className="registerInputField" placeholder="Confirm Password"
                                 onChange={(e) => setCnfrmPasswd(e.target.value)} />
                              {(passwd !== cnfrmpasswd) ? "Password Doesn't Match" : ""}
                           </td>
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
                              <button type="submit" >Submit</button>
                           </td>
                        </tr>
                     </tfoot>
                  </table>
               </form>
            </div>
         </div>
      )
   }

   return (
      <div>
         <div>
            <NavBarSmall/>
         </div>
         <div className="registerMainDiv">
            <form className="registerMainForm">
               <table className="registerMainTable">
                  <thead>
                     <tr>
                        <select name="category" onChange={(e) => setCategroy(e.target.value)} >
                           <option value="null" defaultChecked >-select-</option>
                           <option value="organization">Organization</option>
                           <option value="individual">Individual</option>
                        </select>
                     </tr>
                  </thead>
                  <tbody>
                     {selectCategory()}
                  </tbody>
               </table>
            </form>
         </div>
      </div>
      
   )
}


export default HeiRegister