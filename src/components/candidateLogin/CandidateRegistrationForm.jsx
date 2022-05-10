import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

function CandidateRegistrationForm() {
   // January, February, March, April, May, June, July, August, September, October, November, December
    var month=["January","February","March","April","May", "June", "July", "August","September", "October", "November", "December"]
    const [startDate, setStartDate] = useState(new Date());
    const [sslcScheme, setSslcScheme] = useState("SSLC (2021-2022)");
    const [registerNumber, setRegisterNumber] = useState("")
    const [yearPass, setyearPass] = useState("")
    const [monthPass, setmonthPass] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const handleSubmit=() => {
        Axios.post("http://localhost:3000/register",{
            sslc_scheme: sslcScheme,
            reg_num: registerNumber,
            month_pass: monthPass,
            year_pass: yearPass,
            dob: startDate
        })
    }
  return (
    <div>
      <form className="pt-8 space-y-6 " onSubmit={handleSubmit} >
          <div>
            <div className="formFieldDiv">
                <label htmlFor="sslcScheme" className="w-2/5">
                    SSLC Scheme
                </label>
                <select
                    id="sslcScheme"
                    name="sslcScheme"
                    value={sslcScheme}
                    onChange={(e)=>setSslcScheme(e.target.value)}
                    className="formFieldClass"
                    >
                    <option>SSLC (2021-2022)</option>
                    <option>SSLC (2020-2021)</option>
                    <option>SSLC (2019-2020)</option>
                </select>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="registerNumber" className="w-2/5">
                    Register Number
                </label>
                <input
                    type="text"
                    id="registerNumber"
                    name="registerNumber"
                    value={registerNumber}
                    onChange={(e)=>setRegisterNumber(e.target.value)}
                    className="formFieldClass">                   
                </input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="monthPass" className="w-2/5">
                    Month Pass
                </label>
                <select
                    id="monthPass"
                    name="monthPass"
                    value={monthPass}
                    onChange={(e)=>setmonthPass(e.target.value)}
                    className="formFieldClass">
                    {month.map((value)=><option>{value}</option>)}
                </select>
            </div>

            <div className="formFieldDiv">
                <label htmlFor="yearPass" className="w-2/5">
                    Year Pass
                </label>
                <select
                    id="yearPass"
                    name="yearPass"
                    value = {yearPass}
                    onChange={(e)=>setyearPass(e.target.value)}
                    className="formFieldClass">
                    {[2019,2020,2021].map((value)=><option>{value}</option>)}
                </select>
            </div>

            <div className="formFieldDiv">
                <label htmlFor="dateOfBith" className="w-2/5">
                    Date Of Birth
                </label>
               <div className="formFieldClass">
                   <DatePicker id="dateOfBith"
                name="dateOfBith"
                className='w-full'
                 selected={startDate} onChange={(date) => setStartDate(date)} />
               </div>
                
            </div>

            <div className="formFieldDiv">
                <label htmlFor="mobileNo" className="w-2/5">
                    Mobile Number
                </label>
                <input
                    type="number"
                    prefix="+91"
                    id="mobileNo"
                    name="mobileNo"
                    value={mobileNumber}
                    onChange={(e)=>setMobileNumber(e.target.value)}
                    className="formFieldClass">                   
                </input>
            </div>

            <div className="formFieldDiv">
                <label htmlFor="confirmMobileNo" className="w-2/5">
                    Confirm Mobile Number
                </label>
                <input
                    type="number"
                    prefix="+91"
                    id="confirmMobileN"
                    name="confirmMobileN"
                    className="formFieldClass">                   
                </input>
            </div>
            

            <div className="formFieldDiv">
                <label htmlFor="modeOfApplication" className="w-2/5">
                Mode Of Application
                </label>
                <select
                    id="modeOfApplication"
                    name="modeOfApplication"
                    placeholder="aaaaaaaaaaaaaaa"
                    className="formFieldClass" >
                    {['Select Application Submission Mode','aa','bb'].map((value)=><option>{value}</option>)}
                </select>
            </div>
            <div className="formFieldDiv flex justify-end">
                
            <input type="submit" className="btn"   value="Submit" />
            <input className="ml-5 btn" type="reset" value="Reset" />
            </div>
          </div>
          
          
      
      </form>
    </div>
  )
}

export default CandidateRegistrationForm