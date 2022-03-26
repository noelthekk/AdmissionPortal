import React from 'react'
import CandidatePassword from './CandidatePassword'
import CandidateRegistrationForm from './CandidateRegistrationForm'
import CandidateVerification from './CandidateVerification'

function CandidateRegistrationWrapper() {
    const registrationComponents=[<CandidateRegistrationForm/>,<CandidateVerification/>,<CandidatePassword/>]
  return (
    <div className='bg-white h-max'>
        <div className='text-center font-medium text-xl uppercase pt-10'>Candidate Registration</div><br/>
        <div>{registrationComponents[0]}</div>
        {/* <div><CandidateVerification/></div>
        <div><CandidatePassword/></div> */}
        
        </div>
  )
}

export default CandidateRegistrationWrapper