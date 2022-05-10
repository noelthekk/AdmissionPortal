import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CandidateLogin from "./CandidateLogin";

function CandidateRegistrationWrapper() {
  const registrationComponents = [<CandidateLogin/>];
  return (
    <div className="bg-white h-max mt-20 rounded-lg">
      <div className="text-center font-medium text-xl uppercase pt-10">
        Candidate Login
      </div>
      <br />
      <Routes>
        <Route path="/candlogin" element={<CandidateLogin />} />
      </Routes>
    </div>
  );
}

export default CandidateRegistrationWrapper;
