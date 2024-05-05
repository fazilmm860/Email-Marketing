import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/LeftSideBar";

export default class Account extends Component {
  render() {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          {/* <!-- Page Title Header Starts--> */}
          <div className="row page-title-header">
            <div className="col-12">
              <div className="page-header">
                <h4 className="page-title">Account</h4>
                <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                  {/* <!-- <ul className="quick-links">
                  <li><a href="#">option 1</a></li>
                  <li><a href="#">Own analysis</a></li>
                  <li><a href="#"> data</a></li>
                </ul> --> */}
                  {/* <!-- <ul className="quick-links ml-auto">
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">option 2</a></li>
                </ul> --> */}
                </div>
              </div>
            </div>

          </div>
          {/* <!-- Page Title Header Ends--> */}
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <p className="account-details">Product ID : 323345645 <sup><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg></sup></p>
                      <p className="account-details">Model Name : AquaBox Model M</p>
                      <p className="account-details">Email ID : admin@email.com</p>
                      <p className="account-details">Password : ************</p>
                      <button type="button" className="password-button">Change Password</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* <!-- tab mode   --> */}

          {/* <div className="row">
            <div className="col-12 col-md-4 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">

                    <div className="col-12 mb-3">

                      <h4 >Initial Flow Rate : 60L/sec</h4>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">

                    <div className="col-12 mb-3">

                      <h4 >Initial Treated Water : 123456</h4>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">

                    <div className="col-12 mb-3">

                      <h4 >Staff in charge</h4>
                      <p className="mb-0">Remesh Suresh</p>
                      <p>9878675443</p>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div> */}

          {/* <!-- tab mode ends  --> */}



        </div>
        {/* <!-- content-wrapper ends -->
      <!-- partial:partials/_footer.html --> */}
        <footer className="footer">
          <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Email Marketing</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> ©  <a href="" target="_blank">Email Marketing</a> 2024</span>
          </div>
        </footer>
        {/* <!-- partial --> */}
      </div>
    )
  }
}
