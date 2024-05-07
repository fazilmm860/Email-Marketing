import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { ToastContainer } from 'react-toastify';
const MailStatistics = () => {
    const [isStatistics,setIsStatistics]=useState([]);
    const [isEmalDetails,setIsEmailDetails]=useState([]);

    useEffect(()=>{
        const fetchEmailStatistics = async () => {
            try {
                const url ='http://localhost:8080/api/mail-statistics'
              const response = await axios.get(url);
              const AllStatistics = response.data;
              console.log(AllStatistics);
              setIsStatistics(AllStatistics)
            } catch (error) {
              console.error(`Error in fetching Email Statistics`, error);
            }
        };
        fetchEmailStatistics()
      },[])

      useEffect(()=>{
        const fetchEmailDetails = async () => {
            try {
                const url ='https://email-marketing-p55w.onrender.com/api/get-mail-details'
              const response = await axios.get(url);
              const AllDetails = response.data;
              console.log(AllDetails);
              setIsEmailDetails(AllDetails)
            } catch (error) {
              console.error(`Error in fetching Email Details`, error);
            }
        };
        fetchEmailDetails()
      },[])
   
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        {/* <!-- Page Title Header Starts--> */}
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">Statistics Of Mail</h4>
              <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                
              </div>
            </div>
          </div>
        </div>
     
       
                    
          <div className="row">
            <div className="col-12 col-md-4 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">

                    <div className="col-12 mb-3">

                      <h4 >Total Number of Mail Sent : {isStatistics.totalMailsSent}</h4>
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

                      <h4 >Total Number of Mail Deliverd : {isStatistics.totalMailsDelivered} </h4>
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

                      <h4 >Total Number of Mail Failed:{isStatistics.totalMailsFailed}</h4>
                     
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- tab mode ends  --> */}

          <div className="row">
                    <div className="col-12 col-md-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Subject</th>
                                                <th>Content</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {isEmalDetails.map(emailDetails => (
                                                <tr key={emailDetails._id}>
                                                    <td>{emailDetails.from}</td>
                                                    <td>{emailDetails.to}</td>
                                                    <td>{emailDetails.subject}</td>
                                                    <td>{emailDetails.content}</td>
                                                  
                                                
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>

       
       
      <footer className="footer">
        <div className="container-fluid clearfix">
          <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
           Email Marketing App
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            {" "}
            ©{" "}
            <a href="" target="_blank">
             Email Marketing 
            </a>{" "}
            2024
          </span>
        </div>
      </footer>
    </div>
  )
}

export default MailStatistics
