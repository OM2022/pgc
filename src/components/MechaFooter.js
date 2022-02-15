import React from "react";

// reactstrap components
import {Button, NavLink, Container, Row, Col} from "reactstrap";

// Core Components

function MechaFooter() {
    return (
        <>
            <footer className="footer footer-simple bg-gradient-darker">
                <Container>
                    <Row>
                        <Col md="5">
                            <a
                                className="footer-brand"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >

                            </a>
                        </Col>
                        <Col md="2">
                            <img
                                alt="..."
                                className="logo logo-sm logo-footer"
                                src={require("assets/img/logo.png")}

                            ></img>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default MechaFooter;
