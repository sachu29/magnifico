import { React, useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [activeButton, setactiveButton] = useState(0);
  const handleClick = (index) => {
    setactiveButton(index === activeButton ? 0 : index);
  };
    
  const accordion = [
    {
      title: "Research",
      content:
        "1 Research, sit amet consectetur adipisicing elit. Sunt excepturi itaque eligendi possimus aliquam, fugiat hic nobis laudantium perferendis officiis quam a soluta tenetur odio cum veritatis? Facere, debitis perspiciatis?",
    },
    {
      title: "Plan",
      content:
        "2 Plan, sit amet consectetur adipisicing elit. Sunt excepturi itaque eligendi possimus aliquam, fugiat hic nobis laudantium perferendis officiis quam a soluta tenetur odio cum veritatis? Facere, debitis perspiciatis?",
    },
    {
      title: "Design",
      content:
        "3 Design, sit amet consectetur adipisicing elit. Sunt excepturi itaque eligendi possimus aliquam, fugiat hic nobis laudantium perferendis officiis quam a soluta tenetur odio cum veritatis? Facere, debitis perspiciatis?",
    },
  ];

  return (
    <>
      <div className="mt-4 mb-4 me-4 accordion">
        <div className="btn-layout mb-4 border-pill">
          {accordion.map((value, index) => (
            <button onClick={() => handleClick(index)} className={`accordion-btn ${index === activeButton ?"active": "" }`} key={index}>{value.title}</button>
          ))}
        </div>
        {activeButton !== null && <div>{accordion[activeButton].content}</div>}
      </div>
    </>
  );
};

export default Accordion;
