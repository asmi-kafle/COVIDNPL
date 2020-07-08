import React, { useState } from "react";
import { MDBJumbotron, MDBInput, MDBBtn } from "mdbreact";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  ViberShareButton
} from "react-share";
import { useEffect } from "react";

const FormPage = props => {
  const [cityInput, setCity] = useState("");
  const [emailInput, setEmail] = useState("");
  const [streetInput, setStreet] = useState("");
  const [phoneInput, setPhone] = useState("");

 

  const handleSubmit = () => {
    //console.log("handle submit");
    props.dataCallback({
      ...props.currentData,
      address: {
        ...props.currentData.address,
        city: cityInput,
        street: streetInput
      },
      contact:{
        ...props.currentData.contact,
        email:emailInput,
        phone:phoneInput

      }
    });
  };
  const websiteURL = "www.fightcovidnepal.com";
  const message =
    "\n Help fight COVID-19 by letting us know how you are doing!";
  return (
    <div class="container">
      <MDBJumbotron style={{ height: "100%", padding: "2rem 4rem" }}>
        <form>
          <p className="h4 text-center mb-4">{props.message}</p>
          <p className="h6 text-center mb-4">
            If you would like to get COVID-19 related updates in your area,
            please enter your location and contact information
          </p>
          <div className="grey-text">
            <MDBInput
              label="Enter your street"
              icon="location-arrow"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              value={streetInput}
              getValue={text => setStreet(text)}
            />
            <MDBInput
              label="Enter your city"
              icon="location-arrow"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              value={cityInput}
              getValue={text => setCity(text)}
            />
            <MDBInput
              label="Enter your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              value={emailInput}
              getValue={text => setEmail(text)}
            />
            <MDBInput
              label="Enter your phone"
              icon="phone"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              value={phoneInput}
              getValue={text => setPhone(text)}
            />
          </div>
          <div className="text-center">
            <MDBBtn
              color=""
              style={{
                backgroundColor: "white",
                color: "#CB3D3A",
                boxShadow: "1px 1px 2px 2px #CB3D3A"
              }}
              onClick={() => {
                
                props.callback(null);
                handleSubmit();
              }}
            >
              {" "}
              Send me Updates{" "}
            </MDBBtn>
          </div>
          <hr />
          <p className="h6 text-center mb-4">
            Please help us track and fight COVID-19 by sharing this from with
            your friends!
          </p>
          <p class="shareIcons text-center">
            <FacebookShareButton url={websiteURL}>
              <i
                class="fab fa-facebook-f socialMediaIcons"
                style={{ color: "#4285f4" }}
              ></i>
            </FacebookShareButton>
            <WhatsappShareButton url={websiteURL + message}>
              <i
                class="fab fa-whatsapp socialMediaIcons"
                style={{ color: "#4285f4" }}
              ></i>
            </WhatsappShareButton>
            <ViberShareButton url={websiteURL + message}>
              <i
                class="fab fa-viber socialMediaIcons"
                style={{ color: "#4285f4" }}
              ></i>
            </ViberShareButton>
            <TwitterShareButton url={websiteURL}>
              <i
                class="fab fa-twitter socialMediaIcons"
                style={{ color: "#4285f4" }}
              ></i>
            </TwitterShareButton>
          </p>
          <div class="row">
            <div class="col-lg-6">
              <MDBInput
                label="Enter email address"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div class="col-lg-6" style={{ textAlign: "right" }}>
              <EmailShareButton url={websiteURL + message}>
                <MDBBtn
                  color=""
                  style={{
                    backgroundColor: "white",
                    color: "#CB3D3A",
                    boxShadow: "1px 1px 2px 2px #CB3D3A"
                  }}
                >
                  {" "}
                  Send{" "}
                </MDBBtn>
              </EmailShareButton>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <MDBInput
                icon="link"
                value={websiteURL}
                group
                type="text"
                id="linkField"
              />
            </div>
            <div class="col-lg-6" style={{ textAlign: "right" }}>
              <MDBBtn
                onClick={() => {
                  const copyText = document.getElementById("linkField");
                  copyText.select();
                  copyText.setSelectionRange(0, 99999);
                  document.execCommand("copy");
                }}
                color=""
                style={{
                  backgroundColor: "white",
                  color: "#CB3D3A",
                  boxShadow: "1px 1px 2px 2px #CB3D3A"
                }}
              >
                Copy Link
              </MDBBtn>
            </div>
          </div>
        </form>
      </MDBJumbotron>
    </div>
  );
};

export default FormPage;

// Check out this website!
// var .... = // variable for website
// Stay informed and get
// Stay safe and protect yourself and your loved ones!

//Thank you for filling out the form! A doctor will get in touch with you shortly!
//Until then, please stay home and protect your loved one and follow
//            these edcd guidelines: http://edcd.gov.np/resources/download/flyer-on-covid19
