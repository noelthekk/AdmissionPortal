import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [adminId, setadminId] = useState("");
  const [adminPassword, setadminPassword] = useState("");


const handleSubmit = () => {
  console.log(adminId);
  console.log(adminPassword);
  Axios.post("http://localhost:3001/admin", {
    adminId: adminId,
    adminPassword: adminPassword,
  }).then((response) => {
    console.log(response);
  });
};
  // function handleSubmit(event) {
  //   console.log(adminId);
  //   event.preventDefault();
  // }
  return (
    <div>
      <form className="pt-8 space-y-6 " onSubmit={handleSubmit}>
        <div>
          <div className="formFieldDiv">
            <label htmlFor="adminId" className="w-2/5">
              Username
            </label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              value={adminId}
              onChange={(e) => setadminId(e.target.value)}
              className="formFieldClass"
            ></input>
          </div>

          <div className="formFieldDiv">
            <label htmlFor="adminPassword" className="w-2/5">
              Password
            </label>
            <input
              type="text"
              id="adminPassword"
              name="adminPassword"
              value={adminPassword}
              onChange={(e) => setadminPassword(e.target.value)}
              className="formFieldClass"
            ></input>
          </div>

          <div className="formFieldDiv flex justify-end">
            <Link to="/admpanel" activeClassName="active">
              <input type="submit" className="btn" value="Submit" />
            </Link>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
