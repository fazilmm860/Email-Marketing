import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="pt-5 pb-3"></div>
        <footer className="footer-bg pt-4 pb-4">
          <div className="container">
            <div className="row">
             

              <div className="col-2 col-lg-1">
                <a className="link" target="__blank" href=""><p className="footer-link">COMPANY</p></a>
                <Link className="link" to='/terms'><p className="footer-link">TERMS</p></Link>
              </div>
              <div className="col-2 col-lg-1"></div>
              <div className="col-8 col-lg-10">
              <a className="link" target="__blank" href=""><p className="footer-link">PRODUCT</p></a>
               <Link className="link" to='/faq'> <p className="footer-link">FAQ</p></Link>
              </div>
            </div>
          </div>
        </footer>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <p className="copyright">Copyright 2024 Email Marketing</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
