import React from "react";
// import ReactDOM from "react-dom";
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
import Map from "./map";

const MapComponent = (props) => {
  return (
    <div class="container-fluid bottomContainer">
      <div
        class="flex-fill"
        style={{ height: "70vh", backgroundColor: "transparent" }}
      >
        <MDBCard style={{ height: "100%" }}>
          <Map callback={props.callback} location={props.location} />
        </MDBCard>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default MapComponent;
