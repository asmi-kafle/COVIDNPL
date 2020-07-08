import React from "react";
import ReactDOM from "react-dom";
import { MDBBtn, MDBBtnGroup, MDBCol, MDBRow } from "mdbreact";

const BtnGroupPage = () => {
  return (
    <MDBRow>
      <MDBCol md="12" className="mb-12">
        <MDBBtnGroup size="lg">
          <MDBBtn color="unique">Left</MDBBtn>
        </MDBBtnGroup>
        <MDBBtnGroup size="lg">
          <MDBBtn color="unique">Middle</MDBBtn>
        </MDBBtnGroup>
        <MDBBtnGroup size="lg">
          <MDBBtn color="unique">Right</MDBBtn>
        </MDBBtnGroup>
      </MDBCol>
    </MDBRow>
  );
};

export default BtnGroupPage;
