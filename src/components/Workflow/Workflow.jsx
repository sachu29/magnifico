import React from "react";
import WorkflowImage from "../../assets/Screenshot 2024-01-22 111911.png";
import Accordion from "./../Accordion/Accordion";
import './Workflow.css'

const Workflow = () => {
  return (
    <div className="container">
      <div className="row py-5 improveWorkflow">
        <div className="col-md-6 col-sm-12 ">
          <h2 className="">Improve Workflow</h2>

          {/* Accordion Start*/}
          <Accordion />
          {/* Accordion End*/}

          <a href="/" className="text-decoration-none text-start">
            <span className="me-3 ">Check the tools</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </div>
        {/*  */}
        <div className="col-md-6 col-sm-12">
          <img
            src={WorkflowImage}
            alt=""
            className="img-fluid"
            style={{ width: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
