import React from "react";


// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from "../assets/img/logo.png";

// Core Components

function MechaHeader() {
  const logo = require('../assets/img/logo.png');
  return (
    <>
      <header className="header-4">
        <div className="header-wrapper">
          <div className="">
            <Container className="text-center">
                <img style={{marginTop: "7.5em", marginBottom: "3em", marginRight: "auto", maxWidth: "100%"}} src={logo}></img>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
}

export default MechaHeader;
