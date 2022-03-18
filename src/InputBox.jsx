import React from "react";

//type="email" design= {classes.inputBoxDesign} 

function InputBox(props) {
  return (
    <div>
      <label htmlFor={props.type}>
          {props.type}
      </label>
      <input
        type={props.type}
        className= {props.design}
       // className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
        id={props.type}
        placeholder={"Your "+ props.type}
      />
    </div>
  );
};

export default InputBox;
