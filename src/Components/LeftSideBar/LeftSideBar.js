import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";



import { Link } from 'react-router-dom';

const LeftSideBar = () => {


  return (
    <nav className='sidebar sidebar-offcanvas'  id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="text-wrapper">
              <p className="profile-name">Email Marketing</p>
              <p className="designation">App</p>
            </div>
          </a>
        </li>
        <li className="nav-item nav-category">Main Menu
        </li>
        
         
          <>
            <li className={`nav-item`}>
              <Link className="nav-link" to="/account">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Account</span>
              </Link>
            </li>
            <li className={`nav-item `}>
              <Link className="nav-link" to="/dashboard">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            <li className={`nav-item `}>
              <Link className="nav-link" to="/dashboard">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Leads </span>
              </Link>
            </li>
          </>
        

        
          <>
          
          </>
        
      </ul>
    </nav>
  );
};
export default LeftSideBar;