import React, { useState, useMemo } from "react";
import "./ProjectIdea.css";
import Select from "react-select";
import swal from "sweetalert";

import axios from "axios";
import countryList from "react-select-country-list";
const ProjectIdea = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    messageTxt: "",
  });

  const [nameValid, setNameValid] = useState(0);
  const [emailValid, setEmailValid] = useState(0);
  const [companyValid, setCompanyValid] = useState(0);
  const [countryValid, setCountryValid] = useState(0);
  const [messageTxtValid, setMessageTxtValid] = useState(0);
  const [textValid, setTextValid] = useState(0);
  const[validEmail,setValidEmail]=useState(0);
  const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });

    if (message.name) {
      setNameValid(0);
    }

    if (message.email) {
      setEmailValid(0);
    }
    if (message.company) {
      setCompanyValid(0);
    }

    if (message.messageTxt) {
      setMessageTxtValid(0);
    }

    if (
      message.name &&
      message.email &&
      message.company &&
      value &&
      message.messageTxt
    ) {
      setTextValid(0);
    }

    if(message.email && regexp.test(message.email)){

      setValidEmail(2);
      
      console.log("validEmail",validEmail)

    }
  };

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (v) => {
    setValue(v);
    console.log("changeHandler");

    setCountryValid(0);

    if (
      message.name &&
      message.email &&
      message.company &&
      message.messageTxt
    ) {
      setTextValid(0);
    }
  };

  console.log("value", value.label);

  
  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !message.name ||
      !message.email ||
      !message.company ||
      !value.label ||
      !message.messageTxt
    ) {
      setTextValid(1);
    }

    if (!message.name) {
      setNameValid(1);
    }

    if (!message.email) {
      setEmailValid(1);
    }
    if (!message.company) {
      setCompanyValid(1);
    }
    if(message.email && !regexp.test(message.email)){

        // console.log("validEmail")
      setValidEmail(1);
    }
    if (!value) {
      console.log("countryField", value);
      setCountryValid(1);

      // console.log("countryValid",countryValid)
    }
    if (!message.messageTxt) {
      setMessageTxtValid(1);
    }

    if (
      message.name &&
      message.email &&
      message.company &&
      value.label &&
      message.messageTxt&&
      regexp.test(message.email)
    ) {
      const data = {
        name: message.name,
        email: message.email,
        company: message.company,
        country: value.label,
        messageTxt: message.messageTxt,
      };
      console.log(" ", data);
  try{
    const response = await axios.post(
      "http://localhost:5000/api/sendEmail",
      data
    );

    console.log("response", response.data.message);

    swal({
      text: response.data.message,
      icon: "success",
      button: "Ok",
    });
  }catch(err){
    swal({
      text: err.response.message,
      icon: "error",
      button: "Ok",
    });
  }
    }
  };

  console.log("textValid", textValid);
  return (
    <>
      <div className="mainContainerIdea" id="projectIdea">
        <div className="mainContainerIdeaInner">
          <p className="projIdeHeader">Have a project idea? Let’s do it</p>
          <p className="projIdeaParaTxt">
            Thank you for your interest. Fill out the form below for any
            inquiries you might have.
          </p>
          <div className="mainContainerFormPI">
          {validEmail == 1 && (
              <p className="validTxt1">Please enter correct email.</p>
            )}
            {textValid == 1 && (
              <p className="validTxt">Please fill all the given fields.</p>
            )}
          
            <div className="topTwoInputFormIdea">
              <div className={nameValid == 1 ? "inputFieldFormValid" : ""}>
                <p className="txtNameForm">Your name*</p>
                <input
                  placeholder="Enter name"
                  className="inputFieldForm"
                  name="name"
                  value={message.name}
                  onChange={handleChange}
                />
              </div>
              <div className={emailValid == 1 ? "inputFieldFormValid" : ""}>
                <p className="txtNameForm">Contact email*</p>
                <input
                  placeholder="your@example.come"
                  className="inputFieldForm"
                  type="email"
                  name="email"
                  value={message.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="topTwoInputFormIdea topTwoInputFormIdea1">
              <div className={companyValid == 1 ? "inputFieldFormValid" : ""}>
                <p className="txtNameForm">Company name*</p>
                <input
                  placeholder="Company name"
                  name="company"
                  value={message.company}
                  onChange={handleChange}
                  className="inputFieldForm"
                />
              </div>

              <div className={countryValid == 1 ? "inputFieldFormValid1" : ""}>
                <p className="txtNameForm">Country*</p>
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                  // name="country"
                  // value={message.name}
                  className="inputFieldFormSelect"
                />

                {/* <input placeholder="Enter name" /> */}
              </div>
            </div>
            <div
              className={
                messageTxtValid == 1
                  ? "topTextAreaFieldValid"
                  : "topTextAreaField"
              }
            >
              <p className="yourSmsForm">Your message*</p>
              <textarea
                rows="4"
                cols="50"
                onChange={handleChange}
                name="messageTxt"
                value={message.messageTxt}
                placeholder="Type something here..."
                className="inputTextArea"
              ></textarea>
            </div>
            <button className="sendNowBtnIdea" onClick={sendEmail}>
              Send Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectIdea;
