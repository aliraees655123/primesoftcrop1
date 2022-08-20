import React from "react";
import "./HeaderComponent.css";
import rightMain from "./../../images/rightMain.png";
import client1 from "./../../images/client1.png";
import client2 from "./../../images/client2.png";
import client3 from "./../../images/client3.png";
import client4 from "./../../images/client4.png";
import elipsePic from "./../../images/elipse.png";
import elipsePoly from "./../../images/elipsePoly.png";

const HeaderComponent = () => {
  return (
    <>
      <div className="mainHeaderComponent">
      
        <div className="leftHeaderComp">
          <div className="topTurnTxtIdea"> 
            <p className="leftHP1">Turn Your Idea Into Reality</p>
            <p className="leftHP2">
              Native iOS app development partner for leading software companies.
              Skip the costly set-up of an in-house team and get straight to the
              talent.
            </p>
           <a href="#projectIdea" style={{textDecoration:"none"}}> <button className="btnGetQuote">Get a Quote</button></a>
          </div>

          <div className="topClientTxtLeftHide">
            <p className="joinOurClientTxt">Join Our Happy Clients:</p>
            <div className="topImagesClient">
              <img src={client1} className="clientImg" />
              <img src={client3} className="clientImg" />
              <img src={client2} className="clientImg clientImg2" />
             
              <img src={client4} className="clientImg clientImg1" />
            </div>
          </div>
        </div>
        <div className="rightHeaderComp">
          <div className="topRightForPos">
            <img src={rightMain}  className="headerRightMainImg"/>
            <div className="positionCardRight">
            
              <div className="topRowPosH">
                <div className="topPosLeftHeader">
                  <div className="eclipseBack">
                    <img   src={elipsePoly} />
                  </div>
                  <div className="txtPartPosLeft">
                    <p className="posNameTxt">David White</p>
                    <p className="posTimeTxt"> 3 days ago</p>
                  </div>
                </div>
                <div className="posNumberTxt">+200</div>
              </div>
              <div className="topRowPosH">
                <div className="topPosLeftHeader">
                  <div className="eclipseBack">
                    <img className="innerEclipse" src={elipsePoly} />
                  </div>
                  <div className="txtPartPosLeft">
                    <p className="posNameTxt">Caleb Clark</p>
                    <p className="posTimeTxt"> 1 week ago</p>
                  </div>
                </div>
                <div className="posNumberTxt">-100</div>
              </div>
              <div className="topRowPosH">
                <div className="topPosLeftHeader">
                  <div className="eclipseBack">
                    <img  className="innerEclipse" src={elipsePoly} />
                  </div>
                  <div className="txtPartPosLeft">
                    <p className="posNameTxt">Groceries</p>
                    <p className="posTimeTxt"> 9/21/22</p>
                  </div>
                </div>
                <div className="posNumberTxt">-120</div>
              </div>
              <div className="topRowPosH">
                <div className="topPosLeftHeader">
                  <div className="eclipseBack">
                    <img  className="innerEclipse" src={elipsePoly} />
                  </div>
                  <div className="txtPartPosLeft">
                    <p className="posNameTxt">Jacob Reed</p>
                    <p className="posTimeTxt">9/16/22</p>
                  </div>
                </div>
                <div className="posNumberTxt">+300</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>


      <div className="topClientTxtLeftShow">
            <p className="joinOurClientTxt">Join Our Happy Clients:</p>
            <div className="topImagesClient">
              <img src={client1} className="clientImg clientImg11 " />
              <img src={client3} className="clientImg clientImg22" />
              <img src={client2} className="clientImg clientImg2" />
             
              <img src={client4} className="clientImg clientImg1" />
            </div>
          </div>
    </>
  );
};

export default HeaderComponent;
