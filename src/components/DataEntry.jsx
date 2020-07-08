import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBJumbotron,
  MDBCardTitle,
  MDBCardText,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import sendData from "../service/firebase";

const DataEntry = (props) => {
  useEffect(() => {}, []);
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ height: "100%" }}>
            <MDBCol>
              <h2 className="display-5">{props.title}</h2>
              <p className="lead">{props.subtitle}</p>
            </MDBCol>
            {!props.reset ? (
              <Fragment>
                <MDBBtn
                  color="primary"
                  onClick={() => {
                    props.callback(true);
                  }}
                >
                  YES! I feel good thanks!
                </MDBBtn>
                <MDBBtn
                  color=""
                  style={{ backgroundColor: "#CB3D3A", color: "white" }}
                  onClick={() => {
                    props.callback(false);
                  }}
                >
                  NO! I feel unwell
                </MDBBtn>
              </Fragment>
            ) : (
              <MDBBtn
                color=""
                style={{ backgroundColor: "#CB3D3A", color: "white" }}
                onClick={() => {
                  props.resetCallback(false);
                  props.dataCallback({});
                }}
              >
                Report another potential case!
              </MDBBtn>
            )}
            <hr className="my-2" />
            <p>{props.bottomText}</p>
            <strong>
              <a
                style={{ fontSize: "1.2rem" }}
                target="_blank"
                href="http://edcd.gov.np/resources/download/flyer-on-covid19"
              >
                EDCD Guidelines!
              </a>
            </strong>
            <br />
            <strong>
              <a
                style={{ fontSize: "1.2rem" }}
                target="_blank"
                href="http://edcd.gov.np/resources/download/infographicfor-asymptomatic-travelers"
              >
                Ways to stay safe
              </a>
            </strong>
            <p className="lead"></p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DataEntry;
