import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import Wallet from "./Wallet/Wallet.jsx";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col, UncontrolledCollapse, NavItem,
} from "reactstrap";

function MechaNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("mainTopNavbar"), {
      tolerance: {
        down : 10,
        up : 10
      },
      offset : 205
    });
    // initialise
    headroom.init();
  });
  return (

      <Navbar className="navbar navbar-dark headroom navbar-main" id="mainTopNavbar" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#outbackmartians" onClick={(e) => e.preventDefault()}>
              Outback Martians
            </NavbarBrand>
            <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#mecha-header"
                data-toggle="collapse"
                id="mecha-header"
                type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <UncontrolledCollapse
              id="mecha-header"
              navbar
              toggler="#mecha-header"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#mechagnomes" onClick={(e) => e.preventDefault()}>
                    Outback Martians <span></span>
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                      aria-controls="navigation-index"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#mecha-header"
                      data-toggle="collapse"
                      id="mecha-header"
                      type="button"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                    className="nav-link-icon"
                    href="https://discord.com/invite/VAMfGWqWEB"
                    onClick={() => window.open("https://discord.com/invite/VAMfGWqWEB")}
                >
                  <i className="fab fa-discord"></i>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/OutbackMartians"
                    onClick={() => window.open("https://twitter.com/OutbackMartians")}

                >
                  <i className="fab fa-twitter"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>

  );
}

MechaNavbar.defaultProps = {
  type: "dark",
};

MechaNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default MechaNavbar;
