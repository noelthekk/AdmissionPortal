import React from 'react'
import './App.css'
import CandidateRegistrationWrapper from './components/candidateLogin/CandidateRegistrationWrapper';
import DataSheet from './components/DataSheet';
//import SignForm from './components/SignForm'
// <SignForm/>
function App() {

  return (
    <div className='w-full flex justify-center bg-slate-200 h-screen'>
      <div className='w-3/5 center'><CandidateRegistrationForm/></div>
      </div>
  );
}

export default App
