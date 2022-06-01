import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [registerNumber, setRegisterNumber] = useState("");
  const [candidatePassword, setCandidatePassword] = useState("");

  function handleSubmit(event) {
    console.log(registerNumber);
    event.preventDefault();
  }
  return (
    <div>
      <form className="pt-8 space-y-6 " onSubmit={handleSubmit}>
        <div>
          <div className="formFieldDiv">
            <label htmlFor="registerNumber" className="w-2/5">
              Username
            </label>
            <input
              type="text"
              id="registerNumber"
              name="registerNumber"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              className="formFieldClass"
            ></input>
          </div>

          <div className="formFieldDiv">
            <label htmlFor="candidatePassword" className="w-2/5">
              Password
            </label>
            <input
              type="text"
              id="candidatePassword"
              name="candidatePassword"
              value={candidatePassword}
              onChange={(e) => setCandidatePassword(e.target.value)}
              className="formFieldClass"
            ></input>
          </div>

          <div className="formFieldDiv flex justify-end">
            <Link to="/pswd" activeClassName="active">
              <input type="submit" className="btn" value="Submit" />
            </Link>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
