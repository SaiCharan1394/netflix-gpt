import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true)
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Name"
          className="p-4  mb-3 w-full bg-gray-800 rounded-lg"
        />)}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4  mb-3 w-full bg-gray-800 rounded-lg"
        />
        <input type="password" placeholder="password" className="p-4 mb-4 w-full bg-gray-800 rounded-lg" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className="py-4">{isSignInForm? "New to Netflix?":"Already a Customer?"}<span className=" cursor-pointer" onClick={toggleSignInForm}> {isSignInForm? "Sign up now.": "Sign in now"}</span></p>
      </form>
    </div>
  );
};
export default Login;
