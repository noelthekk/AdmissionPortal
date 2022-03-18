import React from "react";
import InputBox from "./InputBox";

const Login = () => {
  // const [user,setUserData] = useState({email:'', password:''});
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };

  const classes = {
    pageBody: "h-screen flex bg-grey",
    formContainer:
      "w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
    btnCharacter: `bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`,
    inputBoxDesign: `w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`,
  };

  return (
    <div className={classes.pageBody}>
      <div className={classes.formContainer}>
        <h1 className={classes.formHeading}>Log in to your account</h1>

        <form onSubmit={handleFormSubmit}>
          <InputBox type="email" design={classes.inputBoxDesign} />
          <InputBox type="password" design={classes.inputBoxDesign} />

          {/* 
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className= {classes.inputBoxDesign}
                           // className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>
                    */}
          <div
            className={classes.btnContainer}
            //className='flex justify-center items-center mt-6'
          >
            <button
              className={classes.btnCharacter}
              //className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
