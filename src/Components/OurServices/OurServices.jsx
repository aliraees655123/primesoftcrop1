import React from "react";
import "./OurServices.css";
import arrowDownPic from "./../../images/arrowDown.png";
const OurServices = () => {
  return (
    <>
      <div className="mainContainerOutServices" id="service">
        <div className="mainContainerOutServicesInner">
          <p className="ourSerTxt">Our Services</p>
          <div className="topTxtArrowDiv">
            <p className="iosDevSerTxt">iOS Development Services Such As</p>
            <img className="arrowOurSerImg" src={arrowDownPic} />
          </div>
          <div className="topThirdROS">
            <div className="topThirdROSCard">
              <div className="lineTopServices"></div>
              <p className="fullIosTxtOS">Full iOS App Development</p>
            </div>

            <div className="topThirdROSCard">
              <div className="lineTopServices"></div>
              <p className="fullIosTxtOS">iOS Development Consulting</p>
            </div>
            <div className="topThirdROSCard">
              <div className="lineTopServices"></div>
              <p className="fullIosTxtOS">Bug Fixes & Code Refactoring</p>
            </div>
            <div className="topThirdROSCard">
              <div className="lineTopServices"></div>
              <p className="fullIosTxtOS">iOS App Design Services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
