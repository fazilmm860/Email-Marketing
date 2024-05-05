import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/LeftSideBar";

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';




const UsersLog = () => {

  
  const [selectedUser, setSelectedUser] = useState(null);
  const [users,setUsers]=useState([]);
  const [editData,setEditData]=useState(null);

 
  useEffect(()=>{
    const fetchUsers = async () => {
        try {
          const url ='http://localhost:8080/api/getallusers'
          const response = await axios.get(url);
          const userData = response.data.users;
          console.log(userData);
          setUsers(userData)
        } catch (error) {
          console.error(`Error in fetching users`, error);
        }
    };
    fetchUsers()
  },[])
    
  
  
const navigate=useNavigate();


  return (
   
    <div className="row">
  <div className="col-12 col-md-6 grid-margin">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h1>Active User List</h1>
          </div>
          <div className="col-12  mb-3">
            <ul className="list-group">
              {users.map(user => (  
                <li key={user._id} className="list-group-item">
                  {user.fname}
                  <div className="float-right"> {/* Corrected class name */}
                   {user.email}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
  );

}



const ManageUsers = () => { 

    return (
      <div className="main-panel">
        <div className="content-wrapper">
          {/* <!-- Page Title Header Starts--> */}
          <div className="row page-title-header">
            <div className="col-12">
              <div className="page-header">
                <h4 className="page-title">User Log Dashboard</h4>
                <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                 
                
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Page Title Header Ends--> */}

          <UsersLog/>
          

        </div>

        <footer className="footer">
          <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
              AquaBox Control and Monitor System
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              {" "}
              ©{" "}
              <a href="" target="_blank">
                Ebhoom Solutions LLP
              </a>{" "}
              2022
            </span>
          </div>
        </footer>
      </div>
    )
}


export default ManageUsers;