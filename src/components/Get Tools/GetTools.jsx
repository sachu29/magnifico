import React from 'react'
import CompassImg from '../../assets/Compass Image.png'
import './GetTools.css'
const GetTools = () => {
  return (
    <div className="container  my-5">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12 text-start">
          <h2 className="">Get all the Tools Your team needs</h2>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sed
            aliquam error et veniam iusto laborum deserunt possimus quia autem
            quidem tenetur sint architecto fuga illum, ducimus vel, neque
            eveniet.
          </p>
          <a href="/">
            Check the tools <i class="bi bi-arrow-right"></i>
          </a>
        </div>
        {/*  */}
        <div className="col-md-6 col-sm-12 text-center">
          <img
            src={CompassImg}
            className="img-fluid"
            alt=""
            style={{ width: 500 }}
          />
        </div>
      </div>
    </div>
  );
}

export default GetTools