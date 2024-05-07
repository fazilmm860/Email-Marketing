import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./index.css";

const SignIn = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
   
  });
  const history = useNavigate();

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const loginuser = async (e) => {
    e.preventDefault();
    const { email, password, userType } = inpval;

    if (email === "") {
      toast.error("email is required!",{
        position:'top-right'
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!",{
        position:'top-right'
      });
    }else if (password === "") {
      toast.error("password is required!",{
        position:'top-right'
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!",{
        position:'top-right'
      });
    } else {
      try {
        const response = await axios.post(
          "https://email-marketing-p55w.onrender.com/api/login",
          { email, password }
        );
        const { status, result } = response.data;

        if (status === 200) {
          localStorage.setItem("userdatatoken", result.token);
          history("/dashboard");
          setInpval({ ...inpval, email: "", password: "" });
          toast.success("User logged successfully",{
            position:'top-right'
          })
        } else {
          toast.error("Invalid Credentials",{
            position:'top-right'
          });
        }
      } catch (error) {
        console.error("Error Logging In :", error);

        toast.error("An error Occured. Please try again later.", {
          position:'top-right'
        });
      }
    }
  };

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
                  value={inpval.email}
                  onChange={setVal}
                  name="email"
                  id="email"
                  className="input-field"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
              <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                  className="input-field"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
              <Link className="link" to="/reset-password-email">
                {" "}
                <p className="forgot">Forgot password?</p>
              </Link>
              
              <button
                type="submit"
                className="signin-button"
                onClick={loginuser}
              >
                Sign In
              </button>
            </form>
           
          </div>
          <ToastContainer/>
        </div>
      </div>
    </>
  );
};

export default SignIn;
