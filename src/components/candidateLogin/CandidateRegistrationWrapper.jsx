import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CandidatePassword from './CandidatePassword'
import CandidateRegistrationForm from './CandidateRegistrationForm'
import CandidateVerification from './CandidateVerification'

function CandidateRegistrationWrapper() {
    const registrationComponents=[<CandidateRegistrationForm/>,<CandidateVerification/>,<CandidatePassword/>]
  return (
    <div className='bg-white h-max mt-20 rounded-lg'>
        <div className='text-center font-medium text-xl uppercase pt-10'>Candidate Registration</div><br/>
        <Routes>
        <Route path="/" element={<CandidateRegistrationForm />} />
        <Route path="otp" element={<CandidateVerification />} />
        <Route path="pswd" element={<CandidatePassword/>} />
      </Routes>
        
        
        </div>
  )
}

export default CandidateRegistrationWrapper