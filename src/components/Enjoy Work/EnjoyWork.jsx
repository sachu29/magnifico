import React from "react";
import "./EnjoyWork.css";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";

const EnjoyWork = () => {
  return (
    <div className="row align-items-center mx-2 ">
      <div className="col-md-6 col-sm-12 text-center">
        <img src={Img3} className="img-1 img-fluid" alt="" />
        <img src={Img2} className="img-2 img-fluid" alt="" />
        <img src={Img1} className="img-3 img-fluid" alt="" />
      </div>
      {/*  */}
      <div className="col-md-6 col-sm-12 text-start">
        <h2 className="">Enjoy your time working</h2>
        <p className="enjoyWork-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          doloremque dicta delectus tempora culpa obcaecati cupiditate saepe,
          deleniti in et nesciunt quo ducimus incidunt ad dolor dolore natus
          numquam cum!
        </p>
        <a href="/" className="text-decoration-none">
          See how it helped others <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default EnjoyWork;
