import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const SignIn = () => {
 
  return (
    <>
      <div className="pt-4 pb-4"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 blue-box">
            <h1 className="blue-box-text">
               Email Marketing application            </h1>
          </div>
          <div className="col-12 col-lg-6 padd pt-4">
            {/* <div className="alert alert-danger mt-3 mb-0"></div> */}
            <form>
              <p className="signin-text mb-5">Sign In</p>
              <span className="error"></span>
              <div className="mb-4">
                <input
                  type="email"
                  // value={inpval.email}
                  // onChange={setVal}
                  name="email"
                  id="email"
                  className="input-field"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  // onChange={setVal}
                  // value={inpval.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                  className="input-field"
                />
                {/* <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div> */}
              </div>
              <Link className="link" to="/reset-password-email">
                {" "}
                <p className="forgot">Forgot password?</p>
              </Link>
              
             <Link to='/dashboard'> <button
                type="submit"
                className="signin-button"
                // onClick={loginuser}
              >
                Sign In
              </button></Link>
            </form>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
