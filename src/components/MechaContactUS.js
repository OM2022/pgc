import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
function joinCommunity() {
  window.location = "https://discord.com/invite/VAMfGWqWEB";
}
// Core Components

function MechaContactUS() {
  return (
    <>
      <div className="contactus-3">
        <Container className="pt-1">
          <Row>
            <Col className="text-center my-5" md="12">
              <h1 className="title display-1 mt-3 header-white">Have questions?</h1>
              <h3 className="lead">
                Join the discord and ask away! We’ll make sure to get you sorted out.
              </h3>
              <Button className="btn-icon mt-3" color="dark" type="button">
                <span className="btn-inner--icon">
                  <i className="fab fa-discord"></i>
                </span>
                <span className="btn-inner--text" onClick={joinCommunity}>Open Discord</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MechaContactUS;
