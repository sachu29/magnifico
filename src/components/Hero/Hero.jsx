import React from "react";
import './Hero.css'
import HeroImg from "../../assets/Screenshot 2024-01-22 111911.png";
import SignUp from "./../Button/SignUp";

const Hero = () => {
  return (
    <div className="border-bottom">
      <div className="container">
        <div className="row text-start py-5">
          <div className="col-md-6 col-sm-12 mb-2">
            <h1>Team projects, done well</h1>
            <p>
              The only platform that gives your team all the tools needed to
              work togather on their awesome projects.
            </p>
            <div className="row">
              <div className="col-md-8 col-sm-6">
                <div className="pe-0 position-relative mb-4">
                  <i class="bi bi-envelope"></i>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter work email"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6  text-center ps-0 mb-4">
                <SignUp />
              </div>
            </div>

            <div className="row team-logo text-center p-2 rounded">
              {/* <div className="col-md-12 col-sm-6"> */}
                <div className="col-md-3 col-sm-6">
                  <i class="bi bi-browser-chrome"></i> SHELLS
                </div>
                <div className="col-md-3 col-sm-6">
                  <i class="bi bi-browser-safari"></i> SmartFinder
                </div>
                <div className="col-md-3 col-sm-6">
                  <i class="bi bi-apple"></i> ArtVenue
                </div>
                <div className="col-md-3 col-sm-6">
                  <i class="bi bi-bank2"></i> WAVES
                </div>
              {/* </div> */}
            </div>
          </div>
          {/*  */}
          <div className="col-md-6 col-sm-12  text-center">
            <img
              src={HeroImg}
              alt="HeroImage"
              className="img-fluid"
              style={{ width: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
