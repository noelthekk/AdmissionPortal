import React from "react";
import { Link } from "react-router-dom";

function CandidateSuccess() {
  let url = "";
  return (
    <div className="flex flex-col items-center justify-center mx-10">
      <div className="bg-green-succ h-max mt-30 rounded flex text-center w-full">
        <div className="icon w-1/6">
          <img
            className="object-contain h-5 w-5 m-2 "
            src="https://img.icons8.com/color/48/000000/ok--v1.png"
            alt="tick"
          />
        </div>

        <div className=" px-10 h-2 w-4/6 mt-1">
          Candidate Registration Success
        </div>
      </div>

      <div className="text-center my-8 ">
        You can login with Application No: as Username, Password and Applied
        District
      </div>
      <Link to="/pswd" activeClassName="active">
        <button className="btn w-54 mb-5">Candidate Login</button>
      </Link>
    </div>
  );
}

export default CandidateSuccess;
