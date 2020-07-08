import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";

const SymptomCard = ({ title, image, text }) => {
  const [isPressed, setPressed] = useState(false);
  //TODO conditional rendering of footer
  // editing temp footer

  const getFooter = (text) => {
    return <MDBCardFooter>{text}</MDBCardFooter>;
  };

  return (
    <div class="col-sm-3 col-md-3">
      <MDBCard className="symptoms">
        <MDBCardImage
          className="img-fluid symptomImg img-responsive"
          src={image}
          alt="Breathing"
        ></MDBCardImage>
        <MDBCardBody>
          <MDBCardText style={{ textAlign: "center" }}>{text}</MDBCardText>
        </MDBCardBody>
        {/* to add the getFooter call here */}
      </MDBCard>
    </div>
  );
};

export default SymptomCard;
