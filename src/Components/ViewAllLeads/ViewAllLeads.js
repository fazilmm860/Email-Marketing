import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
const ViewAllLeads = () => {
    const [isLeads,setIsLeads]=useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const url ='http://localhost:8080/api/view'
              const response = await axios.get(url);
              const AllLeads = response.data.leads;
              console.log(AllLeads);
              setIsLeads(AllLeads)
            } catch (error) {
              console.error(`Error in fetching users`, error);
            }
        };
        fetchUsers()
      },[])
      const handleDeleteLeads=async(leadId)=>{
        try {
            const url ='http://localhost:8080/api/delete'
            const shouldDelete= window.confirm('Are you sure?')
            if(shouldDelete){
                const res= await axios.delete(`${url}/${leadId}`)
                if(res.status ===200){
                    setIsLeads(prevLead=>prevLead.filter(lead=>lead._id !== leadId ))
                    toast.success("Lead Deleted Successfully")
                }
            }
        } catch (error) {
            console.error(`Error Delete Lead from Catch:${error} `);
            toast.error('Failed to delete Lead')
        }
      }
      //Count the number of customers and re-sellers
      let customerCount =0;
      let resellerCount =0;
      isLeads.forEach((lead)=>{
        if(lead.type === 'customer'){
            customerCount++;
        }else if (lead.type === 're-seller'){
            resellerCount++;
        }
      })
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        {/* <!-- Page Title Header Starts--> */}
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">View All Leads</h4>
              <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page Title Header Ends--> */}
        <div className="row">
                    <div className="col-12 col-md-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email ID</th>
                                                <th>Mobile</th>
                                                <th>Type</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isLeads.map(lead => (
                                                <tr key={lead._id}>
                                                    <td>{lead.fname}</td>
                                                    <td>{lead.lname}</td>
                                                    <td>{lead.email}</td>
                                                    <td>{lead.mobile}</td>
                                                    <td>{lead.type}</td>
                                                    <td>
                                                        <Link to={`/edit-leads/${lead._id}`}>
                                                            <button className="btn btn-primary">Edit</button>
                                                        </Link>
                                                        <button className="btn btn-danger ml-2"onClick={()=>handleDeleteLeads(lead._id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <ToastContainer/>
                                </div>
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

                      <h4 >Total Number of Leads : {isLeads.length}</h4>
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

                      <h4 >Customers : {customerCount}</h4>
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

                      <h4 >Re-seller: {resellerCount}</h4>
                     
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- tab mode ends  --> */}
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

export default ViewAllLeads
