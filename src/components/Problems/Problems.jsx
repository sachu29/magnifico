import React from "react";
import "./Problem.css";

const Problems = () => {
  return (
    <div className="container mb-5 ">
      <div className="row position-relative air-balloon">
        <div className="col-md-6 d-none d-sm-block"></div>
        {/*  */}
        <div className="col-md-6 col-sm-12 text-start text-white">
          <h2 className="mb-4 lh-1">Problems come and get solved with ease</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            explicabo pariatur? Qui tempora accusantium doloremque fugiat
            laudantium atque amet. Debitis, magnam hic porro nostrum libero
            dignissimos labore natus cumque assumenda?
          </p>
          <a href="/" className="text-white text-decoration-none">
            <span className="me-2">Improve workflow</span>{" "}
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
      </div>
    </div>
  );
};

export default Problems;
