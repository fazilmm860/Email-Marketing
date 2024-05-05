import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useLocation, Outlet, Link, useNavigate } from "react-router-dom"
import LeftSideBar from "../LeftSideBar/LeftSideBar";

import './index.css'
// import { LoginContext } from '../ContextProvider/Context';
// import axios from 'axios';


const PrivateLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
//   const {loginData,setLoginData} = useContext(LoginContext);

//   const history = useNavigate();

//   const[anchorE1, setAnchorE1]=useState(null);
//   const open = Boolean(anchorE1);
//   const [validUserData, setValidUserData] = useState(null);

//   useEffect(()=>{
//     //Fetch product iD and user status when the component mounts
    
//     const fetchData=async()=>{
//       try{
//           let token = localStorage.getItem("userdatatoken")
//           const response =await axios.get('http://localhost:4444/api/validuser',{
//             headers:{
//               'Content-Type':"application/json",
//               'Authorization':token,
//               Accept:'application/json'
//             },
//             withCredentials: true
//           })
//           const data = response.data;
//         console.log(data);

//         if (data.status === 201) {
//           // Update product ID and user status
//           setValidUserData(data.validUserOne);
//           console.log(data.validUserOne);
//         } else {
//           console.log("Error fetching user data");
//         }
//       }catch(error){
//         console.error("Error fetching user data :", error);
//       }
//     }
//     fetchData();
//   },[])

//   const handleClick = (event) =>{
//         setAnchorE1(event.currentTarget);
//   };
//   const handleClose = () =>{
//     setAnchorE1(null)
//   }
 
  
//   const logoutUser = async () =>{
//     try {
//       let token = localStorage.getItem("userdatatoken");

//     const response = await axios.get('http://localhost:4444/api/logout',{
//       headers:{
//         'Content-type':"application/json",
//         'Authorization':token,
//         Accept:'application/json'
//       },
//       withCredentials:true
//     });

//     const data = response.data
//     console.log(data);

//     if(data.status === 201){

//         console.log('User logged out');
//         localStorage.removeItem("userdatatoken")
//         setLoginData(false);
//         history("/")
//     }else{
//       console.log("Enter Logging out");
//     }
//     } catch (error) {
//       console.error("Error logging out :", error);
//     }
    
//   }
//  const goDash = () =>{
//       history('/')
//  }
//  const goError = () =>{
//   history('*')
//  }
  return (
    <div className='container-scroller'>    
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a className="navbar-brand brand-logo" href="#">
            <h1 className="aqualogo">Email</h1>
            <span className="navbar-brand brand-logo-mini">
              <h1 className="aqualogo">App</h1>
            </span>{" "}
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <ul className="navbar-nav">
          
           <li className="nav-item font-weight-semibold d-none d-lg-block">User Id : 0001 </li>
            

            <li className="nav-item font-weight-semibold d-none d-lg-block">
              
                  <div>
                 
                  </div>
               
            </li>
          </ul>
          
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item dropdown d-xl-inline-block user-dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="UserDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="img-xs rounded-circle"
                  src="assets/images/admin.png"
                  alt="Profile image"
                />{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="UserDropdown"
              >
                <div className="dropdown-header text-center">
                  <img
                    className="img-md rounded-circle"
                    src="assets/images/admin.png"
                    alt="Profile image"
                  />
                  
                    <p className="mb-1 mt-3 font-weight-semibold"></p>
                  
                  
                    <p className="font-weight-light text-muted mb-0">
                      User Id:001
                    </p>
                  

                </div>
                {/* <a className="dropdown-item">
                  My Profile <i className="dropdown-item-icon ti-dashboard"></i>
                </a>
                <a className="dropdown-item">
                  Messages<span className="badge badge-pill badge-danger">1</span>
                  <i className="dropdown-item-icon ti-comment-alt"></i>
                </a>
                <a className="dropdown-item">
                  Activity<i className="dropdown-item-icon ti-location-arrow"></i>
                </a>
                <a className="dropdown-item">
                  FAQ<i className="dropdown-item-icon ti-help-alt"></i>
                </a> */}
                {/* onClick={() => {
                  logoutUser()
                  handleClose()
              }} */}
              <Link to='/'> <a  className="dropdown-item" >
                  Sign Out<i className="dropdown-item-icon ti-power-off"></i> 
                </a>
                </Link>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="mdi mdi-menu"></span>
          </button>
           {/* Dropdown */}
        {isDropdownOpen && (
          <div className="dropdown-menu-right navbar-dropdown toggle-dropdown">
            <ul className="dropdown-list">
              <li>
                <Link to="/account" onClick={closeDropdown}>Account</Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={closeDropdown}>Dashboard</Link>
              </li>
              <li>
                <Link to="/leads" onClick={closeDropdown}>Leads</Link>
              </li>
             
            </ul>
          </div>
        )}  
        </div>
      </nav>
      
      {/* <!-- partial --> */}
      <div className="container-fluid page-body-wrapper">
        {/* <!-- partial:partials/_sidebar.html --> */}
        <LeftSideBar />

        {/* <!-- partial --> */}
 
        <Outlet  />


      </div>
    </div>

  )

};

export default PrivateLayout;