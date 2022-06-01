import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ResultScreen from "./resultScreen";
import CandidateLogin from "./CandidateLogin";

function CandidateRegistrationWrapper() {
  const registrationComponents = [<CandidateLogin/>];
  return (
    <div className="bg-white h-max mt-20 rounded-lg">
      
      <Routes>
        <Route path="candlogin" element={<CandidateLogin />} />
        <Route path="result" element={<ResultScreen></ResultScreen>}/>
      </Routes>
    </div>
  );
}

export default CandidateRegistrationWrapper;
