import React, { useDebugValue, useState } from "react";

function CandidateSuccess() {
  let url = "";
  return (
    <div className="flex flex-col">
      <div className="bg-green-succ mx-10 h-max mt-30 rounded flex flex-row-nowrap">
        <div className="icon">
          <img
            className="object-contain h-5 w-5 m-2 "
            src="https://img.icons8.com/color/48/000000/ok--v1.png"
            alt="tick"
          />
        </div>

        <div className=" m-1 px-10 grow h-2">
          Candidate Registration Success
        </div>
      </div>

      <div className="text-center m-10">
        You can login with Application No: as Username, Password and Applied
        District
      </div>

      {/* <div className="text-center m-10"> */}
        <a className="text-center m-10" href={url}>Candidate Login</a>
      {/* </div> */}
    
    </div>
  );
}

export default CandidateSuccess;
