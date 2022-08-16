import React from "react";
import { useState } from "react";

const HeiRegister = () =>{

   const [category, setCategroy] = useState("");

   const selectCategory = () => {
      if(category === "individual")
         return <RegisterIndividual/>
      if(category === "organization")
         return <RegisterOrganization/>
   }

   const RegisterIndividual = () =>{

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

      const IndividualSubmit = (e) =>{
         e.preventDefault();
      }

      return(
         <div className="registerDiv">
            <form className="registerForm" onSubmit={(e) => IndividualSubmit(e)}>
               <table className="registerTable">
                  <tbody>
                     <tr >
                        <td colSpan={2}>
                           <input className="registerInputField" type="text" name="name" pattern="[A-Za-z]{2,}" required placeholder="Name" 
                              onChange = {(e) => setName(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="email" name="email" required placeholder="Email" 
                              onChange = {(e) => setEmail(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="contact" maxLength={10} minLength={10} pattern="[789][0-9]{9}" required placeholder="Contact no." 
                              onChange = {(e) => setContact(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input className="registerInputField" id="addressField" type="text" name="address" required placeholder="Office Address" 
                              onChange = {(e) => setAddress(e.target.value)}/>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input type="radio" value="india" name="country" defaultChecked disabled/>&nbsp; India
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="state" placeholder="State" required
                              onChange = {(e) => setState(e.target.value)}/>
                        </td> 
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="text" name="city" placeholder="City/Town" required
                              onChange = {(e) => setCity(e.target.value)}/>
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="pincode" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Pincode" required
                              onChange = {(e) => setPinCode(e.target.value)}/>
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
                              onChange={(e) => setCnfrmPasswd(e.target.value)}/>
                        </td>
                     </tr>
                     <p>{ (passwd !== cnfrmpasswd) ? "Password Doesn't Match" : "" }</p>
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

   const RegisterOrganization = () =>{


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
      
      const OrganizationSubmit = (e) =>{
         e.preventDefault();
      }

      return(
         <div className="registerDiv">
            <form className="registerForm" onSubmit={(e) => OrganizationSubmit(e)}>
               <table className="registerTable">
                  <tbody>
                     <tr >
                        <td colSpan={2}>
                           <input className="registerInputField" type="text" name="name" pattern="[A-Za-z]{2,}" required placeholder="Name" 
                              onChange = {(e) => setName(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="email" name="email" required placeholder="Email" 
                              onChange = {(e) => setEmail(e.target.value)} />
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="contact" maxLength={10} minLength={10} pattern="[789][0-9]{9}" required placeholder="Contact no." 
                              onChange = {(e) => setContact(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input className="registerInputField" id="addressField" type="text" name="address" required placeholder="Office Address" 
                              onChange = {(e) => setAddress(e.target.value)}/>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <input type="radio" value="india" name="country" defaultChecked disabled/>&nbsp; India
                        </td>
                        <td>
                           <input className="registerInputField" type="text" name="state" placeholder="State" required
                              onChange = {(e) => setState(e.target.value)}/>
                        </td> 
                     </tr>
                     <tr>
                        <td>
                           <input className="registerInputField" type="text" name="city" placeholder="City/Town" required
                              onChange = {(e) => setCity(e.target.value)}/>
                        </td>
                        <td>
                           <input className="registerInputField" type="text" maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="Pincode" required
                              onChange = {(e) => setPinCode(e.target.value)}/>
                        </td>
                     </tr>
                     <tr>
                        <th>Govt. Authorization</th>
                        <td>
                           <input type="file" />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input type="password" className="registerInputField" placeholder="Create Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              onChange={(e) => setPasswd(e.target.value)} />
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <input type="password" className="registerInputField" placeholder="Confirm Password" 
                              onChange={(e) => setCnfrmPasswd(e.target.value)} />
                              { (passwd !== cnfrmpasswd) ? "Password Doesn't Match" : "" }
                        </td>
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

   return(
      <div> 
         <form>
            <table>
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
   )
}
   

export default HeiRegister