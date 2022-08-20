import React from "react";
import ourProcessRight from "./../../images/ourProcessRight.png";
import "./OurProcess.css";
const OurProcess = () => {
  return (
    <>
      <div className="mainContainerOurProcess" id="ourProcess">
        <div className="mainContainerOurProcessInner">
          <div className="leftOurProcess">
            <div className="ourProcessWeb">
              <div className="topOurDiv">
                <p className="ourTxtOurProcess">Our</p>
                <div className="ourProcessLine"></div>
              </div>
              <p className="ourTxtOurProcess">Process</p>
            </div>
            <div className="ourProcessMobile">
              <div className="topOurDiv">
                <div className="ourProcessLine"></div>
                <p className="ourTxtOurProcess">Our Process</p>
                <div className="ourProcessLine"></div>
              </div>
            </div>

            <div className="lineLeftInBetween"></div>

            <div className="thirdRowOurProcessLeft">
              <div className="leftCardTextNoOP">
                <div className="numberTxtOP">1</div>
                <div>
                  <p className="leftCardHeadingOP">
                    Designing the user interface of app.
                  </p>
                  <p className="leftCardTxtDetailOP">
                    {" "}
                    In house designers create the user interface design of the app
                  </p>
                </div>
              </div>
              <div className="leftCardTextNoOP">
                <div className="numberTxtOP">2</div>
                <div>
                  <p className="leftCardHeadingOP">
                    Implementing the design & functionality
                  </p>
                  <p className="leftCardTxtDetailOP">
                    {" "}
                    Translate the design into a functioning app along with base functionality
                  </p>
                </div>
              </div>
            </div>
            <div className="thirdRowOurProcessLeft">
              <div className="leftCardTextNoOP">
                <div className="numberTxtOP">3</div>
                <div>
                  <p className="leftCardHeadingOP">
                    Database & API integration
                  </p>
                  <p className="leftCardTxtDetailOP">
                    {" "}
                    Implement the database into the app as well as API integration and other third party functionalities.
                  </p>
                </div>
              </div>
              <div className="leftCardTextNoOP">
                <div className="numberTxtOP">4</div>
                <div>
                  <p className="leftCardHeadingOP">
                    Implement any requested revisions
                  </p>
                  <p className="leftCardTxtDetailOP">
                    {" "}
                    Implement any final revisions that might be requested. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightOurProcess">
            <img className="rightOurProImg" src={ourProcessRight} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
