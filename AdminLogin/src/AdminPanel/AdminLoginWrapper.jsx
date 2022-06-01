import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

function AdminLoginWrapper() {
  const registrationComponents = [<AdminLogin/>,<AdminPanel/>];
  return (
    <div className="bg-white h-max mt-20 rounded-lg">
      <div className="text-center font-medium text-xl uppercase pt-10">
        Admin Login
      </div>
      <br />
      <Routes>
        <Route path="" element={<AdminLogin/>} />
        <Route path="/admpanel" element={<AdminPanel/>} />
      </Routes>
    </div>
  );
}

export default AdminLoginWrapper;
