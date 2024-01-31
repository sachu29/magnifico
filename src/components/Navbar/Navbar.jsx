import React from "react";
import "../Navbar/Navbar";
import NavDropDown from "./NavDropDown";
import SignUp from "./../Button/SignUp";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom">
        <div className="container-fluid">
          <h2 className="m-0 p-0 d-flex">
            <a className="navbar-brand" href="/">
              magnifico
            </a>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*  */}
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <NavDropDown title="Products" />
              <NavDropDown title="Solutions" />
              <NavDropDown title="Services" />
              <NavDropDown title="Help Center" />
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Pricing
                </a>
              </li>
            </ul>
            {/*  */}
            <div className="d-flex">
              <button className="btn btn-outline-primary me-2" type="submit">
                Log in
              </button>
              <SignUp />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
