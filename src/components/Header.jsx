import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Router>
        <nav
          color="secondary"
          dark="dark"
          expand="md"
          class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar header"
        >
          <MDBNavbarBrand>
            <strong className="white-text">COVID-19 NEPAL</strong>
          </MDBNavbarBrand>
        </nav>
      </Router>
    );
  }
}

export default NavbarPage;
