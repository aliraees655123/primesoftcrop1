import React from "react";
import "./TakeAMoment.css";
import momentRightPic from "./../../images/momentRightPic.png";
const TakeAMoment = () => {
  return (
    <>
      <div className="mainContainerTakeMoment" id="takeMoment">
        <div>
          <img className="momentRightPic"  src={momentRightPic} />
        </div>  
        <div className="topTextTakeMoment"> 
          <p className="p1TakeMoment">Take a Moment To Learn A Little Bit About Us</p>
          <p className="p2TakeMoment">
            At PrimeSoft Corp, we deliver industry-level, responsive, and
            efficient iOS apps to our clients. Our development process has
            proved to have a 100% quicker turnaround than the industry standard
            while maintaining higher quality apps. Turn your idea into reality
            now.
          </p>
        </div>
      </div>
      {/* <div id="service"></div> */}
    </>
  );
};

export default TakeAMoment;
