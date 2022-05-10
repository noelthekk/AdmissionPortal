import React from "react";
import { useFormik } from "formik";

const DataSheet = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const classes = {
    pageBody: "grid sm:grid-cols-4 grid-cols-3 h-screen flex-inital bg-grey",
    formContainer:
      "w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
    btnCharacter: `bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`,
    inputBoxDesign: `w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`,
  };
  const formik = useFormik({
    initialValues: {
      passoutYear: "",
      schoolName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.pageBody}>
        {/* */}
        {/*
      <div className={classes.formContainer}>
      */}
      <h1 className={classes.formHeading}>Enter Details</h1> 
      
        
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="passoutYear">Passout Year</label>
          <input
            id="passoutYear"
            className={classes.inputBoxDesign}
            name="passoutYear"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.passoutYear}
          />

          <label htmlFor="schoolName">School Name</label>
          <input
            id="schoolName"
            className={classes.inputBoxDesign}
            name="schoolName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
          />

          <div className={classes.btnContainer}>
            <button className={classes.btnCharacter}>Submit</button>
          </div>
          
        </form>
      {/* </div> */}
    </div>
  );
};
export default DataSheet;
