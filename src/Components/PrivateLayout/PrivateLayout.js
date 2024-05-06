import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useLocation, Outlet, Link, useNavigate } from "react-router-dom"
import LeftSideBar from "../LeftSideBar/LeftSideBar";

import './index.css'
import axios from 'axios';
 import { LoginContext } from '../ContextProvider/Context';



const PrivateLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const {loginData,setLoginData} = useContext(LoginContext);

  const history = useNavigate();

  const[anchorE1, setAnchorE1]=useState(null);
  const open = Boolean(anchorE1);
  const [validUserData, setValidUserData] = useState(null);

  useEffect(()=>{
    //Fetch product iD and user status when the component mounts
    
    const fetchData=async()=>{
      try{
          let token = localStorage.getItem("userdatatoken")
          const url ='http://localhost:8080/api/validuser'
          const response =await axios.get(url,{
            headers:{
              'Content-Type':"application/json",
              'Authorization':token,
              Accept:'application/json'
            },
            withCredentials: true
          })
          const data = response.data;
        console.log(data);

        if (data.status === 201) {
          // Update product ID and user status
          setValidUserData(data.validUserOne);
          console.log(data.validUserOne);
        } else {
          console.log("Error fetching user data");
        }
      }catch(error){
        console.error("Error fetching user data :", error);
      }
    }
    fetchData();
  },[])

  const handleClick = (event) =>{
        setAnchorE1(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorE1(null)
  }
 
  
  const logoutUser = async () =>{
    try {
      let token = localStorage.getItem("userdatatoken");
      const url ='http://localhost:8080/api/logout'
    const response = await axios.get(url,{
      headers:{
        'Content-type':"application/json",
        'Authorization':token,
        Accept:'application/json'
      },
      withCredentials:true
    });

    const data = response.data
    console.log(data);

    if(data.status === 201){

        console.log('User logged out');
        localStorage.removeItem("userdatatoken")
        setLoginData(false);
        history("/")
    }else{
      console.log("Enter Logging out");
    }
    } catch (error) {
      console.error("Error logging out :", error);
    }
    
  }
 const goDash = () =>{
      history('/')
 }
 const goError = () =>{
  history('*')
 }
 const [onlineStatus, setOnlineStatus] = useState(navigator.onLine ? 'Online' : 'Offline');

 useEffect(() => {
  // Listen for online/offline status changes
  const handleOnlineStatusChange = () => {
    setOnlineStatus(navigator.onLine ? 'Online' : 'Offline');
  };
  window.addEventListener('online', handleOnlineStatusChange);
  window.addEventListener('offline', handleOnlineStatusChange);

  // Clean up event listeners
  return () => {
    window.removeEventListener('online', handleOnlineStatusChange);
    window.removeEventListener('offline', handleOnlineStatusChange);
  };
}, []);
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
          
           <li className="nav-item font-weight-semibold d-none d-lg-block">User Name : {validUserData && validUserData.fname} </li>
            

            <li className="nav-item font-weight-semibold d-none d-lg-block">
              
                  <div>
                  {onlineStatus === 'Online' ? (
                <span className='online'>Online</span>
              ) : (
                <span className='offline'>Offline</span>
              )}
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
                    {validUserData && validUserData.fname}
                    </p>
                  

                </div>
               
                <a  className="dropdown-item" onClick={() => {
                                        logoutUser()
                                        handleClose()
                                    }}>
                  Sign Out<i className="dropdown-item-icon ti-power-off"></i> 
                </a>
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