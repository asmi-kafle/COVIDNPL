import React, { Component } from "react";
import TermsAndCond from "./TermsAndCond";
import {
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
 
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class FooterPage extends Component {

  render() {
    return (
      <Router>
        <nav
          color="secondary"
          dark="dark"
          expand="md"
          class="navbar navbar-expand-lg footer "
        >
          
          <MDBNavbarBrand>
            
          </MDBNavbarBrand>
            <MDBNavbarNav center="center">
              <MDBNavItem>
                {/* <MDBNavLink to="#!">Public</MDBNavLink> */}
              </MDBNavItem>
              <MDBNavItem>
                {/* <MDBNavLink to="#!">Medical Staff</MDBNavLink> */}
              </MDBNavItem>
              <MDBNavItem>
                {/* <div ><strong className="white-text"> <TermsAndCond/> </strong></div> */}
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right="right">
              <MDBNavItem>
              <div ><strong className="white-text"> <TermsAndCond/> </strong></div>
                {/* <MDBFormInline waves="waves">
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline> */}
              </MDBNavItem>
            </MDBNavbarNav>
        </nav>
      </Router>
    );
  }
}

export default FooterPage;

//9E9A9B