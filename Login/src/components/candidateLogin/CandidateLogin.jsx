import React, { useState } from "react";
import { Link } from "react-router-dom";

function CandidateLogin() {
  const [registerNumber, setRegisterNumber] = useState("");
  const [candidatePassword, setCandidatePassword] = useState("");

  // function handleSubmit(event) {
  //   console.log(registerNumber);
  //   event.preventDefault();
  // }

  const Login = () => {
    Axios.post("http://localhost:3000", {
      registerNumber: registerNumber,
      candidatePassword: candidatePassword,
      
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div>
      <form className="pt-8 space-y-6 " onSubmit={Login}>
        <div>
          <div className="formFieldDiv">
            <label htmlFor="registerNumber" className="w-2/5">
              Register Number
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

export default CandidateLogin;
