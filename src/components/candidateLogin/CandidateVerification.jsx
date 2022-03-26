import React,{useState} from 'react'

function CandidateVerification() {
    const [otpBtn, setotpBtn] = useState(true)
  return (
    <div>
        <div className="formFieldDiv">
            <div className='w-2/5'>Mobile Number</div>
            <div className='w-3/5 formFieldClass'>+91 9876543210</div>
        </div>
        {otpBtn?<div className="formFieldDiv">
        <button className='btn' onClick={()=>{setotpBtn(false)}}>Send OTP</button>
        </div>:       
        <div className="formFieldDiv">
            <div className='w-2/5'>Enter OTP</div>
            <div className='flex justify-evenly'>
            <input type="number"
                    id="recievedOtp"
                    name="recievedOtp" className='focus:ring-indigo-500 focus:border-indigo-500 block border-gray-200 border-2 rounded-md pl-3 py-1'></input>
            <button className='btn ml-5'>Verify OTP</button>
            </div>
            
        </div>}
        
        
    </div>
  )
}

export default CandidateVerification