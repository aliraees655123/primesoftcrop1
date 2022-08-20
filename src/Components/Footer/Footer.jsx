import React from "react";
import footerICon from "./../../images/footerICon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="mainContainerFooter">
        <div className="topRowFooterMobile">
          <img src={footerICon} className="footerIconMob" />
          <p className="footerMobTxt">
            {" "}
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur.
          </p>
          <p className="copyRightTxt">Copyright 2022</p>
        </div>
        <div className="topRowFooter">
          <div>
            <p className="topTxtHeader">Address</p>
            <p className="paraTxtFooter">10025 Hemloc Ave, Fontana CA</p>
          </div>
          <div>
            <p className="topTxtHeader">Contact Us</p>
            <p className="paraTxtFooter">
              1+ (888) 637-7405 info@primesoftcorp.com
            </p>
          </div>  
        </div>
        <div className="secondRowFooter">
          <p className="privacyTxt">Privacy Policy</p>
          <p className="privacyTxt1 privacyTxt2">Copyright2022</p>
          <p className="privacyTxt1 "> All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
